import { reprojectCoord, reprojectFeature, reprojectFeatureCollection } from '.';
import { FeatureCollection, Geometries, Properties, LineString, Feature, Geometry } from '@turf/helpers';


const fromProjection = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=375,-111,431,0,0,0,0 +units=m +no_defs'

const geoIn2: FeatureCollection<Geometries, Properties> = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature", "geometry": { "type": "Point", "coordinates": [429157, 623009] },
      "properties": { "table": "wn_node", "node_id": "1234", "totdemnd": 0.0, "totleak": 0.0 }
    },
    {
      "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[429157, 623009], [429157, 623009]] },
      "properties": { "table": "wn_meter", "us_node_id": "1234", "ds_node_id": "12345", "link_suffix": "1" }
    }]
}

const geoIn: FeatureCollection<Geometries, Properties> = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature", "geometry": { "type": "Point", "coordinates": [429157, 623009] },
      "properties": { "table": "wn_node", "node_id": "1234", "totdemnd": 0.0, "totleak": 0.0 }
    },
    {
      "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[429157, 623009], [429157, 623009]] },
      "properties": { "table": "wn_meter", "us_node_id": "1234", "ds_node_id": "12345", "link_suffix": "1" }
    }]
}

const geoOut: FeatureCollection<Geometries, Properties> = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature", "geometry": { "type": "Point", "coordinates": [-1.5399906584608514, 55.50003197082179] },
      "properties": { "table": "wn_node", "node_id": "1234", "totdemnd": 0.0, "totleak": 0.0 }
    },
    {
      "type": "Feature", "geometry": {
        "type": "LineString", "coordinates": [[-1.5399906584608514, 55.50003197082179], [-1.5399906584608514, 55.50003197082179]]
      },
      "properties": { "table": "wn_meter", "us_node_id": "1234", "ds_node_id": "12345", "link_suffix": "1" }
    }]
}



it('reprojects a single coordinate', () => {
  const coordIn = [429157, 623009]
  const coordOut = [-1.5399906584608514, 55.50003197082179]
  const fromProjection = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=375,-111,431,0,0,0,0 +units=m +no_defs'
  const geoReprojected = reprojectCoord(coordIn, fromProjection)
  expect(geoReprojected).toEqual(coordOut);

});



it('reprojects a feature', () => {
  const lineIn: Feature<Geometry> = { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[429157, 623009], [429157, 623009]] }, "properties": {} }
  const lineOut: Feature<Geometry> = { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[-1.5399906584608514, 55.50003197082179], [-1.5399906584608514, 55.50003197082179]] }, "properties": {} }
  const fromProjection = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=375,-111,431,0,0,0,0 +units=m +no_defs'

  const lineReproject = reprojectFeature(lineIn, fromProjection)
  expect(lineReproject).toEqual(lineOut);

})


it('reprojects a feature and removes duplicate end point', () => {
  const lineIn: Feature<Geometry> = { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[429157, 623009], [429157, 623009], [429157, 623009]] }, "properties": {} }
  const lineOut: Feature<Geometry> = { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[-1.5399906584608514, 55.50003197082179], [-1.5399906584608514, 55.50003197082179]] }, "properties": {} }
  const fromProjection = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=375,-111,431,0,0,0,0 +units=m +no_defs'

  const lineReproject = reprojectFeature(lineIn, fromProjection)
  expect(lineReproject).toEqual(lineOut);

})

it('reprojects a FeatureCollection', () => {
  const fromProjection = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=375,-111,431,0,0,0,0 +units=m +no_defs'
  const geoReprojected = reprojectFeatureCollection(geoIn, fromProjection)
  expect(geoIn2).toEqual(geoIn);
  expect(geoReprojected).toEqual(geoOut);

});