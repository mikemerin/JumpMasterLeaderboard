import React from 'react';
import { Bar } from 'react-chartjs-2'

export const RunGraph = (props) => {

    var labels = ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump",
        "Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond",
        "M-Jump1 ", "Diamond", "Bubble", "Vortex", "Hourglass",
        "Plane", "Corner", "Valve", "9-jump", "Double Diamond"]

    var each_jump = [], highest_jump = []

    if (props.each_jump.length > 0) {

      each_jump = props.each_jump.map(x => {
      	var runs = x.length
      	return Math.round(x.reduce((sum, x) => sum + x) * 100 / runs) / 100
      })

      highest_jump = props.each_jump.map(x => Math.max(...x) )
    }

    // <Radar data={data_jumps} height={200} />

    // const data_jumps = {
    //   labels: labels,
    //   options: {
    //     legend: {
    //       display: false
    //     }
    //   },
    //   scale: {
    //     gridLines: {
    //       color: [ "black", "red", "orange", "yellow", "green" ]
    //     },
    //     ticks: {
    //       display: false,
    //       maxTicksLimit: 2
    //     }
    //   },
    //   datasets: [
    //     {
    //       label: "Average Points",
    //       fill: true,
    //       backgroundColor: 'rgba(87,153,203,0.3)',
    //       borderColor: 'rgba(87,153,203,.6)',
    //       pointBackgroundColor:  'rgba(87,153,203,.6)',
    //       pointBorderColor: 'rgba(20,20,20,.2)',
    //       data: each_jump
    //     },
    //     {
    //       label: "Highest Score",
    //       fill: '-1',
    //       backgroundColor: 'rgba(14,110,184,0.4)',
    //       borderColor: 'rgba(14,110,184,1)',
    //       pointBackgroundColor:  'rgba(14,110,184,1)',
    //       pointBorderColor: 'rgba(20,20,20,.2)',
    //       data: highest_jump
    //     }
    //   ]
    // }

    const options = {
      tooltips: {
        mode: 'x-axis'
      },
      // legend: {
      //   display: false,
      // },
      scales: {
        xAxes: [{
          stacked: true,
          display: false
        }],
        yAxes: [{
          position: "right",
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    const data_jumps = {
      labels: labels,
      datasets: [
        {
          label: "Highest Score",
          fill: true,
          backgroundColor: 'rgba(87,153,203,0.3)',
          borderColor: 'rgba(87,153,203,.6)',
          borderWidth: 2,
          hoverBorderColor: 'rgba(87,153,203,1)',
          hoverBackgroundColor: '#fff',
          data: highest_jump
        },
        {
          label: "Average Points",
          fill: true,
          backgroundColor: 'rgba(14,110,184,0.4)',
          borderColor: 'rgba(14,110,184,1)',
          borderWidth: 2,
          hoverBackgroundColor:  'rgba(14,110,184,1)',
          hoverBorderColor: 'rgba(20,20,20,.2)',
          data: each_jump
        }
      ]
    }

    return (
      <Bar data={data_jumps} height={183} options={options} />
    );

}

export default RunGraph
