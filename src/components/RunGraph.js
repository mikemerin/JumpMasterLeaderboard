import React from 'react';
import { Line } from 'react-chartjs-2'

export const RunGraph = (props) => {

    var labels = [], totals = []

    if (props.all_data.length > 0) {
      props.all_data.forEach((x, i) => {
        labels.push(i+1)
        totals.push(x.total)
      })
    }

    const options = {
      options: {
        scales: {
          xAxes: [{
            barThickness: 1
          }]
        }
      },
    }

    const data_runs = {
      labels: labels,
      datasets: [
        {
          label: `Total Runs (${props.all_data.length})`,
          type: 'line',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(14,110,184,0.4)',
          borderColor: 'rgba(14,110,184,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(14,110,184,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(14,110,184,1)',
          pointHoverBorderColor: 'rgba(14,110,184,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: totals
        }
      ]
    };

    return (
      <div>
        <Line data={data_runs} height={200} options={options} />
      </div>
    );

}

export default RunGraph
