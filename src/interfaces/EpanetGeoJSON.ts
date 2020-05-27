import {
  FeatureCollection,
  Feature,
  Geometry,
  Point,
  LineString,
} from "geojson";

export default interface EpanetGeoJSON extends FeatureCollection<Geometry> {
  features: EpanetFeature[];
}

export type EpanetFeature = NodeFeature | LinkFeature;
export type NodeFeature = Junction | Tank | Reservior;
export type LinkFeature = Pipe | Valve | Pump;

// Two parent types - Nodes and Links

interface Node extends Feature<Point> {
  id: number;
  properties: NodeProperties;
}

interface Link extends Feature<LineString> {
  id: number;
  properties: LinkProperties;
}

// Six main feature types

export interface Junction extends Node {
  properties: JunctionProperties;
}

export interface Tank extends Node {
  properties: TankProperties;
}

export interface Reservior extends Node {
  properties: ReservoirProperties;
}

export interface Pipe extends Link {
  properties: PipeProperties;
}

export interface Valve extends Link {
  properties: ValveProperties;
}

export interface Pump extends Link {
  properties: PowerPumpProperties | HeadPumpProperties;
}

// Nodes type properties

type NodeCategories = "Junction" | "Tank" | "Reservior";

interface NodeProperties {
  type: "Node";
  category: NodeCategories;
  id: string;
}

interface JunctionProperties extends NodeProperties {
  category: "Junction";
  elevation: number;
  demand?: number;
  pattern?: string;
}

interface TankProperties extends NodeProperties {
  category: "Tank";
  elevation: number;
  initLevel: number;
  minLevel: number;
  maxLevel: number;
  diameter: number;
  minVolume: number;
  volCurve: string;
  overflow?: boolean;
}

interface ReservoirProperties extends NodeProperties {
  category: "Reservior";
  head: number;
  pattern?: string;
}

// Links type properties

type LinkCategories = "Pipe" | "Valve" | "Pump";

interface LinkProperties {
  type: "Link";
  category: LinkCategories;
  id: string;
  usNodeId: string;
  dsNodeId: string;
}

type PipeStatus = "Open" | "Closed" | "CV";

interface PipeProperties extends LinkProperties {
  category: "Pipe";
  length: number;
  diameter: number;
  roughness: number;
  minorLoss: number;
  status?: PipeStatus;
}

type ValveType = "PRV" | "PSV" | "PBV" | "FCV" | "TCV" | "GPV";

interface ValveProperties extends LinkProperties {
  category: "Valve";
  diameter: number;
  valveType: ValveType;
  setting: number;
  minorLoss: number;
}

type PumpMode = "Power" | "Head";

interface PumpProperties extends LinkProperties {
  category: "Pump";
  mode: PumpMode;
  speed?: number;
  pattern?: string;
}

interface PowerPumpProperties extends PumpProperties {
  mode: "Power";
  power: number;
}

interface HeadPumpProperties extends PumpProperties {
  mode: "Head";
  head: string;
}
