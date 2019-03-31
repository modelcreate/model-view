import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import TimeSeriesChart from '../TimeSeriesChart';
import { Properties } from '@turf/helpers';
import { ModelInfoSetting } from '../ModelInfo';
import { debug } from 'util';

type FeatureProperties = {
  feature: ModelInfoSetting,
  tsv: string[]
}


const FeatureProperties: FunctionComponent<FeatureProperties> = ({ feature, tsv }) => {

  const { selectedFeature } = feature
  //const selectId = Object.keys(selectedFeature).find(key => selectedFeature[key].constructor === Array)
  const [timeSeriesId, setTimeSeriesId] = useState(tsv[0])


  return (
    <div>
      <select id="timeseries-select" value={timeSeriesId} onChange={evt => setTimeSeriesId(evt.target.value)}>
        {tsv.map((keyName) => (
          <option key={keyName} value={keyName}>{keyName}</option>
        ))}
      </select>
      {

        <TimeSeriesChart timeseriesData={selectedFeature[timeSeriesId]} currentTimestep={feature.currentTimestep} timesteps={feature.timesteps} />
      }
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