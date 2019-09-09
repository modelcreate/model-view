import {
  FeatureCollection,
  featureCollection,
  feature,
  Feature,
  Geometries,
  Properties
} from "@turf/helpers";
import { EpanetResults, NodeResults, LinkResults } from "../EpanetBinary";

import ModelFeatureCollection from "../../interfaces/ModelFeatureCollection";

interface Node {
  objType: string;
  x: number;
  y: number;
  z: number;
  index: number;
  profile?: string;
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
  usNodeId: string;
  dsNodeId: string;
  diameter: number;
  minorLoss: number;
  index: number;
  bends?: number[][];
}

interface Nodes {
  [id: string]: Node;
}

interface Links {
  [id: string]: Pipe | Valve;
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
    links: {}
  };

  const lines = inpFile.split("\n");
  const data = lines.reduce((previousValue, currentValue, currentIndex) => {
    return readLine(previousValue, currentValue);
  }, epanetData);

  const nodeFeatures = Object.values(data.nodes).reduce(
    (previousValue, currentValue, currentIndex) => {
      return previousValue.concat(
        pointFeature(
          currentValue,
          epanetResults.results.nodes[currentValue.index]
        )
      );
    },
    [] as Feature[]
  );

  const linkFeatures = Object.values(data.links).reduce(
    (previousValue, currentValue, currentIndex) => {
      return previousValue.concat(
        lineFeature(
          currentValue,
          data,
          epanetResults.results.links[currentValue.index]
        )
      );
    },
    [] as Feature[]
  );

  const fc = featureCollection(nodeFeatures.concat(linkFeatures));

  const model: ModelFeatureCollection = {
    ...fc,
    model: {
      timesteps: [
        "2019-04-01T00:00:00+00:00",
        "2019-04-01T00:15:00+00:00",
        "2019-04-01T00:30:00+00:00",
        "2019-04-01T00:45:00+00:00",
        "2019-04-01T01:00:00+00:00",
        "2019-04-01T01:15:00+00:00",
        "2019-04-01T01:30:00+00:00",
        "2019-04-01T01:45:00+00:00",
        "2019-04-01T02:00:00+00:00",
        "2019-04-01T02:15:00+00:00",
        "2019-04-01T02:30:00+00:00",
        "2019-04-01T02:45:00+00:00",
        "2019-04-01T03:00:00+00:00",
        "2019-04-01T03:15:00+00:00",
        "2019-04-01T03:30:00+00:00",
        "2019-04-01T03:45:00+00:00",
        "2019-04-01T04:00:00+00:00",
        "2019-04-01T04:15:00+00:00",
        "2019-04-01T04:30:00+00:00",
        "2019-04-01T04:45:00+00:00",
        "2019-04-01T05:00:00+00:00",
        "2019-04-01T05:15:00+00:00",
        "2019-04-01T05:30:00+00:00",
        "2019-04-01T05:45:00+00:00",
        "2019-04-01T06:00:00+00:00",
        "2019-04-01T06:15:00+00:00",
        "2019-04-01T06:30:00+00:00",
        "2019-04-01T06:45:00+00:00",
        "2019-04-01T07:00:00+00:00",
        "2019-04-01T07:15:00+00:00",
        "2019-04-01T07:30:00+00:00",
        "2019-04-01T07:45:00+00:00",
        "2019-04-01T08:00:00+00:00",
        "2019-04-01T08:15:00+00:00",
        "2019-04-01T08:30:00+00:00",
        "2019-04-01T08:45:00+00:00",
        "2019-04-01T09:00:00+00:00",
        "2019-04-01T09:15:00+00:00",
        "2019-04-01T09:30:00+00:00",
        "2019-04-01T09:45:00+00:00",
        "2019-04-01T10:00:00+00:00",
        "2019-04-01T10:15:00+00:00",
        "2019-04-01T10:30:00+00:00",
        "2019-04-01T10:45:00+00:00",
        "2019-04-01T11:00:00+00:00",
        "2019-04-01T11:15:00+00:00",
        "2019-04-01T11:30:00+00:00",
        "2019-04-01T11:45:00+00:00",
        "2019-04-01T12:00:00+00:00",
        "2019-04-01T12:15:00+00:00",
        "2019-04-01T12:30:00+00:00",
        "2019-04-01T12:45:00+00:00",
        "2019-04-01T13:00:00+00:00",
        "2019-04-01T13:15:00+00:00",
        "2019-04-01T13:30:00+00:00",
        "2019-04-01T13:45:00+00:00",
        "2019-04-01T14:00:00+00:00",
        "2019-04-01T14:15:00+00:00",
        "2019-04-01T14:30:00+00:00",
        "2019-04-01T14:45:00+00:00",
        "2019-04-01T15:00:00+00:00",
        "2019-04-01T15:15:00+00:00",
        "2019-04-01T15:30:00+00:00",
        "2019-04-01T15:45:00+00:00",
        "2019-04-01T16:00:00+00:00",
        "2019-04-01T16:15:00+00:00",
        "2019-04-01T16:30:00+00:00",
        "2019-04-01T16:45:00+00:00",
        "2019-04-01T17:00:00+00:00",
        "2019-04-01T17:15:00+00:00",
        "2019-04-01T17:30:00+00:00",
        "2019-04-01T17:45:00+00:00",
        "2019-04-01T18:00:00+00:00",
        "2019-04-01T18:15:00+00:00",
        "2019-04-01T18:30:00+00:00",
        "2019-04-01T18:45:00+00:00",
        "2019-04-01T19:00:00+00:00",
        "2019-04-01T19:15:00+00:00",
        "2019-04-01T19:30:00+00:00",
        "2019-04-01T19:45:00+00:00",
        "2019-04-01T20:00:00+00:00",
        "2019-04-01T20:15:00+00:00",
        "2019-04-01T20:30:00+00:00",
        "2019-04-01T20:45:00+00:00",
        "2019-04-01T21:00:00+00:00",
        "2019-04-01T21:15:00+00:00",
        "2019-04-01T21:30:00+00:00",
        "2019-04-01T21:45:00+00:00",
        "2019-04-01T22:00:00+00:00",
        "2019-04-01T22:15:00+00:00",
        "2019-04-01T22:30:00+00:00",
        "2019-04-01T22:45:00+00:00",
        "2019-04-01T23:00:00+00:00",
        "2019-04-01T23:15:00+00:00",
        "2019-04-01T23:30:00+00:00",
        "2019-04-01T23:45:00+00:00"
      ]
    }
  };

  return model;
}

function readLine(
  epanetData: EpanetData,
  unTrimmedCurrentLine: string
): EpanetData {
  const currLine = unTrimmedCurrentLine.trim();

  // if line starts with ; or is blank skip
  if (currLine[0] === ";" || currLine[0] === "") {
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
    case "[TANKS]":
      console.log("Will do soon");
      return epanetData;
    default:
      return epanetData;
  }
}

function pointFeature(node: Node, result: NodeResults): Feature {
  const geometry = {
    type: "Point",
    coordinates: [node.x, node.y]
  };

  const props = {
    ...node,
    ...result
  };

  return feature(geometry, props);
}

function lineFeature(
  link: Link,
  epanetData: EpanetData,
  result: LinkResults
): Feature {
  const us = [
    epanetData.nodes[link.usNodeId].x,
    epanetData.nodes[link.usNodeId].y
  ];
  const ds = [
    epanetData.nodes[link.dsNodeId].x,
    epanetData.nodes[link.dsNodeId].y
  ];

  const bends = link.bends
    ? [us].concat(link.bends).concat([ds])
    : [us].concat([ds]);

  const geometry = {
    type: "LineString",
    coordinates: bends
  };

  const props = {
    ...link,
    ...result
  };

  return feature(geometry, props);
}

function junctions(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.nodes[data[0]] = {
    objType: "junction",
    x: 0,
    y: 0,
    z: parseFloat(data[1]),
    index: epanetData.nodeIndex
  };

  epanetData.nodeIndex++;

  return epanetData;
}

function reservoirs(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.nodes[data[0]] = {
    objType: "reservoir",
    x: 0,
    y: 0,
    z: parseFloat(data[1]),
    profile: data[2],
    index: epanetData.nodeIndex
  };

  epanetData.nodeIndex++;

  return epanetData;
}

function pipes(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.links[data[0]] = {
    objType: "pipe",
    table: "wn_pipe",
    usNodeId: data[1],
    dsNodeId: data[2],
    length: parseFloat(data[3]),
    diameter: parseFloat(data[4]),
    roughness: parseFloat(data[5]),
    minorLoss: parseFloat(data[6]),
    status: data[7],
    index: epanetData.linkIndex
  };

  epanetData.linkIndex++;

  return epanetData;
}

function valves(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.links[data[0]] = {
    objType: "valve",
    table: "wn_valve",
    usNodeId: data[1],
    dsNodeId: data[2],
    diameter: parseFloat(data[3]),
    type: data[4],
    setting: parseFloat(data[6]),
    minorLoss: parseFloat(data[7]),
    index: epanetData.linkIndex
  };

  epanetData.linkIndex++;

  return epanetData;
}

function coordinates(epanetData: EpanetData, currLine: string): EpanetData {
  const data = currLine.split(" ");

  epanetData.nodes[data[0]] = {
    ...epanetData.nodes[data[0]],
    x: parseFloat(data[1]),
    y: parseFloat(data[2])
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
    bends
  };

  return epanetData;
}
