import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';


class TimeSeriesChart extends React.Component {

  render() {
    return (
      <div>
        <VictoryChart width={500} height={200} scale={{ x: "time" }}
        >
          <VictoryLine
            style={{
              data: { stroke: "tomato" }
            }}
            data={[
              { key: new Date(1982, 1, 1), b: 125 },
              { key: new Date(1987, 1, 1), b: 257 },
              { key: new Date(1993, 1, 1), b: 345 },
              { key: new Date(1997, 1, 1), b: 515 },
              { key: new Date(2001, 1, 1), b: 132 },
              { key: new Date(2005, 1, 1), b: 305 },
              { key: new Date(2011, 1, 1), b: 270 },
              { key: new Date(2015, 1, 1), b: 470 }
            ]}
            x="key"
            y="b"
          />
        </VictoryChart>
      </div>
    );
  }
}

export default TimeSeriesChart