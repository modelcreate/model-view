
import { FeatureCollection, Geometries, Properties, Feature } from '@turf/helpers';
import { featureReduce, coordEach } from '@turf/meta'
import clone from '@turf/clone'
import { featureCollection } from '@turf/helpers'
import proj4 from 'proj4'


export function reprojectFeatureCollection(geoJson: FeatureCollection<Geometries, Properties>, fromProject: string): FeatureCollection {

  const initialValue: Array<Feature> = []

  const features = featureReduce(geoJson, function (previousValue, currentFeature, featureIndex) {
    const featureReproject = Object.assign({}, currentFeature, reprojectFeature(currentFeature, fromProject))
    return previousValue.concat(featureReproject)
  }, initialValue);

  return featureCollection(features)

}


export function reprojectFeature(feature: Feature, fromProject: string): Feature {

  const newFeature = clone(feature)

  coordEach(newFeature, function (currentCoord) {
    const newCoord = reprojectCoord(currentCoord, fromProject)
    currentCoord[0] = newCoord[0]
    currentCoord[1] = newCoord[1]
  });

  return newFeature
}

export function reprojectCoord(coord: number[], fromProject: string): number[] {
  return proj4(fromProject, proj4('EPSG:4326'), coord)
}

