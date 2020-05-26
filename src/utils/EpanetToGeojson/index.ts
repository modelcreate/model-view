import { featureCollection, feature, Feature } from "@turf/helpers";
import { EpanetResults } from "../EpanetBinary";

import ModelFeatureCollection from "../../interfaces/ModelFeatureCollection";

interface Node {
  objType: string;
  table: string;
  node_id: string;
  x: number;
  y: number;
  z: number;
  index: number;
  profile?: string;
}

interface Tank {
  objType: string;
  table: string;
  node_id: string;
  x: number;
  y: number;
  z: number;
  InitLvl: number;
  MinLvl: number;
  MaxLvl: number;
  Diam: number;
  MinVol: number;
  VolCurve: string;
  index: number;
}

interface Pump {
  objType: string;
  table: string;
  us_node_id: string;
  ds_node_id: string;
  link_suffix: string;
  index: number;
  bends?: number[][];
}

interface Pipe extends Link {
  length: number;
  roughness: number;
  status: string;
}

interface Valve extends Link {
  type: string;
  setting: number;
}

interface Link {
  objType: string;
  table: string;
  us_node_id: string;
  ds_node_id: string;
  link_suffix: string;
  diameter?: number;
  minorLoss?: number;
  index: number;
  bends?: number[][];
}

interface Nodes {
  [id: string]: Node | Tank;
}

interface Links {
  [id: string]: Pipe | Valve | Pump;
}

interface EpanetData {
  nodeIndex: number;
  linkIndex: number;
  currentFunction: string;
  nodes: Nodes;
  links: Links;
}

export function toGeoJson(
  inpFile: string,
  epanetResults: EpanetResults
): ModelFeatureCollection {
  const epanetData: EpanetData = {
    currentFunction: "",
    nodeIndex: 0,
    linkIndex: 0,
    nodes: {},
    links: {},
  };

  const lines = inpFile.split("\n");
  const data = lines.reduce((previousValue, currentValue, currentIndex) => {
    return readLine(previousValue, currentValue);
  }, epanetData);

  const nodeFeatures = Object.values(data.nodes).reduce(
    (previousValue, currentValue, currentIndex) => {
      return previousValue.concat(pointFeature(currentValue));
    },
    [] as Feature[]
  );

  const linkFeatures = Object.values(data.links).reduce(
    (previousValue, currentValue, currentIndex) => {
      return previousValue.concat(lineFeature(currentValue, data));
    },
    [] as Feature[]
  );

  const fc = featureCollection(nodeFeatures.concat(linkFeatures));
  console.log(fc);
  const model: ModelFeatureCollection = {
    ...fc,
    model: {
      timesteps: createTimeSteps(epanetResults.prolog.reportingPeriods),
    },
  };

  return model;
}

function readLine(
  epanetData: EpanetData,
  unTrimmedCurrentLine: string
): EpanetData {
  const currLine = unTrimmedCurrentLine.replace(/\s+/g, " ").trim();

  // if line starts with ; or is blank skip
  if (currLine[0] === ";" || currLine[0] === "" || currLine[0] === undefined) {
    return epanetData;
  }

  // if line starts with [ then new section
  if (currLine[0] === "[" || currLine[currLine.length - 1] === "]") {
    epanetData.currentFunction = currLine;
    return epanetData;
  }

  switch (epanetData.currentFunction) {
    case "[JUNCTIONS]":
      return junctions(epanetData, currLine);
    case "[RESERVOIRS]":
      return reservoirs(epanetData, currLine);
    case "[PIPES]":
      return pipes(epanetData, currLine);
    case "[VALVES]":
      return valves(epanetData, currLine);
    case "[COORDINATES]":
      return coordinates(epanetData, currLine);
    case "[VERTICES]":
      return vertices(epanetData, currLine);
    case "[PUMPS]":
      return pumps(epanetData, currLine);
    case "[TANKS]":
      return tanks(epanetData, currLine);
    default:
      return epanetData;
  }
}

function pointFeature(node: Node): Feature {
  const geometry = {
    type: "Point",
    coordinates: [node.x, node.y],
  };

  const props = {
    ...node,
  };

  return feature(geometry, props);
}

function lineFeature(link: Link, epanetData: EpanetData): Feature {
  const us = [
    epanetData.nodes[link.us_node_id].x,
    epanetData.nodes[link.us_node_id].y,
  ];
  const ds = [
    epanetData.nodes[link.ds_node_id].x,
    epanetData.nodes[link.ds_node_id].y,
  ];

  const bends = link.bends
    ? [us].concat(link.bends).concat([ds])
    : [us].concat([ds]);

  const geometry = {
    type: "LineString",
    coordinates: bends,
  };

  const props = {
    ...link,
  };

  delete props.bends;

  return feature(geometry, props);
}

function junctions(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.nodes[data[0]] = {
    objType: "junction",
    table: "wn_hydrant",
    node_id: data[0],
    x: 0,
    y: 0,
    z: parseFloat(data[1]),
    index: epanetData.nodeIndex,
  };

  epanetData.nodeIndex++;

  return epanetData;
}

function reservoirs(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.nodes[data[0]] = {
    objType: "reservoir",
    table: "wn_hydrant",
    node_id: data[0],
    x: 0,
    y: 0,
    z: parseFloat(data[1]),
    profile: data[2],
    index: epanetData.nodeIndex,
  };

  epanetData.nodeIndex++;

  return epanetData;
}

function tanks(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.nodes[data[0]] = {
    objType: "tank",
    table: "wn_tank",
    node_id: data[0],
    x: 0,
    y: 0,
    z: parseFloat(data[1]),
    InitLvl: parseFloat(data[2]),
    MinLvl: parseFloat(data[3]),
    MaxLvl: parseFloat(data[4]),
    Diam: parseFloat(data[5]),
    MinVol: parseFloat(data[6]),
    VolCurve: data[7],
    index: epanetData.nodeIndex,
  };

  epanetData.nodeIndex++;

  return epanetData;
}

function pipes(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.links[data[0]] = {
    objType: "pipe",
    table: "wn_pipe",
    us_node_id: data[1],
    ds_node_id: data[2],
    link_suffix: "1",
    length: parseFloat(data[3]),
    diameter: parseFloat(data[4]),
    roughness: parseFloat(data[5]),
    minorLoss: parseFloat(data[6]),
    status: data[7],
    index: epanetData.linkIndex,
  };

  epanetData.linkIndex++;

  return epanetData;
}

function pumps(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.links[data[0]] = {
    objType: "pump",
    table: "wn_pumping_station",
    us_node_id: data[1],
    ds_node_id: data[2],
    link_suffix: "1",
    index: epanetData.linkIndex,
  };

  epanetData.linkIndex++;

  return epanetData;
}

function valves(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.links[data[0]] = {
    objType: "valve",
    table: "wn_valve",
    us_node_id: data[1],
    ds_node_id: data[2],
    link_suffix: "1",
    diameter: parseFloat(data[3]),
    type: data[4],
    setting: parseFloat(data[6]),
    minorLoss: parseFloat(data[7]),
    index: epanetData.linkIndex,
  };

  epanetData.linkIndex++;

  return epanetData;
}

function coordinates(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.nodes[data[0]] = {
    ...epanetData.nodes[data[0]],
    x: parseFloat(data[1]),
    y: parseFloat(data[2]),
  };

  return epanetData;
}

function vertices(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  const existingBends = epanetData.links[data[0]].bends;
  const newBend = [parseFloat(data[1]), parseFloat(data[2])];

  const bends = existingBends ? existingBends.concat([newBend]) : [newBend];

  epanetData.links[data[0]] = {
    ...epanetData.links[data[0]],
    bends,
  };

  return epanetData;
}

function createTimeSteps(periods: number): string[] {
  const dateObj = new Date(2019, 0, 0);

  return [...Array(periods)].map((_, i) => {
    return new Date(dateObj.getTime() + i * 900000).toISOString();
  });
}
