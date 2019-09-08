import React, { FunctionComponent } from "react";
import { VictoryChart, VictoryLine } from "victory";

type TimeSeriesChartProps = {
  timeseriesData: number[];
  timesteps: Date[];
  currentTimestep: number;
};

const TimeSeriesChart: FunctionComponent<TimeSeriesChartProps> = ({
  timeseriesData,
  timesteps,
  currentTimestep
}) => {
  const avgData =
    timeseriesData.reduce((p, c) => p + c, 0) / timeseriesData.length;
  const multipler = avgData >= 0 ? 1 : -1;

  const data = timesteps.map((timestep, i) => ({
    x: timestep,
    y: timeseriesData[i] * multipler
  }));
  const max = Math.max(...timeseriesData);
  const min = Math.min(...timeseriesData);
  const domainMax = Math.max(Math.abs(max), Math.abs(min));
  const domainMin = Math.min(Math.abs(max), Math.abs(min));
  const diff = domainMax - domainMin;

  return (
    <div>
      <VictoryChart
        domain={{ y: [domainMin - diff * 0.1, domainMax + diff * 0.1] }}
        width={500}
        height={180}
        scale={{ x: "time" }}
      >
        <VictoryLine
          style={{
            data: { stroke: "tomato" }
          }}
          x={() => timesteps[currentTimestep].getTime()}
        />
        <VictoryLine
          data={data}
          labels={(d: { x: Date; y: number }) =>
            timesteps[currentTimestep] === d.x ? d.y : null
          }
          style={{
            data: { stroke: "#1528f7" },
            labels: { fill: "#00000", fontSize: 20, textAnchor: "start" }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default TimeSeriesChart;
