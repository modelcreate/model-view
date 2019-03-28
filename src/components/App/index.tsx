import React, { Component } from 'react';
import MyDropzone from '../ModelDropZone';
import VectorMap from '../VectorMap';
import './index.css';

class App extends Component {
  render() {
    return (
      <MyDropzone>
        <div className="App">
          <header className="App-header">
            <VectorMap />

          </header>

        </div>
      </MyDropzone>
    );
  }
}

export default App;
