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

  const precise = (x: number): string => {
    return x < 0 ? x.toPrecision(2) : x.toFixed(2).toString()

  }


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
      <div className="control-panel-data">
        <table className="feature-data-table">
          <tbody>
            {Object.keys(selectedFeature).map((keyName, i) => (
              <tr key={i}>
                {(selectedFeature[keyName].constructor !== Array) ?
                  <><th>{keyName}</th><td>{selectedFeature[keyName]}</td></>
                  :
                  <><th>{keyName}</th><td>{precise(selectedFeature[keyName][feature.currentTimestep])}</td></>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )

}

export default FeatureProperties