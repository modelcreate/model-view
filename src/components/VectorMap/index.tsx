import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { fromJS } from 'immutable';
import MAP_STYLE from '../../mapstyles/base/open-zoom-stack-light.json';
import { reprojectFeatureCollection } from '../../utils/reproject'
import { FeatureCollection, Geometries, Properties, featureCollection } from '@turf/helpers';


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

type VectorMapProps = {
  modelGeoJson: FeatureCollection<Geometries, Properties>
}


const layout = { visibility: 'visible' };
const paint = {
  "circle-opacity": {
    stops: [[11.5, 0], [12, 1]]
  },
  "circle-stroke-opacity": {
    stops: [[11.5, 0], [12, 1]]
  },

  'circle-color': [
    'case',
    ["==", ['get', 'operational'], 'Abandoned'], '#33d935',
    ["==", ['get', 'type'], 'Fire'], '#b300ff',
    ["==", ['get', 'type'], 'Washout'], '#fff',
    /* other */ '#ccc'
  ],
  'circle-radius': {
    'base': 1,
    'stops': [[17, 2], [22, 10]]
  },
  'circle-stroke-color': [
    'case',
    ["==", ['get', 'operational'], 'Abandoned'], '#33d935',

    /* other */ '#b300ff'
  ],
  'circle-stroke-width': {
    'base': 0.5,
    'stops': [[15, 1.25], [22, 4]]
  },

};

const dataLayer = fromJS({
  id: 'data',
  source: 'hydrants',
  type: 'circle',
  paint,
  layout
});


const extractAssetType = (geoJson: FeatureCollection, type: string) => {
  const filteredFeatures = geoJson.features.filter(feature => feature.properties !== null && feature.properties.table === type);
  return featureCollection(filteredFeatures)
}

class VectorMap extends Component<VectorMapProps> {

  _createStyles = () => {
    const fromProjection = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=375,-111,431,0,0,0,0 +units=m +no_defs'
    const geoJson = reprojectFeatureCollection(this.props.modelGeoJson, fromProjection)
    console.log(geoJson)
    const data = extractAssetType(geoJson, 'wn_hydrant')
    console.log(data)
    const immutBase = fromJS(MAP_STYLE)
    const mapStyle = immutBase
      // Add geojson source to map
      .setIn(['sources', 'hydrants'], fromJS({ type: 'geojson', data }))
      // Add point layer to map
      .set('layers', immutBase.get('layers').push(dataLayer));
    return mapStyle
  }

  state = {
    viewport: {
      width: 500,
      height: 400,
      latitude: -2,
      longitude: 50,
      zoom: 0
    },
    mapStyle: this._createStyles()
  };





  render() {
    const { mapStyle } = this.state;

    return (
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        {...this.state.viewport}
        mapStyle={mapStyle}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}


export default VectorMap