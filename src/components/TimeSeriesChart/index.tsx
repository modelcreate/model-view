import React, { FunctionComponent, useState } from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { ModelInfoSetting } from '../ModelInfo';
import { debug } from 'util';


type TimeSeriesChartProps = {
  timeseriesData: number[],
  timesteps: Date[],
  currentTimestep: number
}


const TimeSeriesChart: FunctionComponent<TimeSeriesChartProps> = ({ timeseriesData, timesteps, currentTimestep }) => {


  const data = timesteps.map((timestep, i) => ({ "x": timestep, "y": timeseriesData[i] }))

  return (
    <div>
      <VictoryChart width={500} height={200} scale={{ x: "time" }}
      >
        <VictoryLine style={{
          data: { stroke: "tomato" }
        }} x={() => timesteps[currentTimestep].getTime()} />
        <VictoryLine
          data={data}

        />
      </VictoryChart>
    </div>
  );
}


export default TimeSeriesChart