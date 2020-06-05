import React, { useState, useMemo } from "react";
import ReactMapGL, {
  PointerEvent,
  Source,
  Layer,
  WebMercatorViewport,
  ViewportProps,
  ExtraState,
} from "react-map-gl";
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
import bboxPolygon from "@turf/bbox-polygon";
import length from "@turf/length";
import buffer from "@turf/buffer";
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
    latitude: 0,
    longitude: 0,
    zoom: 1,
  });

  const geoJson = useMemo(() => {
    const model = reprojectFeatureCollection(modelGeoJson, projectionString);
    const boundingBox = bbox(model);
    const bboxPoly = bboxPolygon(boundingBox);
    const bboxPolyBuffer = buffer(bboxPoly, length(bboxPoly) / 4);
    const viewportBoundingBox = bbox(bboxPolyBuffer);

    return {
      model,
      boundingBox,
      viewportBoundingBox,
      bboxPoly: {
        type: "FeatureCollection",
        features: [bboxPolygon(boundingBox), bboxPolyBuffer],
      },
    };
  }, [modelGeoJson, projectionString]);

  const onViewPortChange = (
    viewState: ViewportProps,
    interactionState: ExtraState,
    oldViewState: ViewportProps
  ) => {
    if (projectionString !== "METERS") {
      return setViewport(viewState);
    }
    const [minLng, minLat, maxLng, maxLat] = geoJson.viewportBoundingBox;
    const { latitude, longitude } = viewState;

    const newLongitude =
      longitude > maxLng ? maxLng : longitude < minLng ? minLng : longitude;
    const newLatitude =
      latitude > maxLat ? maxLat : latitude < minLat ? minLat : latitude;

    setViewport({
      ...viewState,
      longitude: newLongitude,
      latitude: newLatitude,
    });
  };

  const geoJsonSources = useMemo(() => {
    const { model } = geoJson;

    return {
      pipes: extractAssetType(model, ["Pipe", "Valve", "Pump"]),
      valves: extractAssetType(model, ["Valve"]),
      pumps: extractAssetType(model, ["Pump"]),
      junctions: extractAssetType(model, ["Junction"]),
      tanks: extractAssetType(model, ["Tank"]),
      reserviors: extractAssetType(model, ["Reservior"]),
    };
  }, [geoJson]);

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

      const geoJson = reprojectFeatureCollection(
        modelGeoJson,
        projectionString
      );
      const jsonbbox = bbox(geoJson);

      const { longitude, latitude, zoom } = new WebMercatorViewport({
        width: 400,
        height: 400,
      }).fitBounds([
        [jsonbbox[0], jsonbbox[1]],
        [jsonbbox[2], jsonbbox[3]],
      ]);
      setViewport({
        ...viewport,
        longitude,
        latitude,
        zoom,
      });
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
      onViewportChange={onViewPortChange}
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
      {
        //      <Source
        //        id="bbox"
        //        type="geojson"
        //        //@ts-ignore
        //        data={geoJson.bboxPoly}
        //      >
        //        <Layer
        //          id="bbox"
        //          type="line"
        //          paint={MainStyle.toJS().paint}
        //          layout={MainStyle.toJS().layout}
        //        />
        //      </Source>
        //
        //      <Source
        //        id="viewport"
        //        type="geojson"
        //        //@ts-ignore
        //        data={{
        //          type: "Feature",
        //          geometry: {
        //            type: "Point",
        //            coordinates: [viewport.longitude, viewport.latitude],
        //          },
        //        }}
        //      >
        //        <Layer
        //          id="viewport"
        //          type="circle"
        //          paint={{ "circle-color": "black", "circle-radius": 5 }}
        //        />
        //      </Source>
      }
    </ReactMapGL>
  );
}

export default VectorMap;
