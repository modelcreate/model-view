import { Project, Workspace, TimeParameter } from "epanet-js";
import { readBinary, EpanetResults } from "../EpanetBinary";
import { toGeoJson } from "../EpanetToGeojson";

import EpanetGeoJSON from "../../interfaces/EpanetGeoJSON";

export interface ReportingInfo {
  Periods: number;
  ReportStep: number;
  StartTime: number;
  Duration: number;
}

// convert inp to geojson
// run epanet
// merge results into geojson
// give back geojson

export function runEpanet(
  fromProject: string,
  openModel: (file: [EpanetGeoJSON, EpanetResults, ReportingInfo]) => void
): void {
  // Initialise a new Workspace and Project object
  const ws = new Workspace();
  const model = new Project(ws);

  // Write a copy of the inp file to the workspace
  ws.writeFile("net1.inp", fromProject);

  // Runs toolkit methods: EN_open, EN_solveH & EN_close
  model.open("net1.inp", "report.rpt", "out.bin");
  model.solveH();
  model.saveH();

  const keys = ["Periods", "ReportStep", "StartTime", "Duration"] as Array<
    keyof ReportingInfo
  >;

  const timeInfo = keys.reduce((acc, k) => {
    acc[k] = model.getTimeParameter(TimeParameter[k]);
    return acc;
  }, {} as ReportingInfo);

  model.closeH();
  model.close();

  const resultView = ws.readFile("out.bin", "binary");

  //  const epaNetEngine = Module();
  //@ts-ignore
  //  epaNetEngine.onRuntimeInitialized = _ => {
  //    const FS = epaNetEngine.fs;
  //    FS.writeFile("/net1.inp", fromProject);
  //    const t0 = performance.now();
  //    console.log(epaNetEngine._epanet_run());
  //    const t1 = performance.now();
  //    console.log("Call to _epanet_run took " + (t1 - t0) + " milliseconds.");

  //const resultView = FS.readFile("/net1.bin");

  const t2 = performance.now();
  const results = readBinary(resultView);
  const t3 = performance.now();

  const geoJson = toGeoJson(fromProject);
  console.log(geoJson);
  console.log(results);
  console.log("Call to readBinary took " + (t3 - t2) + " milliseconds.");

  openModel([geoJson, results, timeInfo]);
  //  };
}
