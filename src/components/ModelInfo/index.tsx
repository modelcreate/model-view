import React, { PureComponent, FunctionComponent } from 'react';
import { Properties } from '@turf/helpers';
import FeatureProperties from '../FeatureProperties';
import './index.css';


export const testFeature: Properties = {

  "table": "wn_meter", "us_node_id": "12345", "ds_node_id": "67899", "link_suffix": "1",
  "flow": [3.969326972961426, 3.6261651515960693, 3.0963973999023438, 2.7438931465148926]

}


type DefaultContainer = {}

const DefaultContainer: FunctionComponent<DefaultContainer> = ({ children }) => <div className="control-panel">{children}</div>;

export interface ModelInfoSetting {
  modeName: string,
  currentTimestep: number,
  timesteps: Date[],
  selectedFeature: Properties
}


type ModelInfoProps = {
  settings: ModelInfoSetting,
  onChange: (value: string) => void;
}


const ModelInfo: FunctionComponent<ModelInfoProps> = ({ settings, onChange }) => {

  return (
    <DefaultContainer>
      <h3>{settings.modeName}</h3>
      <p>{settings.timesteps[settings.currentTimestep].toLocaleDateString('en-UK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p>{settings.timesteps[settings.currentTimestep].toLocaleTimeString('en-UK')}</p>
      <hr />
      <div key={name} className="input">
        <label>Year {settings.selectedFeature && settings.selectedFeature.length}</label>
        <input type="range" value={settings.currentTimestep}
          min={0} max={settings.timesteps.length - 1} step={1}
          onChange={evt => onChange(evt.target.value)}
        />
      </div>
      <hr />
      {settings.selectedFeature &&
        <FeatureProperties feature={settings.selectedFeature} />
      }


    </DefaultContainer>
  );
}


export default ModelInfo
