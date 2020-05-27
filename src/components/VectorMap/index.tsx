import React, { useState, useMemo } from "react";
import ReactMapGL, { PointerEvent, Source, Layer } from "react-map-gl";
import { fromJS } from "immutable";
import {
  OsZoomStackLight,
  BlankMap,
  MapboxStyle,
  HydrantStyle,
  MainStyle,
  FixedHeadStyle,
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
      types.includes(feature.properties.category)
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
    latitude: 43.403673421449156,
    longitude: -80.51306024193764,
    zoom: 14.2,
  });

  const geoJsonSources = useMemo(() => {
    const geoJson = reprojectFeatureCollection(modelGeoJson, projectionString);

    return {
      pipes: extractAssetType(geoJson, ["Pipe", "Valve", "Pump"]),
      valves: extractAssetType(geoJson, ["Valve"]),
      pumps: extractAssetType(geoJson, ["Pump"]),
      junctions: extractAssetType(geoJson, ["Junction"]),
      tanks: extractAssetType(geoJson, ["Tank"]),
      reserviors: extractAssetType(geoJson, ["Reservior"]),
    };
  }, [modelGeoJson, projectionString]);

  const _addImage = () => {
    if (map) {
      map.addImage("valve", ValveStyle.toJS().images[0][1]);
      map.addImage("triangleSolid", FixedHeadStyle.toJS().images[0][1]);

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

  const _onClick = (event: PointerEvent) => {
    if (
      event &&
      event.features &&
      event.features.length > 0 &&
      event.features[0].properties
    ) {
      console.log(event.features[0].toJSON());
      onSelectFeature(event.features[0].toJSON());
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
      interactiveLayerIds={["pipes", "junctions", "valves", "reserviors"]}
      clickRadius={2}
    >
      <Source id="pipe-source" type="geojson" data={geoJsonSources.pipes}>
        <Layer
          id="pipes"
          type="line"
          paint={MainStyle.toJS().paint}
          layout={MainStyle.toJS().layout}
        />
      </Source>

      <Source
        id="junction-source"
        type="geojson"
        data={geoJsonSources.junctions}
      >
        <Layer
          id="junctions"
          type="circle"
          paint={HydrantStyle.toJS().paint}
          layout={HydrantStyle.toJS().layout}
        />
      </Source>

      <Source id="valve-source" type="geojson" data={geoJsonSources.valves}>
        <Layer
          id="valves"
          type="symbol"
          paint={{}}
          layout={ValveStyle.toJS().layout}
        />
      </Source>

      <Source
        id="reservior-source"
        type="geojson"
        data={geoJsonSources.reserviors}
      >
        <Layer
          id="reserviors"
          type="symbol"
          paint={FixedHeadStyle.toJS().paint}
          layout={FixedHeadStyle.toJS().layout}
        />
      </Source>
    </ReactMapGL>
  );
}

export default VectorMap;
