import React from 'react';
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'

export const DifficultyGraph = (props) => {

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

    var all_jump_avgs = [], filtered_jumps = [], highest_jump = []
    // var difficulties = []

    if (props.filtered_jumps[0].length > 0) {

      filtered_jumps = props.filtered_jumps.map(x => {
      	var runs = x.length
      	return hundredths(x.reduce((sum, x) => sum + x) / runs)
      })

      highest_jump = props.filtered_jumps.map(x => hundredths(Math.max(...x) ))
      all_jump_avgs = props.all_jumps.map(x => hundredths(total(x)/props.all_jumps[0].length))

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

    var data = [
      {
          order: 1,
          type: 'line',
          label: "Global Avg",
          fill: false,
          pointRadius: 2,
          backgroundColor: 'rgba(128,128,128,.2)',
          borderColor: 'rgba(128,128,128,.5)',
          showLine: false,
          hoverBackgroundColor: 'rgba(128,128,128,.2)',
          hoverBorderColor: 'rgba(128,128,128,.5)',
          data: all_jump_avgs,
          datalabels: {
             display: false,
          }
        },
      {
        order: 2,
        type: 'bar',
        label: "User PB",
        fill: true,
        backgroundColor: highs,
        borderColor: 'rgba(100,100,100,.5)',
        borderWidth: 2,
        hoverBackgroundColor: highs,
        hoverBorderColor: 'rgba(100,100,100,.5)',
        data: highest_jump,
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
        order: 3,
        type: 'bar',
        label: "User Avg",
        fill: true,
        backgroundColor: averages,
        borderColor: 'rgba(100,100,100,.5)',
        borderWidth: 2,
        hoverBackgroundColor: averages,
        hoverBorderColor: 'rgba(100,100,100,.5)',
        data: filtered_jumps,
        datalabels: {
           display: false,
        }
      }]

    const data_jumps = {
      labels: labels,
      datasets:
        data
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

    }

    return (
      <Bar data={data_jumps} height={205} options={options} />
    );

}

export default DifficultyGraph
