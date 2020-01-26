import React, { Component } from "react";
import DeckGL from "@deck.gl/react";
import { ContourLayer } from "@deck.gl/aggregation-layers";

import StaticMap, {
  PointerEvent,
  ExtraState,
  ViewState,
  FlyToInterpolator
} from "react-map-gl";
import { fromJS } from "immutable";
import {
  OsZoomStackLight,
  BlankMap,
  MapboxStyle,
  HydrantStyle,
  MainStyle,
  MeterStyle,
  ValveStyle
} from "../../mapstyles";
import { reprojectFeatureCollection } from "../../utils/reproject";
import {
  FeatureCollection,
  Feature,
  Geometries,
  Properties,
  featureCollection,
  BBox
} from "@turf/helpers";
import bbox from "@turf/bbox";
import { AttributionControl } from "mapbox-gl";
import { easeCubic } from "d3-ease";
import WebMercatorViewport from "viewport-mercator-project";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

type VectorMapProps = {
  viz: {
    coord: [number, number];
    value: number;
  }[];
  projectionString: string;
  modelGeoJson: FeatureCollection<Geometries, Properties>;
  onSelectFeature: (value: Feature) => void;
};
interface VectorMapState {
  modelGeoJson?: FeatureCollection<Geometries, Properties>;
  mapStyle?: any;
  viewport: any;
  x?: number;
  y?: number;
  hoveredFeature?: any;
  interactiveLayerIds: string[];
  usingOsBaseMap: boolean;
}

const extractAssetType = (geoJson: FeatureCollection, types: string[]) => {
  const filteredFeatures = geoJson.features.filter(
    feature =>
      feature.properties !== null && types.includes(feature.properties.table)
  );
  return featureCollection(filteredFeatures);
};
const INITIAL_VIEW_STATE = {
  latitude: 47.65,
  longitude: 7,
  zoom: 4.5,
  maxZoom: 16,
  //pitch: 50,
  bearing: 0
};

const data: {
  ADDRESS: string;
  RACKS: number;
  SPACES: number;
  COORDINATES: [number, number];
}[] = [
  {
    ADDRESS: "939 ELLIS ST",
    RACKS: 2,
    SPACES: 4,
    COORDINATES: [-122.42177834, 37.78346622]
  },
  {
    ADDRESS: "1380 HOWARD ST",
    RACKS: 1,
    SPACES: 2,
    COORDINATES: [-122.414411, 37.774458]
  },
  {
    ADDRESS: "1195 OAK ST",
    RACKS: 1,
    SPACES: 2,
    COORDINATES: [-122.438887, 37.772737]
  },
  {
    ADDRESS: "1387 VALENCIA ST",
    RACKS: 1,
    SPACES: 2,
    COORDINATES: [-122.42019976, 37.75087429]
  },
  {
    ADDRESS: "180 TOWNSEND ST",
    RACKS: 1,
    SPACES: 2,
    COORDINATES: [-122.392606, 37.779369]
  }
];

const CONTOURS = [
  { threshold: 1, color: [255, 0, 0, 255], strokeWidth: 1 }, // => Isoline for threshold 1
  { threshold: 20, color: [0, 255, 0], strokeWidth: 2 }, // => Isoline for threshold 5
  { threshold: 25, color: [0, 0, 255], strokeWidth: 2 }, // => Isoline for threshold 5
  { threshold: [0, 20], color: [255, 0, 0, 128] } // => Isoband for threshold range [6, 10)
];

class VectorMap extends Component<VectorMapProps, VectorMapState> {
  _map: mapboxgl.Map | null = null;

  _getDeckLayers = () => {
    const layer = new ContourLayer({
      id: "contourLayer",
      // Three contours are rendered.
      contours: CONTOURS,
      data: this.props.viz,
      //@ts-ignore
      aggregation: "MEAN",
      cellSize: 50,
      getPosition: d => d.coord,
      getWeight: d => d.value
    });

    return [layer];
  };

  _addImage = () => {
    if (this._map !== null) {
      this._map.addImage("meter", MeterStyle.toJS().images[0][1]);
      this._map.addImage("valve", ValveStyle.toJS().images[0][1]);

      // TODO: This is not DRY or where I should be doing this but I
      // need the attribution and I have the map here so ill add now
      // and split later
      const britishNationalGrid =
        "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +datum=OSGB36 +units=m +no_defs";
      const usingOsBaseMap =
        this.props.projectionString === britishNationalGrid;
      if (usingOsBaseMap) {
        this._map.addControl(
          new AttributionControl({
            customAttribution:
              "Contains OS data © Crown copyright and database right 2019"
          })
        );
      }

      //const json = this.state.mapStyle.toJS();
      //const jsonbbox = bbox(json.sources.mains.data);
      //this._goToBBox(jsonbbox);
    }
  };

  _createStyles = () => {
    const britishNationalGrid =
      "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +datum=OSGB36 +units=m +no_defs";
    //const geoJson = reprojectFeatureCollection(
    //  this.props.modelGeoJson,
    //  this.props.projectionString
    //);
    const geoJson = this.props.modelGeoJson;
    console.log(geoJson);

    const wn_hydrant = extractAssetType(geoJson, ["wn_hydrant"]);
    const wn_pipe = extractAssetType(geoJson, [
      "wn_pipe",
      "wn_meter",
      "wn_valve"
    ]);
    const wn_meter = extractAssetType(geoJson, ["wn_meter"]);
    const wn_valve = extractAssetType(geoJson, ["wn_valve"]);
    // TODO: Clean up!!
    const usingOsBaseMap = this.props.projectionString === britishNationalGrid;
    const baseStyle = usingOsBaseMap
      ? OsZoomStackLight
      : this.props.projectionString === "METERS"
      ? BlankMap
      : MapboxStyle;
    const immutBase = fromJS(baseStyle); //)
    const mapStyle = immutBase
      .setIn(
        ["sources", "hydrants"],
        fromJS({ type: "geojson", data: wn_hydrant })
      )
      .setIn(["sources", "mains"], fromJS({ type: "geojson", data: wn_pipe }))
      .setIn(["sources", "meters"], fromJS({ type: "geojson", data: wn_meter }))
      .setIn(["sources", "valves"], fromJS({ type: "geojson", data: wn_valve }))
      .set(
        "layers",
        immutBase
          .get("layers")
          .push(MainStyle)
          .push(HydrantStyle)
          .push(MeterStyle)
          .push(ValveStyle)
      );

    console.log(mapStyle.toJS());

    return mapStyle;
  };

  state: Readonly<VectorMapState> = {
    viewport: {
      latitude: 0, //56.83955911423721,
      longitude: 0, //,//-2.287646619512958,
      zoom: 0
    },
    mapStyle: this._createStyles(),
    interactiveLayerIds: ["hydrants-geojson", "main-geojson"],
    usingOsBaseMap: false
  };

  _getCursor = (event: ExtraState) => {
    return event.isHovering ? "pointer" : "default";
  };

  //TODO: This is a mess, I need to clean this up, there is probably an easy oneliner here I'm not thinking of
  _onClick = (event: PointerEvent) => {
    const feature = event.features && event.features[0];

    if (feature) {
      const {
        us_node_id,
        ds_node_id,
        link_suffix,
        node_id
      } = feature.properties;
      const feat = this.props.modelGeoJson.features.find(f => {
        if (f.properties !== null) {
          if (f.properties.us_node_id !== undefined) {
            return (
              f.properties.us_node_id === us_node_id &&
              f.properties.ds_node_id === ds_node_id &&
              f.properties.link_suffix === link_suffix
            );
          } else {
            return f.properties.node_id === node_id;
          }
        } else return false;
      });

      feat && this.props.onSelectFeature(feat);
    }
  };

  _onViewportChange = (viewport: ViewState) => {
    this.setState({ viewport });
  };

  _goToBBox = (jsonbbox: BBox) => {
    const { longitude, latitude, zoom } = new WebMercatorViewport(
      this.state.viewport
    ).fitBounds(
      [
        [jsonbbox[0], jsonbbox[1]],
        [jsonbbox[2], jsonbbox[3]]
      ],
      {
        padding: 20
      }
    );

    const transitionDuration =
      this.props.projectionString === "METERS" ? 0 : 7000;

    const viewport = {
      ...this.state.viewport,
      longitude,
      latitude,
      zoom,
      transitionDuration,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    };
    this.setState({ viewport });
  };

  render() {
    const { mapStyle } = this.state;

    return (
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        width="100%"
        height="100vh"
        controller={true}
        layers={this._getDeckLayers()}
      >
        <StaticMap
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...this.state.viewport}
          mapStyle={mapStyle}
          ref={ref => {
            if (ref && ref.getMap()) {
              this._map = ref.getMap();
            }
          }}
          //onViewportChange={this._onViewportChange}
          onLoad={() => {
            this._addImage();
          }}
          attributionControl={true}
          onClick={this._onClick}
          getCursor={this._getCursor}
          maxZoom={24}
          interactiveLayerIds={this.state.interactiveLayerIds}
          clickRadius={2}
        />
      </DeckGL>
    );
  }
}

export default VectorMap;
