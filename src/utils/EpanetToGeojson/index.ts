import { featureCollection, feature, Feature } from "@turf/helpers";
import { EpanetResults } from "../EpanetBinary";

import EpanetGeoJSON, {
  NodeFeature,
  LinkFeature,
  Junction,
  Tank,
  Reservior,
  Pipe,
  Valve,
  Pump,
  EpanetFeature,
} from "../../interfaces/EpanetGeoJSON";
import { link } from "fs";

interface NodeLookup {
  [id: string]: NodeFeature;
}

interface LinkLookup {
  [id: string]: LinkFeature;
}

interface EpanetData {
  nodeIndex: number;
  linkIndex: number;
  currentFunction: string;
  errors: string[];
  nodes: NodeLookup;
  links: LinkLookup;
}

export function toGeoJson(inpFile: string): EpanetGeoJSON {
  const epanetData: EpanetData = {
    currentFunction: "",
    nodeIndex: 0,
    linkIndex: 0,
    errors: [],
    nodes: {},
    links: {},
  };

  const lines = inpFile.split("\n");
  const data = lines.reduce((previousValue, currentValue, currentIndex) => {
    return readLine(previousValue, currentValue, currentIndex);
  }, epanetData);

  //  const nodeFeatures = Object.values(data.nodes).reduce(
  //    (previousValue, currentValue, currentIndex) => {
  //      return previousValue.concat(pointFeature(currentValue));
  //    },
  //    [] as NodeLookup[]
  //  );
  //
  //  const linkFeatures = Object.values(data.links).reduce(
  //    (previousValue, currentValue, currentIndex) => {
  //      return previousValue.concat(lineFeature(currentValue, data));
  //    },
  //    [] as LinkLookup[]
  //  );

  //  const fc = featureCollection(nodeFeatures.concat(linkFeatures));
  //  console.log(fc);

  const links = (Object.keys(data.links) as Array<keyof LinkLookup>).reduce(
    (acc, l) => {
      const link = data.links[l];
      const { usNodeId, dsNodeId } = link.properties;
      const usGeometry = data.nodes[usNodeId].geometry.coordinates;
      const dsGeometry = data.nodes[dsNodeId].geometry.coordinates;

      return acc.concat({
        ...link,
        geometry: {
          ...link.geometry,
          coordinates: [usGeometry, ...link.geometry.coordinates, dsGeometry],
        },
      });
    },
    [] as LinkFeature[]
  );
  console.log(links);

  if (data.errors.length > 0) {
    console.log(data.errors);
  }

  const model: EpanetGeoJSON = {
    type: "FeatureCollection",
    features: [...links, ...Object.values(data.nodes)],
  };

  return model;
}

function readLine(
  epanetData: EpanetData,
  unTrimmedCurrentLine: string,
  lineNumber: number
): EpanetData {
  // Removing comments from string and any extra spacing/tabs
  // From:  "J-1952A	   311.450000	   ; Comment"
  // To:    "J-1952A 311.450000"
  const commentStart = unTrimmedCurrentLine.indexOf(";");
  const trimTo =
    commentStart === -1 ? unTrimmedCurrentLine.length : commentStart;
  const currLine = unTrimmedCurrentLine
    .substring(0, trimTo)
    .replace(/\s+/g, " ")
    .trim();

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
      return junctions(epanetData, currLine, lineNumber);
    case "[RESERVOIRS]":
      return reservoirs(epanetData, currLine, lineNumber);
    case "[PIPES]":
      return pipes(epanetData, currLine, lineNumber);
    case "[VALVES]":
      return valves(epanetData, currLine, lineNumber);
    case "[COORDINATES]":
      return coordinates(epanetData, currLine, lineNumber);
    case "[VERTICES]":
      return vertices(epanetData, currLine, lineNumber);
    case "[PUMPS]":
      return pumps(epanetData, currLine, lineNumber);
    case "[TANKS]":
      return tanks(epanetData, currLine, lineNumber);
    default:
      return epanetData;
  }
}

//function pointFeature(node: Node): NodeFeature {
//  const geometry = {
//    type: "Point",
//    coordinates: [node.x, node.y],
//  };
//
//  const props = {
//    ...node,
//  };
//
//  const test: NodeFeature = {
//    type: "Feature",
//    id: node.index,
//    properties: {},
//  };
//
//  return feature(geometry, props);
//}
//
//function lineFeature(link: Link, epanetData: EpanetData): LinkFeature {
//  const us = [
//    epanetData.nodes[link.us_node_id].x,
//    epanetData.nodes[link.us_node_id].y,
//  ];
//  const ds = [
//    epanetData.nodes[link.ds_node_id].x,
//    epanetData.nodes[link.ds_node_id].y,
//  ];
//
//  const bends = link.bends
//    ? [us].concat(link.bends).concat([ds])
//    : [us].concat([ds]);
//
//  const geometry = {
//    type: "LineString",
//    coordinates: bends,
//  };
//
//  const props = {
//    ...link,
//  };
//
//  delete props.bends;
//
//  return feature(geometry, props);
//}

function junctions(
  epanetData: EpanetData,
  currLine: string,
  lineNumber: number
): EpanetData {
  const data = currLine.split(" ");
  if (data.length < 2 || data.length > 4) {
    return {
      ...epanetData,
      errors: epanetData.errors.concat(`Error Reading Line ${lineNumber}`),
    };
  }
  const [id] = data;

  const junction: Junction = {
    type: "Feature",
    id: epanetData.nodeIndex,
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      type: "Node",
      category: "Junction",
      id,
      elevation: parseFloat(data[1]),
      demand: parseFloat(data[2]),
      pattern: data[3],
    },
  };

  return {
    ...epanetData,
    nodes: {
      ...epanetData.nodes,
      [id]: junction,
    },
    nodeIndex: epanetData.nodeIndex + 1,
  };
}

function reservoirs(
  epanetData: EpanetData,
  currLine: string,
  lineNumber: number
): EpanetData {
  const data = currLine.split(" ");
  if (data.length < 2 || data.length > 3) {
    return {
      ...epanetData,
      errors: epanetData.errors.concat(`Error Reading Line ${lineNumber}`),
    };
  }
  const [id] = data;

  const reservior: Reservior = {
    type: "Feature",
    id: epanetData.nodeIndex,
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      type: "Node",
      category: "Reservior",
      id,
      head: parseFloat(data[1]),
      pattern: data[2],
    },
  };

  return {
    ...epanetData,
    nodes: {
      ...epanetData.nodes,
      [id]: reservior,
    },
    nodeIndex: epanetData.nodeIndex + 1,
  };
}

function tanks(
  epanetData: EpanetData,
  currLine: string,
  lineNumber: number
): EpanetData {
  const data = currLine.split(" ");
  if (data.length < 7 || data.length > 8) {
    return {
      ...epanetData,
      errors: epanetData.errors.concat(`Error Reading Line ${lineNumber}`),
    };
  }

  const [id] = data;

  const tank: Tank = {
    type: "Feature",
    id: epanetData.nodeIndex,
    geometry: {
      type: "Point",
      coordinates: [0, 0],
    },
    properties: {
      type: "Node",
      category: "Tank",
      id,
      elevation: parseFloat(data[1]),
      initLevel: parseFloat(data[2]),
      minLevel: parseFloat(data[3]),
      maxLevel: parseFloat(data[4]),
      diameter: parseFloat(data[5]),
      minVolume: parseFloat(data[6]),
      volCurve: data[7],
      overflow: data[8] ? data[8].toLowerCase() === "true" : undefined,
    },
  };

  return {
    ...epanetData,
    nodes: {
      ...epanetData.nodes,
      [id]: tank,
    },
    nodeIndex: epanetData.nodeIndex + 1,
  };
}

function pipes(
  epanetData: EpanetData,
  currLine: string,
  lineNumber: number
): EpanetData {
  const data = currLine.split(" ");
  if (data.length < 6 || data.length > 8) {
    return {
      ...epanetData,
      errors: epanetData.errors.concat(`Error Reading Line ${lineNumber}`),
    };
  }

  const [
    id,
    usNodeId,
    dsNodeId,
    length,
    diameter,
    roughness,
    minorLoss,
    statusAsString,
  ] = data;

  let status: "Open" | "Closed" | "CV" | undefined = undefined;

  switch (statusAsString && statusAsString.toLowerCase()) {
    case "open":
      status = "Open";
      break;

    case "closed":
      status = "Closed";
      break;

    case "cv":
      status = "CV";
      break;

    default:
      break;
  }

  const pipe: Pipe = {
    type: "Feature",
    id: epanetData.linkIndex,
    geometry: {
      type: "LineString",
      coordinates: [],
    },
    properties: {
      type: "Link",
      category: "Pipe",
      id,
      usNodeId,
      dsNodeId,
      length: parseFloat(length),
      diameter: parseFloat(diameter),
      roughness: parseFloat(roughness),
      minorLoss: parseFloat(minorLoss),
      status,
    },
  };

  return {
    ...epanetData,
    links: {
      ...epanetData.links,
      [id]: pipe,
    },
    linkIndex: epanetData.linkIndex + 1,
  };
}

function pumps(
  epanetData: EpanetData,
  currLine: string,
  lineNumber: number
): EpanetData {
  const data = currLine.split(" ");
  if (
    data.length < 5 ||
    data.length === 6 ||
    data.length === 8 ||
    data.length > 9
  ) {
    return {
      ...epanetData,
      errors: epanetData.errors.concat(`Error Reading Line ${lineNumber}`),
    };
  }

  const [id, usNodeId, dsNodeId] = data;

  const pump: Pump = {
    type: "Feature",
    id: epanetData.linkIndex,
    geometry: {
      type: "LineString",
      coordinates: [],
    },
    properties: {
      type: "Link",
      category: "Pump",
      id,
      usNodeId,
      dsNodeId,
      mode: "Power",
      power: 2,
      speed: 1,
      pattern: "dummy",
    },
  };

  return {
    ...epanetData,
    links: {
      ...epanetData.links,
      [id]: pump,
    },
    linkIndex: epanetData.linkIndex + 1,
  };
}

function valves(
  epanetData: EpanetData,
  currLine: string,
  lineNumber: number
): EpanetData {
  const data = currLine.split(" ");

  const [id, usNodeId, dsNodeId] = data;

  const valve: Valve = {
    type: "Feature",
    id: epanetData.linkIndex,
    geometry: {
      type: "LineString",
      coordinates: [],
    },
    properties: {
      type: "Link",
      category: "Valve",
      id,
      usNodeId,
      dsNodeId,
      diameter: 100,
      valveType: "TCV",
      setting: 100,
      minorLoss: 0,
    },
  };

  return {
    ...epanetData,
    links: {
      ...epanetData.links,
      [id]: valve,
    },
    linkIndex: epanetData.linkIndex + 1,
  };
}

function coordinates(
  epanetData: EpanetData,
  currLine: string,
  lineNumber: number
): EpanetData {
  const data = currLine.split(" ");
  if (epanetData.nodes[data[0]] === undefined) {
    debugger;
  }

  const node = epanetData.nodes[data[0]];
  const x = parseFloat(data[1]);
  const y = parseFloat(data[2]);

  epanetData.nodes[data[0]] = {
    ...node,
    geometry: {
      ...node.geometry,
      coordinates: [x, y],
    },
  };

  return epanetData;
}

function vertices(
  epanetData: EpanetData,
  currLine: string,
  lineNumber: number
): EpanetData {
  const data = currLine.split(" ");

  const link = epanetData.links[data[0]];

  const existingBends = link.geometry.coordinates;
  const newBend = [parseFloat(data[1]), parseFloat(data[2])];

  const bends = existingBends ? existingBends.concat([newBend]) : [newBend];

  epanetData.links[data[0]] = {
    ...link,
    geometry: {
      ...link.geometry,
      coordinates: bends,
    },
  };

  return epanetData;
}
