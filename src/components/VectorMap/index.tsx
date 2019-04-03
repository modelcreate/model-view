import React, { Component } from 'react';
import ReactMapGL, { PointerEvent, ExtraState } from 'react-map-gl';
import { fromJS } from 'immutable';
import { OsZoomStackLight, MapboxStyle, HydrantStyle, MainStyle, MeterStyle, ValveStyle } from '../../mapstyles'
import { reprojectFeatureCollection } from '../../utils/reproject'
import { FeatureCollection, Feature, Geometries, Properties, featureCollection } from '@turf/helpers';
import { MapboxEvent } from 'mapbox-gl';


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

type VectorMapProps = {
  projectionString: string,
  modelGeoJson: FeatureCollection<Geometries, Properties>,
  onSelectFeature: (value: Feature) => void;
}
interface VectorMapState {
  modelGeoJson?: FeatureCollection<Geometries, Properties>
  mapStyle?: any,
  viewport: any,
  x?: number,
  y?: number,
  hoveredFeature?: any,
  interactiveLayerIds: string[]
}



const extractAssetType = (geoJson: FeatureCollection, types: string[]) => {
  const filteredFeatures = geoJson.features.filter(feature => feature.properties !== null && types.includes(feature.properties.table));
  return featureCollection(filteredFeatures)
}

class VectorMap extends Component<VectorMapProps, VectorMapState> {


  _map: mapboxgl.Map | null = null



  _addImage = () => {
    if (this._map !== null) {
      this._map.addImage('meter', MeterStyle.toJS().images[0][1])
      this._map.addImage('valve', ValveStyle.toJS().images[0][1])
      console.log(MeterStyle.toJS().images[0][1])
    }
  }

  _createStyles = () => {



    const fromProjection = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=375,-111,431,0,0,0,0 +units=m +no_defs'
    const geoJson = reprojectFeatureCollection(this.props.modelGeoJson, this.props.projectionString)
    console.log(geoJson)
    const wn_hydrant = extractAssetType(geoJson, ['wn_hydrant'])
    const wn_pipe = extractAssetType(geoJson, ['wn_pipe', 'wn_meter', 'wn_valve'])
    const wn_meter = extractAssetType(geoJson, ['wn_meter'])
    const wn_valve = extractAssetType(geoJson, ['wn_valve'])

    const immutBase = fromJS(MapboxStyle)
    const mapStyle = immutBase
      .setIn(['sources', 'hydrants'], fromJS({ type: 'geojson', data: wn_hydrant }))
      .setIn(['sources', 'mains'], fromJS({ type: 'geojson', data: wn_pipe }))
      .setIn(['sources', 'meters'], fromJS({ type: 'geojson', data: wn_meter }))
      .setIn(['sources', 'valves'], fromJS({ type: 'geojson', data: wn_valve }))
      .set('layers', immutBase.get('layers')
        .push(MainStyle)
        .push(HydrantStyle)
        .push(MeterStyle)
        .push(ValveStyle)
      )


    console.log(mapStyle.toJS())

    return mapStyle
  }

  state: Readonly<VectorMapState> = {
    viewport: {
      latitude: -19.174995361886754,//56.83955911423721,  
      longitude: 146.836610606952, //,//-2.287646619512958,
      zoom: 10
    },
    mapStyle: this._createStyles(),
    interactiveLayerIds: ['hydrants-geojson', 'main-geojson']
  };

  _onHover = (event: PointerEvent) => {
    const { features, srcEvent: { offsetX, offsetY } } = event;
    const hoveredFeature = features && features.find(f => f.layer.id === 'hydrants-geojson');
    this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  _renderTooltip() {
    const { hoveredFeature, x, y } = this.state;

    return hoveredFeature && (
      <div className="tooltip" style={{ left: x, top: y }}>
        <div>State: {hoveredFeature.properties.name}</div>
        <div>Median Household Income: {hoveredFeature.properties.value}</div>
        <div>Percentile: {hoveredFeature.properties.percentile / 8 * 100}</div>
      </div>
    );
  }

  _getCursor = (event: ExtraState) => {
    return event.isHovering ? 'pointer' : 'default';
  };

  //TODO: This is a mess, I need to clean this up, there is probably an easy oneliner here I'm not thinking of
  _onClick = (event: PointerEvent) => {
    const feature = event.features && event.features[0];

    if (feature) {

      const { us_node_id, ds_node_id, link_suffix, node_id } = feature.properties
      const feat = this.props.modelGeoJson.features.find(f => {
        if (f.properties !== null) {
          if (f.properties.us_node_id !== undefined) {
            return f.properties.us_node_id === us_node_id && f.properties.ds_node_id === ds_node_id && f.properties.link_suffix === link_suffix
          } else {
            return f.properties.node_id === node_id
          }
        }
        else return false
      })

      feat && this.props.onSelectFeature(feat)

    }


  };







  render() {
    const { mapStyle } = this.state;

    return (
      <ReactMapGL
        mapboxApiAccessToken={MAPBOX_TOKEN}
        {...this.state.viewport}
        mapStyle={mapStyle}
        ref={ref => {
          if (ref && ref.getMap()) {
            this._map = ref.getMap()
          }
        }}
        onViewportChange={(viewport) => this.setState({ viewport })}
        onLoad={() => { this._addImage() }}
        //onHover={this._onHover}
        onClick={this._onClick}
        getCursor={this._getCursor}
        width="100%"
        height="100vh"
        maxZoom={24}
        interactiveLayerIds={this.state.interactiveLayerIds}
        clickRadius={2}
      >
        {this._renderTooltip()}
      </ReactMapGL>
    );
  }
}


export default VectorMap