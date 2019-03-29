import { fromJS } from 'immutable';

const layout = { visibility: 'visible' };
const paint = {
  "circle-opacity": {
    stops: [[11.5, 0], [12, 1]]
  },
  "circle-stroke-opacity": {
    stops: [[11.5, 0], [12, 1]]
  },

  'circle-color': [
    'case',
    ["==", ['get', 'operational'], 'Abandoned'], '#33d935',
    ["==", ['get', 'type'], 'Fire'], '#b300ff',
    ["==", ['get', 'type'], 'Washout'], '#fff',
    /* other */ '#ccc'
  ],
  'circle-radius': {
    'base': 1,
    'stops': [[17, 2], [22, 10]]
  },
  'circle-stroke-color': [
    'case',
    ["==", ['get', 'operational'], 'Abandoned'], '#33d935',

    /* other */ '#b300ff'
  ],
  'circle-stroke-width': {
    'base': 0.5,
    'stops': [[15, 1.25], [22, 4]]
  },

};


const HydrantStyle = fromJS({
  id: 'hydrants-geojson',
  source: 'hydrants',
  type: 'circle',
  paint,
  layout
});

export default HydrantStyle