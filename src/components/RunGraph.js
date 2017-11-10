import React from 'react';
import { Line } from 'react-chartjs-2'

export const RunGraph = (props) => {

    var labels = [], totals = []
    var trend = [], slope = 0

    if (props.filtered_data.length > 0) {
      props.filtered_data.forEach((x, i) => {
        labels.push(i+1)
        totals.push(x.total)
      })
    }

//     // trend line
//
//
//     if (avg_temps.filter(x=>x).length !== 0) {
//       // numbers to work off of
//       let sum_temps = 0
//       let sum_x_axis = 0
//       let linear = 0
//       let x_squared = 0
//
//       let avg = avg_temps.filter(x => x)
//       let length = avg_temps.length
//       let x_axis = avg_temps.map((x,i) => {
//           sum_temps = Math.round(avg.reduce((sum, x) => sum + x) * 10) / 10
//           return i+1
//       })
//
//       sum_x_axis = x_axis.reduce((sum, x) => sum + x)
//
//       // work off those prior numbers to set up the trend equation
//       avg_temps.forEach((t, i) => {
//           // x_squared += i**2
//           if (!isNaN(t)) {
//             linear += t * i
//           }
//       })
//
//   // round linear
//     linear = Math.round(linear * 10) / 10
//
//     // get slope and intercept for line start point and angle, then create the trend line
//     slope = 1.0 * ((length * linear) - (sum_x_axis * sum_temps)) / ((length * x_squared) - (sum_x_axis ** 2))
//     let intercept = 1.0 * (sum_temps - (slope * sum_x_axis)) / length
//     trend = x_axis.map(x => (slope * x) + intercept )
//
// }
//
// let trend_year = Math.round(slope*12 * 1000) / 1000
// let trend_total = Math.round((trend[trend.length-1]-trend[0]) * 1000) / 1000

    const options = {
      tooltips: {
        position: 'nearest'
      },
      plugins: {
        datalabels: {
          display: false
        }
      },

        scales: {
          xAxes: [{
            display: false
          }]

      },
    }

    const data_runs = {
      labels: labels,
      datasets: [
        {
          label: 'Points',
          type: 'line',
          fill: true,
          lineTension: 0,
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
