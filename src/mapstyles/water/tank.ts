import { fromJS } from "immutable";
import WaterIcons from "./waterIcons";

const layout = {
  visibility: "visible",
  "icon-image": "squareSolid",
  "icon-size": ["interpolate", ["exponential", 2], ["zoom"], 14, 0.5, 22, 2],
  "text-field": "{id}",
  //'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  "text-offset": [0.4, 0],
  "text-anchor": "left",
  //"text-max-width": 3,
  "text-size": {
    base: 2,
    stops: [
      [8, 8],
      [12, 8],
      [12, 8],
      [13, 12],
    ],
  },
  "text-rotate": 0,
  "icon-allow-overlap": true,
  "text-allow-overlap": true,
  "text-ignore-placement": false,
  "icon-ignore-placement": true,
};

const paint = {
  "text-color": "black",
  "text-halo-color": "white",
  "text-halo-width": 2,
};

const icons = {
  squareSolid: WaterIcons.squareSolid,
};

const images = [];
for (const key in icons) {
  const iconImage = new Image();
  iconImage.src =
    "data:image/svg+xml;charset=utf-8;base64," + btoa(WaterIcons.squareSolid);
  images.push([key, iconImage]);
}

const TankStyle = fromJS({
  id: "tank-geojson",
  source: "tank",
  type: "symbol",
  images,
  paint,
  layout,
  minZoom: 1,
});

export default TankStyle;
