import React from 'react';
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'

export const RunGraph = (props) => {

    var labels = ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump",
        "Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond",
        "M-Jump1", "Diamond", "Bubble", "Vortex", "Hourglass",
        "Plane", "Corner", "Valve", "9-Jump", "Double Diamond"]

    var filtered_jumps = [], highest_jump = []
    // var difficulties = []

    if (props.filtered_jumps[0].length > 0) {

      filtered_jumps = props.filtered_jumps.map(x => {
      	var runs = x.length
      	return Math.round(x.reduce((sum, x) => sum + x) * 100 / runs) / 100
      })

      highest_jump = props.filtered_jumps.map(x => Math.max(...x) )

      // will add once variable stepping is a chartjs option

      // var avg_easy = Math.round(filtered_jumps.slice(0,5).reduce((sum, x) => sum + x) / 5 * 100) / 100
      // var avg_medium = Math.round(filtered_jumps.slice(5,10).reduce((sum, x) => sum + x) / 5 * 100) / 100
      // var avg_hard = Math.round(filtered_jumps.slice(10,15).reduce((sum, x) => sum + x) / 5 * 100) / 100
      // var avg_hardest = Math.round(filtered_jumps.slice(15,20).reduce((sum, x) => sum + x) / 5 * 100) / 100

      // difficulties = [avg_easy, avg_medium, avg_hard, avg_hardest]
    }

    const options = {
      tooltips: {
        mode: 'x-axis',
        position: 'nearest'
      },
      // legend: {
      //   display: false
      // },
      plugins: {
         datalabels: {
            display: true,
            rotation: -90,
            anchor: 'start',
            align: 'right',
            font: {
              size: 9
            },
            offset: 0,
            formatter: function(value, context) {
              var label_hash = {"Gate" : "Gate", "Diagonal" : "Diag", "F-Jump" : "F-Jump", "Sideways Gate": "S. Gate", "Platform Jump" : "Platform",
                 "Cascade": "Cascade", "T-Bone" : "T-bone", "M-Jump 2" : "M-Jump 2", "Shuriken" : "Shuriken", "Half Diamond" : "H. Dmnd",
                 "M-Jump1" : "M-Jump 1", "Diamond" : "Diamond", "Bubble" : "Bubble", "Vortex" : "Vortex", "Hourglass" : "Hour",
                 "Plane" : "Plane", "Corner" : "Corner", "Valve" : "Valve", "9-Jump" : "9-Jump", "Double Diamond" : "D. Dmnd"}

              return label_hash[context.dataset._meta[0].data[context.dataIndex]._model.label]
            }
         }
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
      }
    }

    const easy = 'rgba(80,180,250,0.6)'
    const easya = 'rgba(110,225,255,0.6)'
    const medium = 'rgba(63,147,212,0.6)'
    const mediuma = 'rgba(76,195,255,0.6)'
    const hard = 'rgba(248,139,139,0.6)'
    const harda = 'rgba(255,190,190,0.6)'
    const hardest = 'rgba(226,83,83,0.6)'
    const hardesta = 'rgba(244,136,136,0.6)'

    const highs = [easy, easy, easy, easy, easy, medium, medium, medium, medium, medium, hard, hard, hard, hard, hard, hardest, hardest, hardest, hardest, hardest]
    const averages = [easya, easya, easya, easya, easya, mediuma, mediuma, mediuma, mediuma, mediuma, harda, harda, harda, harda, harda, hardesta, hardesta, hardesta, hardesta, hardesta]

    const data_jumps = {
      labels: labels,
      datasets: [
        {
          type: 'bar',
          label: "High Score",
          fill: true,
          backgroundColor: highs,
          borderColor: 'rgba(100,100,100,.5)',
          borderWidth: 2,
          hoverBackgroundColor: highs,
          hoverBorderColor: 'rgba(100,100,100,.5)',
          data: highest_jump
        },
        {
          type: 'bar',
          label: "Avg Points",
          fill: true,
          backgroundColor: averages,
          borderColor: 'rgba(100,100,100,.5)',
          borderWidth: 2,
          hoverBackgroundColor: averages,
          hoverBorderColor: 'rgba(100,100,100,.5)',
          data: filtered_jumps
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

export default RunGraph
