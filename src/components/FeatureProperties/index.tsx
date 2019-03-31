import React, { FunctionComponent } from 'react';
import TimeSeriesChart from '../TimeSeriesChart';
import { Properties } from '@turf/helpers';

type FeatureProperties = {
  feature: Properties
}


const FeatureProperties: FunctionComponent<FeatureProperties> = ({ feature }) => {

  return (
    <div>
      <TimeSeriesChart />
      <ul>
        {feature && Object.keys(feature).map((keyName, i) => (
          feature[keyName].constructor !== Array &&
          <li key={i}>
            <span >key: {i} Name: {feature && feature[keyName]}</span>
          </li>
        ))}
      </ul>
    </div>

  )

}

export default FeatureProperties