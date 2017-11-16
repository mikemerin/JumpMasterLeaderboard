import React from 'react';
import { Line } from 'react-chartjs-2'

export const RunGraph = (props) => {

    function hundredths(type) { return Math.round(type * 100 ) / 100 }

    var labels = [], totals = []
    var trend = [], avg = []

    // function total(type) { return type.reduce((sum, x) => sum+x ) }
    // function hundredths(type) { return Math.round(type * 100 ) / 100 }

    if (props.filtered_data.length > 0) {

      props.filtered_data.forEach((x, i) => {
        labels.push(i+1)
        totals.push(x.total)
      })

      // trend line
      let sum_totals = 0
      let x_squared = 0
      let slope = 0

      let length = totals.length

      let x_axis = totals.map((x,i) => {
          sum_totals = Math.round(totals.reduce((sum, x) => sum + x) * 100) / 100
          return i+1
      })

      let sum_x_axis = x_axis.reduce((sum, x) => sum + x)

      // work off those prior numbers to set up the trend equation
      let linear = totals.map((x, i) => {
        x_squared += (i+1)**2
        return x * (i+1)
      }).reduce((sum, x) => sum + x)

      linear = Math.round(linear * 100) / 100
      avg = new Array(length).fill(Math.round(sum_totals / length * 100) / 100)

      // get slope and intercept for line start point and angle, then create the trend line
      slope = 1.0 * ((length * linear) - (sum_x_axis * sum_totals)) / ((length * x_squared) - (sum_x_axis ** 2))
      let intercept = 1.0 * (sum_totals - (slope * sum_x_axis)) / length
      trend = x_axis.map(x => hundredths((slope * x) + intercept ))

    }


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
          }],
          yAxes: [{
            ticks: {
              beginAtZero: 0,
            }
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
        },
        {
          label: 'Trends',
          type: 'line',
          fill: '+1',
          lineTension: 0,
          backgroundColor: 'rgba(0,0,0,.1)',
          borderColor: 'rgba(0,0,0,.3)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(180,180,180,.3)',
          pointBackgroundColor: '#aaa',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,0,0,.3)',
          pointHoverBorderColor: 'rgba(0,0,0,.3)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: trend
        },
        {
          label: 'Avg Score',
          type: 'line',
          fill: false,
          lineTension: 0,
          backgroundColor: 'rgba(180,180,180,.1)',
          borderColor: 'rgba(180,180,180,.3)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(200,200,200,.3)',
          pointBackgroundColor: '#aaa',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(180,180,180,.3)',
          pointHoverBorderColor: 'rgba(180,180,180,.3)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: avg
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
