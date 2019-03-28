import React, { Component } from 'react';
import ModelDropZone from '../ModelDropZone';
import VectorMap from '../VectorMap';
import './index.css';

class App extends Component {
  render() {
    return (
      <ModelDropZone>
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
