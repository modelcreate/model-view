import { fromJS } from 'immutable';
import WaterIcons from './waterIcons'


const layout = {
  'visibility': 'visible',
  'symbol-placement': 'line-center',
  'icon-image': 'meter',
  'icon-size': {
    'base': 1.75,
    'stops': [[10, 0.4], [22, 1]]
  },
  'icon-allow-overlap': true,
  'icon-ignore-placement': true
};


const icons = {
  'meter': WaterIcons.meter,
};

const images = [];
for (const key in icons) {
  const iconImage = new Image();
  iconImage.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(WaterIcons.meter);
  images.push([key, iconImage])
}


const MeterStyle = fromJS({
  id: 'meter-geojson',
  source: 'meters',
  type: 'symbol',
  images,
  layout,
  minZoom: 1
});

export default MeterStyle
