import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { fromJS } from 'immutable';
import { OsZoomStackLight, HydrantStyle } from '../../mapstyles'
import { reprojectFeatureCollection } from '../../utils/reproject'
import { FeatureCollection, Geometries, Properties, featureCollection } from '@turf/helpers';


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

type VectorMapProps = {
  modelGeoJson: FeatureCollection<Geometries, Properties>
}




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
    const immutBase = fromJS(OsZoomStackLight)
    const mapStyle = immutBase
      // Add geojson source to map
      .setIn(['sources', 'hydrants'], fromJS({ type: 'geojson', data }))
      // Add point layer to map
      .set('layers', immutBase.get('layers').push(HydrantStyle));
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