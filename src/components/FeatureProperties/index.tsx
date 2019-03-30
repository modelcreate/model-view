import React, { FunctionComponent } from 'react';
import { Properties } from '@turf/helpers';

type FeatureProperties = {
  feature: Properties
}


const FeatureProperties: FunctionComponent<FeatureProperties> = ({ feature }) => {

  return (
    <div>
      {feature && Object.keys(feature).map((keyName, i) => (
        feature[keyName].constructor !== Array &&
        <li key={i}>
          <span >key: {i} Name: {feature && feature[keyName]}</span>
        </li>
      ))}

    </div>

  )

}

export default FeatureProperties