import React, { Component } from "react";
import ModelDropZone from "../ModelDropZone";
import VectorMap from "../VectorMap";
import Landing from "../Landing";
import ModelInfo, { ModelInfoSetting } from "../ModelInfo";
import { EpanetResults } from "../../utils/EpanetBinary";

import { runEpanet, ReportingInfo } from "../../utils/epanet";
import EpanetGeoJSON from "../../interfaces/EpanetGeoJSON";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  FeatureCollection,
  Geometries,
  Properties,
  Feature,
} from "@turf/helpers";

// TODO: Clean up and remove the requirement for settings and check for null
const setting: ModelInfoSetting = {
  modeName: "Test Model",
  currentTimestep: 0,
  reportingInfo: {
    Periods: 0,
    Duration: 0,
    ReportStep: 0,
    StartTime: 0,
  },
  selectedFeature: null,
};

type Props = {};

interface AppState {
  modelGeoJson?: FeatureCollection<Geometries, Properties>;
  epanetResults?: EpanetResults;
  isLoading: boolean;
  isFileLoaded: boolean;
  projectionString: string;
  setting: ModelInfoSetting;
}

class App extends Component<Props, AppState> {
  state: Readonly<AppState> = {
    isLoading: false,
    isFileLoaded: false,
    projectionString: "",
    setting,
  };

  loadDemo = () => {
    const projectionString =
      "+proj=utm +zone=17 +datum=NAD83 +units=m +no_defs";
    this.setState((prevState) => ({ projectionString, isLoading: true }));
    fetch("static/models/example1.inp")
      .then((res) => res.text())
      .then((body) => {
        runEpanet(body, this.droppedJson);
      });
  };

  droppedJson = (file: [EpanetGeoJSON, EpanetResults, ReportingInfo]) => {
    this.setState((prevState) => ({
      isFileLoaded: true,
      modelGeoJson: file[0],
      epanetResults: file[1],
      setting: {
        ...prevState.setting,
        reportingInfo: file[2],
        //timesteps: file[0].model.timesteps.map(
        //  (t) => new Date(t.substr(0, 16))
        //),
      },
    }));
  };
  _updateSettings = (value: string) => {
    this.setState((prevState) => ({
      setting: {
        ...prevState.setting,
        currentTimestep: parseInt(value),
      },
    }));
  };

  _updateSelectedFeature = (value: Feature) => {
    if (value.properties !== null && this.state.epanetResults) {
      const selectedFeature: { [name: string]: any } = value.properties;

      const type = value.geometry && value.geometry.type;

      let tsv = {};
      const index = value.id;
      if (typeof index === "number" && type === "Point") {
        tsv = this.state.epanetResults.results.nodes[index];
      } else if (typeof index === "number" && type === "LineString") {
        tsv = this.state.epanetResults.results.links[index];
      }

      const props = {
        ...selectedFeature,
        ...tsv,
      };

      this.setState((prevState) => ({
        setting: {
          ...prevState.setting,
          selectedFeature: props,
        },
      }));
    }
  };

  _clearSelectedFeature = () => {
    this.setState((prevState) => ({
      setting: {
        ...prevState.setting,
        selectedFeature: null,
      },
    }));
  };

  _updateProjectionString = (projectionString: string) => {
    this.setState((prevState) => ({ projectionString, isLoading: true }));
  };

  render() {
    const {
      isLoading,
      isFileLoaded,
      modelGeoJson,
      setting,
      projectionString,
    } = this.state;

    return (
      <ModelDropZone onDroppedJson={this.droppedJson}>
        <div className="App">
          <header className="App-header">
            {modelGeoJson && projectionString !== "" ? (
              <>
                <VectorMap
                  projectionString={projectionString}
                  onSelectFeature={this._updateSelectedFeature}
                  modelGeoJson={modelGeoJson}
                />
                <ModelInfo
                  settings={setting}
                  onChange={this._updateSettings}
                  onClearSelected={this._clearSelectedFeature}
                />
              </>
            ) : (
              <Landing
                onLoadDemo={this.loadDemo}
                isLoading={isLoading}
                isFileLoaded={isFileLoaded}
                onSelectProj={this._updateProjectionString}
              />
            )}
          </header>
        </div>
      </ModelDropZone>
    );
  }
}

export default App;
