
import { FeatureCollection, Geometries, Properties } from '@turf/helpers';

export default interface ModelFeatureCollection extends FeatureCollection<Geometries, Properties> {
  model: {
    "timesteps": string[],
    [name: string]: any;
  }
}