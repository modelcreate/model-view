import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import TimeSeriesChart from '../TimeSeriesChart';
import { Properties } from '@turf/helpers';
import { ModelInfoSetting } from '../ModelInfo';
import { debug } from 'util';
import './index.css';

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
      {

        <TimeSeriesChart timeseriesData={selectedFeature[timeSeriesId]} currentTimestep={feature.currentTimestep} timesteps={feature.timesteps} />
      }
      <form className="tvd-form">
        <label>Plot Data: </label>
        <select id="timeseries-select" value={timeSeriesId} onChange={evt => setTimeSeriesId(evt.target.value)}>
          {tsv.map((keyName) => (
            <option key={keyName} value={keyName}>{keyName}</option>
          ))}
        </select>
      </form>
      <ul>
        {Object.keys(selectedFeature).map((keyName, i) => (
          <li key={i}>
            {(selectedFeature[keyName].constructor !== Array) ?
              <span>{keyName}: {selectedFeature[keyName]}</span>
              :
              <span>{keyName}: {selectedFeature[keyName][feature.currentTimestep]}</span>
            }
          </li>
        ))}
      </ul>
    </div>

  )

}

export default FeatureProperties