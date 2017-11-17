import React from 'react';
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'

export const DifficultyGraphRun = (props) => {

    function total(type) { return type.reduce((sum, x) => sum+x ) }
    function hundredths(type) { return Math.round(type * 100 ) / 100 }

    const labels = ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump",
        "Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond",
        "M-Jump1", "Diamond", "Bubble", "Vortex", "Hourglass",
        "Plane", "Corner", "Valve", "9-Jump", "Double Diamond"]

    const labels_formatter = [ "Gate", "Diag", "F-Jump", "S. Gate", "Platform",
           "Cascade", "T-bone", "M-Jump 2", "Shuriken", "H. Dmnd",
           "M-Jump 1", "Diamond", "Bubble", "Vortex", "Hour",
           "Plane", "Corner", "Valve", "9-Jump", "D. Dmnd"]

    const jump_names = ["gate", "diagonal", "fjump", "sgate", "platform",
                        "cascade", "tbone", "mjump2", "shuriken", "hdiamond",
                        "mjump1", "diamond", "bubble", "vortex", "hourglass",
                        "plane", "corner", "valve", "ninejump", "ddiamond"]


    var run_points = [], user_pbs = [], wrs = []

    if (props.filtered_jumps[0].length > 0) {

      jump_names.forEach(jump => {
        if (props.run !== undefined) {
          run_points.push(props.run[`${jump}_points`])
        }
      })

      user_pbs = props.filtered_jumps.map(x => hundredths(Math.max(...x) ))
      wrs = props.all_jumps.map(x => hundredths(Math.max(...x) ))

    }

    const options = {
      tooltips: {
        mode: 'x-axis',
        position: 'nearest'
      },
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            display: false
          }
        }],
        yAxes: [{
          steps: 10,
          position: "right",
          ticks: {
            beginAtZero: true,
            fontSize: 10
          }
        }]
      },
      animation: {
        easing: "easeOutElastic",
        duration: 1500
      }
    }

    const easy = 'rgba(80,180,250,0.2)'
    const easya = 'rgba(110,225,255,0.6)'
    const medium = 'rgba(63,147,212,0.2)'
    const mediuma = 'rgba(76,195,255,0.6)'
    const hard = 'rgba(248,139,139,0.2)'
    const harda = 'rgba(255,190,190,0.6)'
    const hardest = 'rgba(226,83,83,0.2)'
    const hardesta = 'rgba(244,136,136,0.6)'

    const highs = [easy, easy, easy, easy, easy, medium, medium, medium, medium, medium, hard, hard, hard, hard, hard, hardest, hardest, hardest, hardest, hardest]
    const averages = [easya, easya, easya, easya, easya, mediuma, mediuma, mediuma, mediuma, mediuma, harda, harda, harda, harda, harda, hardesta, hardesta, hardesta, hardesta, hardesta]

    const data_jumps = {
      labels: labels,
      datasets: [
        {
          type: 'line',
          label: "This Run",
          fill: false,
          pointStyle: "rectRot",
          pointRadius: 4,
          backgroundColor: 'rgba(128,128,128,.2)',
          borderColor: 'rgba(128,128,128,.5)',
          showLine: false,
          hoverBackgroundColor: 'rgba(128,128,128,.2)',
          hoverBorderColor: 'rgba(128,128,128,.5)',
          data: run_points,
          datalabels: {
             display: false,
          }
        },
        {
          type: 'bar',
          label: "WR",
          fill: true,
          backgroundColor: highs,
          borderColor: 'rgba(100,100,100,.5)',
          borderWidth: 2,
          hoverBackgroundColor: highs,
          hoverBorderColor: 'rgba(100,100,100,.5)',
          data: wrs,
          datalabels: {
             display: true,
             rotation: -90,
             anchor: 'start',
             align: 'right',
             font: {
               size: 9
             },
             offset: -3,
             formatter: function(value, context) {
               return labels_formatter[context.dataIndex]
             }
          }
        },
        {
          type: 'bar',
          label: "User PB",
          fill: true,
          backgroundColor: averages,
          borderColor: 'rgba(100,100,100,.5)',
          borderWidth: 2,
          hoverBackgroundColor: averages,
          hoverBorderColor: 'rgba(100,100,100,.5)',
          data: user_pbs,
          datalabels: {
             display: false,
          }
        },
        // will add once variable stepping is a chartjs option
        // {
        //   type: 'line',
        //   label: "Points per jump/",
        //   fill: false,
        //   backgroundColor: averages,
        //   borderColor: 'rgba(100,100,100,.5)',
        //   borderWidth: 2,
        //   hoverBackgroundColor: averages,
        //   hoverBorderColor: 'rgba(100,100,100,.5)',
        //   data: difficulties
        // }
      ]
    }

    return (
      <Bar data={data_jumps} height={205} options={options} />
    );

}

export default DifficultyGraphRun
