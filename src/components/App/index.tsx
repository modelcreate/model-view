import React, { Component } from 'react';
import ModelDropZone from '../ModelDropZone';
import VectorMap from '../VectorMap';
import './index.css';

type AppState = {
  modelGeoJson: object
}

class App extends Component<{}, AppState> {


  droppedJson = (file: object) => {

    this.setState({
      modelGeoJson: file
    });
  }
  render() {
    return (
      <ModelDropZone onDroppedJson={this.droppedJson}>
        <div className="App">
          <header className="App-header">
            <VectorMap />

          </header>

        </div>
      </ModelDropZone>
    );
  }
}

export default App;
