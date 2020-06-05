import React, { FunctionComponent } from "react";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from "victory";

type TimeSeriesChartProps = {
  timeseriesData: number[];
  startTime: number;
  reportStep: number;
  periods: number;
  currentTimestep: number;
};

const TimeSeriesChart: FunctionComponent<TimeSeriesChartProps> = ({
  timeseriesData,
  startTime,
  reportStep,
  periods,
  currentTimestep,
}) => {
  const currentSecond = startTime + currentTimestep * reportStep;

  const avgData =
    timeseriesData.reduce((p, c) => p + c, 0) / timeseriesData.length;
  const multipler = avgData >= 0 ? 1 : -1;

  const data = timeseriesData.map((data, i) => ({
    x: startTime + reportStep * i,
    y: data * multipler,
  }));
  const max = Math.max(...timeseriesData);
  const min = Math.min(...timeseriesData);
  const domainMax = Math.max(Math.abs(max), Math.abs(min));
  const domainMin = Math.min(Math.abs(max), Math.abs(min));
  const diff = domainMax - domainMin === 0 ? 1 : domainMax - domainMin;

  const precise = (x: number): string => {
    return x < 0 ? x.toPrecision(2) : x.toFixed(2).toString();
  };

  const getTickFormat = (t: number): string => {
    if (t % 86400 === 0) {
      return `Day ${t / 86400 + 1}`;
    }
    const hour = Math.floor((t % 86400) / 3600);
    const minute = Math.floor((t % 3600) / 60);

    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  };

  const ticks = Array.from(Array(periods).keys()).reduce((acc, i) => {
    const tickInt = periods * reportStep > 86400 * 2 ? 86400 : 21600;

    const time = startTime + reportStep * i;
    if (time === 0 || time % tickInt === 0) {
      return acc.concat(time);
    }
    return acc;
  }, [] as number[]);

  return (
    <div>
      <VictoryChart
        maxDomain={{ y: domainMax + diff * 0.1 }}
        minDomain={{ y: domainMin - diff * 0.1 }}
        width={500}
        height={180}
      >
        <VictoryAxis
          crossAxis
          theme={VictoryTheme.material}
          tickFormat={(t) => getTickFormat(t)}
          tickValues={ticks}
        />
        <VictoryAxis dependentAxis crossAxis theme={VictoryTheme.material} />
        <VictoryLine
          style={{
            data: { stroke: "tomato" },
          }}
          x={() => currentSecond} //timesteps[currentTimestep].getTime()}
        />
        <VictoryLine
          data={data}
          labels={({ datum }) =>
            currentSecond === datum.x ? precise(datum.y) : null
          }
          //labels={(d: { x: number; y: number }) => {
          //  console.log(d);
          //  return currentSecond === d.x ? precise(d.y) : null;
          //}}
          style={{
            data: { stroke: "#1528f7" },
            labels: { fill: "#00000", fontSize: 20, textAnchor: "start" },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default TimeSeriesChart;
