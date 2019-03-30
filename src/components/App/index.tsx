import React, { Component } from 'react';
import ModelDropZone from '../ModelDropZone';
import VectorMap from '../VectorMap';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FeatureCollection, Geometries, Properties } from '@turf/helpers';

type Props = {}


interface AppState {
  modelGeoJson?: FeatureCollection<Geometries, Properties>
  isLoaded: boolean
}


class App extends Component<Props, AppState> {
  state: Readonly<AppState> = {
    isLoaded: false
  };

  droppedJson = (file: FeatureCollection<Geometries, Properties>) => {

    this.setState({
      modelGeoJson: file
    });
  }
  render() {
    const { isLoaded, modelGeoJson } = this.state

    return (
      <ModelDropZone onDroppedJson={this.droppedJson}>
        <div className="App">
          <header className="App-header">
            {modelGeoJson &&
              <VectorMap modelGeoJson={modelGeoJson} />
            }
          </header>

        </div>
      </ModelDropZone>
    );
  }
}

export default App;
