import React from 'react';
import { Radar } from 'react-chartjs-2'

export const RunGraph = (props) => {

    var labels = ["gate", "diagonal", "fjump", "sgate", "platform",
        "cascade", "tbone", "mjump2", "shuriken", "hdiamond",
        "mjump1", "diamond", "bubble", "vortex", "hourglass",
        "plane", "corner", "valve", "ninejump", "ddiamond"]

    var each_jump = [], highest_jump = []

    if (props.each_jump.length > 0) {

      each_jump = props.each_jump.map(x => {
      	var runs = x.length
      	return Math.round(x.reduce((sum, x) => sum + x) * 100 / runs) / 100
      })

      highest_jump = props.each_jump.map(x => Math.max(...x) )
    }

    const data_jumps = {
      labels: labels,
      scale: {
        gridLines: {
          color: [ "black", "red", "orange", "yellow", "green" ]
        },
        ticks: {
          display: false,
          maxTicksLimit: 2
        }
      },
      datasets: [
        {
          label: "Average Points",
          fill: true,
          backgroundColor: 'rgba(14,110,184,0.4)',
          borderColor: 'rgba(14,110,184,1)',
          pointBackgroundColor:  'rgba(14,110,184,1)',
          data: each_jump
        },
        {
          label: "Highest Score",
          fill: true,
          backgroundColor: 'rgba(87,153,203,0.3)',
          borderColor: 'rgba(87,153,203,.6)',
          pointBackgroundColor:  'rgba(87,153,203,.6)',
          data: highest_jump
        }
      ]
    }

    return (
      <div>
        <Radar data={data_jumps} height={200} />
      </div>
    );

}

export default RunGraph
