import React from 'react';
import { Line } from 'react-chartjs-2'

export const RunGraphRun = (props) => {

    function hundredths(type) { return Math.round(type * 100 ) / 100 }
    function total(type) { return type.reduce((sum, x) => sum+x ) }
    function maximum(type) { return Math.max(...type) }

    const labels = [ "Average Points", "PB/WR", "Sum of Best" ]

    const this_run = [null, props.run.total, null]
    var user_info = [], world_info = []

    if ( props.run.id !== undefined ) {

      const user_totals = props.filtered_data.map(x => x.total)
      const world_totals = props.all_data.map(x => x.total)

      user_info.push(hundredths(total(user_totals) / props.filtered_data.length))
      user_info.push(maximum(user_totals))
      user_info.push(hundredths(total(props.filtered_jumps.map(x => maximum(x)))))

      world_info.push(hundredths(total(world_totals) / props.all_data.length))
      world_info.push(maximum(world_totals))
      world_info.push(hundredths(total(props.all_jumps.map(x => maximum(x)))))

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
      animation: {
        easing: "easeOutExpo",
        duration: 1500
      }
    }

    const data_runs = {
      labels: labels,
      datasets: [
        {
          label: 'This Run',
          type: 'line',
          fill: false,
          lineTension: 0,
          showLine: false,
          backgroundColor: 'rgba(0,0,0,.5)',
          borderColor: 'rgba(20,20,20,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(20,20,20,1)',
          pointBackgroundColor: '#aaa',
          pointBorderWidth: 2,
          pointHoverRadius: 13,
          pointHoverBackgroundColor: 'rgba(0,0,0,.5)',
          pointHoverBorderColor: 'rgba(20,20,20,1)',
          pointHoverBorderWidth: 2,
          pointStyle: "rectRounded",
          pointRadius: 18,
          pointHitRadius: 18,
          data: this_run
        },
        {
          label: 'User Info',
          type: 'line',
          fill: '+1',
          lineTension: 0,
          backgroundColor: 'rgba(14,110,184,0.4)',
          borderColor: 'rgba(14,110,184,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(14,110,184,1)',
          pointBackgroundColor: '#06A',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(14,110,184,1)',
          pointHoverBorderColor: 'rgba(14,110,184,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 6,
          data: user_info
        },
        {
          label: 'World Info',
          type: 'line',
          fill: false,
          lineTension: 0,
          backgroundColor: 'rgba(8,50,82,0.4)',
          borderColor: 'rgba(8,50,82,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(8,50,82,1)',
          pointBackgroundColor: '#06A',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(8,50,82,1)',
          pointHoverBorderColor: 'rgba(8,50,82,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 6,
          data: world_info
        }
      ]
    };

    return (
      <div>
        <Line data={data_runs} height={200} options={options} />
      </div>
    );

}

export default RunGraphRun
