import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { fromJS } from 'immutable';
import { OsZoomStackLight, HydrantStyle, MainStyle } from '../../mapstyles'
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
    const wn_hydrant = extractAssetType(geoJson, 'wn_hydrant')
    const wn_pipe = extractAssetType(geoJson, 'wn_pipe')

    const immutBase = fromJS(OsZoomStackLight)
    const mapStyle = immutBase
      .setIn(['sources', 'hydrants'], fromJS({ type: 'geojson', data: wn_hydrant }))
      .setIn(['sources', 'mains'], fromJS({ type: 'geojson', data: wn_pipe }))
      .set('layers', immutBase.get('layers').push(MainStyle).push(HydrantStyle))


    console.log(mapStyle.toJS())

    return mapStyle
  }

  state = {
    viewport: {
      width: '100%',
      height: '100vh',
      latitude: 56.83955911423721,
      longitude: -2.287646619512958,
      zoom: 10
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