import React, { Component } from 'react';
import ModelDropZone from '../ModelDropZone';
import VectorMap from '../VectorMap';
import ModelInfo, { ModelInfoSetting, testFeature } from '../ModelInfo';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FeatureCollection, Geometries, Properties } from '@turf/helpers';


const setting: ModelInfoSetting = {
  "modeName": "Test Model",
  "currentTimestep": 0,
  "timesteps": [new Date(2014, 5, 6, 0, 0), new Date(2014, 5, 6, 0, 15), new Date(2014, 5, 6, 0, 30), new Date(2014, 5, 6, 0, 45)],
  "selectedFeature": testFeature
}

type Props = {}


interface AppState {
  modelGeoJson?: FeatureCollection<Geometries, Properties>
  isLoaded: boolean,
  setting: ModelInfoSetting
}


class App extends Component<Props, AppState> {
  state: Readonly<AppState> = {
    isLoaded: false,
    setting
  };

  droppedJson = (file: FeatureCollection<Geometries, Properties>) => {

    this.setState({
      modelGeoJson: file
    });
  }
  _updateSettings = (value: string) => {
    this.setState(prevState => ({
      setting: {
        ...prevState.setting,
        currentTimestep: parseInt(value)
      }
    }))

  };


  render() {
    const { isLoaded, modelGeoJson, setting } = this.state

    return (
      <ModelDropZone onDroppedJson={this.droppedJson}>
        <div className="App">
          <header className="App-header">
            <ModelInfo settings={setting} onChange={this._updateSettings} />
            {modelGeoJson &&
              <>
                <VectorMap modelGeoJson={modelGeoJson} />

              </>
            }
          </header>

        </div>
      </ModelDropZone>
    );
  }
}

export default App;
