import React, { FunctionComponent, useState } from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { ModelInfoSetting } from '../ModelInfo';


type TimeSeriesChartProps = {
  settings: ModelInfoSetting
}


const TimeSeriesChart: FunctionComponent<TimeSeriesChartProps> = ({ settings }) => {

  const { selectedFeature } = settings
  const selectId = Object.keys(selectedFeature).find(key => selectedFeature[key].constructor === Array)

  const [dataId, setDataId] = useState(selectId);


  return (
    <div>
      <select id="timeseries-select" value={dataId} onChange={evt => setDataId(evt.target.value)}>
        {Object.keys(selectedFeature).map((keyName, i) => (
          selectedFeature[keyName].constructor === Array &&
          <option key={keyName} value={keyName}>{keyName}</option>
        ))}
      </select>
      <VictoryChart width={500} height={200} scale={{ x: "time" }}
      >
        <VictoryLine style={{
          data: { stroke: "tomato" }
        }} x={() => settings.timesteps[settings.currentTimestep].getTime()} />
        <VictoryLine
          data={dataId && settings.timesteps.map((timestep, i) => ({ "x": timestep, "y": selectedFeature[dataId][i] })) || []}

        />
      </VictoryChart>
    </div>
  );
}


export default TimeSeriesChart