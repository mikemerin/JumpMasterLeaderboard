import React from 'react';
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'

export const RunGraph = (props) => {

    var labels = ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump",
        "Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond",
        "M-Jump1", "Diamond", "Bubble", "Vortex", "Hourglass",
        "Plane", "Corner", "Valve", "9-Jump", "Double Diamond"]

    var each_jump = [], highest_jump = []

    if (props.each_jump.length > 0) {

      each_jump = props.each_jump.map(x => {
      	var runs = x.length
      	return Math.round(x.reduce((sum, x) => sum + x) * 100 / runs) / 100
      })

      highest_jump = props.each_jump.map(x => Math.max(...x) )
    }

    const options = {
      tooltips: {
        mode: 'x-axis',
        position: 'nearest'
      },
      legend: {
        display: false
      },
      plugins: {
         datalabels: {
            display: true,
            rotation: -90,
            anchor: 'start',
            align: 'right',
            font: {
              size: 8
            },
            offset: 0,
            formatter: function(value, context) {
              var label_hash = {"Gate" : "Gate", "Diagonal" : "Diag", "F-Jump" : "F-Jump", "Sideways Gate": "S. Gate", "Platform Jump" : "Platform",
                 "Cascade": "Cascade", "T-Bone" : "t-bone", "M-Jump 2" : "M-2", "Shuriken" : "Shuriken", "Half Diamond" : "H. Dmnd",
                 "M-Jump1" : "M-1", "Diamond" : "Diamond", "Bubble" : "Bubble", "Vortex" : "Vortex", "Hourglass" : "Hour",
                 "Plane" : "Plane", "Corner" : "Corner", "Valve" : "Valve", "9-Jump" : "9-Jump", "Double Diamond" : "D. Dmnd"}
              // var image = "n/a"
              // var image_src = label_hash[context.dataset._meta[0].data[context.dataIndex]._model.label]
              // image = require(`../images/${image_src}.png`)
              // console.log(<img src={image} />)
              // return <img src={image} />
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

    const easy = 'rgba(40,140,214,0.6)'
    const easya = 'rgba(70,190,255,0.6)'
    const medium = 'rgba(23,107,172,0.6)'
    const mediuma = 'rgba(36,160,245,0.6)'
    const hard = 'rgba(224,99,99,0.6)'
    const harda = 'rgba(255,160,160,0.6)'
    const hardest = 'rgba(186,33,33,0.6)'
    const hardesta = 'rgba(224,86,86,0.6)'

    const highs = [easy, easy, easy, easy, easy, medium, medium, medium, medium, medium, hard, hard, hard, hard, hard, hardest, hardest, hardest, hardest, hardest]
    const averages = [easya, easya, easya, easya, easya, mediuma, mediuma, mediuma, mediuma, mediuma, harda, harda, harda, harda, harda, hardesta, hardesta, hardesta, hardesta, hardesta]

    const data_jumps = {
      labels: labels,
      datasets: [
        {
          label: "Highest Score",
          fill: true,
          backgroundColor: highs,
          borderColor: 'rgba(100,100,100,.5)',
          borderWidth: 2,
          hoverBackgroundColor: highs,
          hoverBorderColor: 'rgba(100,100,100,.5)',
          data: highest_jump
        },
        {
          label: "Average Points",
          fill: true,
          backgroundColor: averages,
          borderColor: 'rgba(100,100,100,.5)',
          borderWidth: 2,
          hoverBackgroundColor: averages,
          hoverBorderColor: 'rgba(100,100,100,.5)',
          data: each_jump
        }
      ]
    }

    return (
      <Bar data={data_jumps} height={190} options={options} />
    );

}

export default RunGraph
