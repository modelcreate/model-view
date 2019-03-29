import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

type VectorMapProps = {
  modelGeoJson: object
}

class VectorMap extends Component<VectorMapProps> {


  state = {
    viewport: {
      width: 500,
      height: 400,
      latitude: -2,
      longitude: 50,
      zoom: 0
    }
  };



  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        {...this.state.viewport}
        mapStyle='https://s3-eu-west-1.amazonaws.com/tiles.os.uk/v2/styles/open-zoomstack-light/style.json'
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}


export default VectorMap