import React, { FunctionComponent, useState } from "react";
import TimeSeriesChart from "../TimeSeriesChart";
import { ModelInfoSetting } from "../ModelInfo";
import "./index.css";

type FeatureProperties = {
  feature: ModelInfoSetting;
  tsv: string[];
  selectedFeature: { [name: string]: any };
  onClearSelected: () => void;
};

const FeatureProperties: FunctionComponent<FeatureProperties> = ({
  feature,
  tsv,
  selectedFeature,
  onClearSelected,
}) => {
  //const selectId = Object.keys(selectedFeature).find(key => selectedFeature[key].constructor === Array)
  const [timeSeriesId, setTimeSeriesId] = useState(tsv[0]);

  if (selectedFeature[timeSeriesId] === undefined) {
    setTimeSeriesId(tsv[0]);
  }

  const precise = (x: number): string => {
    return x < 0 ? x.toPrecision(2) : x.toFixed(2).toString();
  };

  //const title: string = selectedFeature.us_node_id ? `${selectedFeature.us_node_id}.${selectedFeature.ds_node_id}.${selectedFeature.link_suffix}` : selectedFeature.node_id
  return (
    <div>
      <hr />
      <button className={"close-button"} onClick={onClearSelected}>
        X
      </button>
      {selectedFeature[timeSeriesId] && (
        <TimeSeriesChart
          timeseriesData={selectedFeature[timeSeriesId]}
          currentTimestep={feature.currentTimestep}
          startTime={feature.reportingInfo.StartTime}
          reportStep={feature.reportingInfo.ReportStep}
          periods={feature.reportingInfo.Periods}
        />
      )}
      <form className="tvd-form">
        <label>Plot Data: </label>
        <select
          id="timeseries-select"
          value={timeSeriesId}
          onChange={(evt) => setTimeSeriesId(evt.target.value)}
        >
          {tsv.map((keyName) => (
            <option key={keyName} value={keyName}>
              {keyName}
            </option>
          ))}
        </select>
      </form>
      <div className="control-panel-data">
        <table className="feature-data-table">
          <tbody>
            {Object.keys(selectedFeature).map((keyName, i) => (
              <tr key={i}>
                {selectedFeature[keyName].constructor !== Array ? (
                  <>
                    <th>{keyName}</th>
                    <td>{selectedFeature[keyName]}</td>
                  </>
                ) : (
                  <>
                    <th>{keyName}</th>
                    <td>
                      {precise(
                        selectedFeature[keyName][feature.currentTimestep]
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureProperties;
