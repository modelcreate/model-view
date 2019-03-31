import React, { FunctionComponent } from 'react';
import TimeSeriesChart from '../TimeSeriesChart';
import { Properties } from '@turf/helpers';
import { ModelInfoSetting } from '../ModelInfo';

type FeatureProperties = {
  feature: ModelInfoSetting
}


const FeatureProperties: FunctionComponent<FeatureProperties> = ({ feature }) => {

  const { selectedFeature } = feature

  return (
    <div>
      <TimeSeriesChart settings={feature} />
      <ul>
        {Object.keys(selectedFeature).map((keyName, i) => (
          selectedFeature[keyName].constructor !== Array &&
          <li key={i}>
            <span >key: {i} Name: {selectedFeature[keyName]}</span>
          </li>
        ))}
      </ul>
    </div>

  )

}

export default FeatureProperties