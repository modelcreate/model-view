import { fromJS } from 'immutable';

const layout = { visibility: 'visible' };

const paint = {
  'line-color': [
    'case',
    ["==", ['get', 'operationa'], 'Abandoned'], '#7af500',
    ["==", ['get', 'operationa'], 'Removed'], '#7af500',
    ["==", ['get', 'operationa'], 'Isolated'], '#5e9294',
    ["==", ['get', 'operationa'], 'Proposed'], '#ff7f00',
    ["==", ['get', 'type'], 'Fire'], '#00ffff',
    ["==", ['get', 'type'], 'Distributi'], '#1528f7',
    ["==", ['get', 'type'], 'Trunk'], '#e31a1c',
    /* other */ '#1528f7'
  ],
  'line-width': 2
};


const MainStyle = fromJS({
  id: 'main-geojson',
  source: 'mains',
  type: 'line',
  paint,
  layout
});

export default MainStyle
