import React from 'react';
import { Line } from 'react-chartjs-2'

export const RunGraphRun = (props) => {

    function hundredths(type) { return Math.round(type * 100 ) / 100 }
    function total(type) { return type.reduce((sum, x) => sum+x ) }
    function maximum(type) { return Math.max(...type) }

    const labels = [ "Average", "Record", "Sum of Best" ]

    // This RunGraphRun
    // world avg
    // WR
    // world SoB

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

    // if (props.filtered_data.length > 0) {



      // props.filtered_data.forEach((x, i) => {
      //   labels.push(i+1)
      //   totals.push(hundredths(x.total))
      // })

      // if (totals.length === 1) {
      //   totals.push(totals[0])
      //   trend.push(trend[0])
      //   avg.push(avg[0])
      // }

    // }


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
          pointHoverRadius: 10,
          pointHoverBackgroundColor: 'rgba(0,0,0,.5)',
          pointHoverBorderColor: 'rgba(20,20,20,1)',
          pointHoverBorderWidth: 2,
          pointStyle: "rectRounded",
          pointRadius: 15,
          pointHitRadius: 10,
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
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(14,110,184,1)',
          pointHoverBorderColor: 'rgba(14,110,184,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: user_info
        },
        {
          label: 'World Info',
          type: 'line',
          fill: false,
          lineTension: 0,
          backgroundColor: 'rgba(14,55,92,0.4)',
          borderColor: 'rgba(14,55,92,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(14,55,92,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(14,55,92,1)',
          pointHoverBorderColor: 'rgba(14,55,92,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
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
