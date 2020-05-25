import React, { useState, useMemo } from "react";
import ReactMapGL, { PointerEvent, Source, Layer } from "react-map-gl";
import { fromJS } from "immutable";
import {
  OsZoomStackLight,
  BlankMap,
  MapboxStyle,
  HydrantStyle,
  MainStyle,
  MeterStyle,
  ValveStyle,
} from "../../mapstyles";
import { reprojectFeatureCollection } from "../../utils/reproject";
import {
  FeatureCollection,
  Feature,
  Geometries,
  Properties,
} from "@turf/helpers";
import bbox from "@turf/bbox";
import { AttributionControl, Map } from "mapbox-gl";
import * as GeoJSON from "geojson";

type VectorMapProps = {
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

const extractAssetType = (
  geoJson: FeatureCollection<Geometries, Properties>,
  types: string[]
): GeoJSON.FeatureCollection<GeoJSON.Geometry> => {
  // Difference between turf and other GeoJSON is causing issues!!
  //@ts-ignore
  const features: GeoJSON.Feature<
    GeoJSON.Geometry,
    GeoJSON.GeoJsonProperties
  >[] = geoJson.features.filter(
    (feature) =>
      feature.geometry !== null &&
      feature.properties !== null &&
      types.includes(feature.properties.table)
  );

  return {
    type: "FeatureCollection",
    features,
  };
};

function VectorMap({
  projectionString,
  modelGeoJson,
  onSelectFeature,
}: VectorMapProps) {
  const [map, setMap] = useState<Map | undefined>();
  const [viewport, setViewport] = useState({
    width: 400,
    height: 100,
    latitude: -19.146445255599986,
    longitude: 146.8447905778885,
    zoom: 14.2,
  });

  const geoJsonSources = useMemo(() => {
    const geoJson = reprojectFeatureCollection(modelGeoJson, projectionString);

    return {
      pipes: extractAssetType(geoJson, ["wn_pipe", "wn_meter", "wn_valve"]),
      hydrants: extractAssetType(geoJson, ["wn_hydrant"]),
      valves: extractAssetType(geoJson, ["wn_valve"]),
      meters: extractAssetType(geoJson, ["wn_meter"]),
    };
  }, [modelGeoJson, projectionString]);

  const _addImage = () => {
    if (map) {
      map.addImage("meter", MeterStyle.toJS().images[0][1]);
      map.addImage("valve", ValveStyle.toJS().images[0][1]);

      // TODO: This is not DRY or where I should be doing this but I
      // need the attribution and I have the map here so ill add now
      // and split later
      const britishNationalGrid =
        "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +datum=OSGB36 +units=m +no_defs";
      const usingOsBaseMap = projectionString === britishNationalGrid;
      if (usingOsBaseMap) {
        map.addControl(
          new AttributionControl({
            customAttribution:
              "Contains OS data © Crown copyright and database right 2019",
          })
        );
      }

      //const json = this.state.mapStyle.toJS();
      //const jsonbbox = bbox(json.sources.mains.data);
      //this._goToBBox(jsonbbox);
    }
  };

  const style = useMemo(() => {
    const britishNationalGrid =
      "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +datum=OSGB36 +units=m +no_defs";

    // TODO: Clean up!!
    const usingOsBaseMap = projectionString === britishNationalGrid;
    const baseStyle = usingOsBaseMap
      ? OsZoomStackLight
      : projectionString === "METERS"
      ? BlankMap
      : MapboxStyle;
    const immutBase = fromJS(baseStyle); //)
    const mapStyle = immutBase;

    return mapStyle;
  }, [projectionString]);

  //TODO: This is a mess, I need to clean this up, there is probably an easy oneliner here I'm not thinking of
  const _onClick = (event: PointerEvent) => {
    const feature = event.features && event.features[0];

    if (
      event &&
      event.features &&
      event.features.length > 0 &&
      event.features[0].properties
    ) {
      console.log(event.features[0].toJSON());
    }

    if (feature) {
      const {
        us_node_id,
        ds_node_id,
        link_suffix,
        node_id,
      } = feature.properties;
      const feat = modelGeoJson.features.find((f) => {
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

      feat && onSelectFeature(feat);
    }
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={style}
      ref={(ref) => ref && setMap(ref.getMap())}
      onViewportChange={setViewport}
      onLoad={() => {
        _addImage();
      }}
      attributionControl={true}
      onClick={_onClick}
      width="100%"
      height="100vh"
      maxZoom={24}
      interactiveLayerIds={["hydrants-geojson", "main-geojson"]}
      clickRadius={2}
    >
      <Source id="my-data" type="geojson" data={geoJsonSources.pipes}>
        <Layer
          id="main-geojson"
          type="line"
          paint={MainStyle.toJS().paint}
          layout={MainStyle.toJS().layout}
        />
      </Source>

      <Source id="my-data" type="geojson" data={geoJsonSources.hydrants}>
        <Layer
          id="hydrants-geojson"
          type="circle"
          paint={HydrantStyle.toJS().paint}
          layout={HydrantStyle.toJS().layout}
        />
      </Source>
    </ReactMapGL>
  );
}

export default VectorMap;
