import React, { PureComponent, FunctionComponent } from 'react';
import { Properties } from '@turf/helpers';
import FeatureProperties from '../FeatureProperties';
import format from 'date-fns/format'
import './index.css';


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
      <div>
        <h2>{format(
          settings.timesteps[settings.currentTimestep],
          'Do MMMM YY'
        )}</h2>
        <h1>{format(
          settings.timesteps[settings.currentTimestep],
          'HH:mm'
        )}</h1>
        <div key={name} className="input">
          <input type="range" value={settings.currentTimestep}
            min={0} max={settings.timesteps.length - 1} step={1}
            onChange={evt => onChange(evt.target.value)}
          />
        </div>
      </div>

      {settings.selectedFeature &&
        <FeatureProperties selectedFeature={settings.selectedFeature} key={settings.selectedFeature.us_node_id} feature={settings} tsv={Object.keys(settings.selectedFeature).filter(key => settings.selectedFeature && settings.selectedFeature[key].constructor === Array)} />
      }


    </DefaultContainer>
  );
}


export default ModelInfo
