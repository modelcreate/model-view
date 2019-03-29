import React, { Component } from 'react';
import ModelDropZone from '../ModelDropZone';
import VectorMap from '../VectorMap';
import './index.css';

class App extends Component {

  droppedJson = (files: File) => {
    console.log(files)
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
