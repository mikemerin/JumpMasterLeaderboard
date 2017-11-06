import React from 'react';
import { Bar } from 'react-chartjs-2'

export const Graph = (props) => {

    var labels = []
    var totals = []

    if (props.scores.length > 0) {

      props.scores.forEach((x, i) => {
        labels.push(i+1)
        totals.push(x.total)
      })
      // temp_height = Math.ceil(Math.max(pre5_tmax, pre4_tmax, pre3_tmax, pre2_tmax, pre1_tmax,
      //   parseInt(tmax, 10), post1_tmax, post2_tmax, post3_tmax, post4_tmax, post5_tmax) / 10) * 10

      // precip_height = Math.ceil(Math.max(pre5_precip_total, pre4_precip_total, pre3_precip_total, pre2_precip_total, pre1_precip_total,
      //   parseInt(precip_total, 10), post1_precip_total, post2_precip_total, post3_precip_total, post4_precip_total, post5_precip_total) / 10) * 10

    }

    const data_runs = {
      labels: labels,
      options: {
        scales: {
          xAxes: [{
            barThickness: 1
          }]
        }
      },
      datasets: [
        {
          label: 'Total',
          type: 'line',
          fill: true,
          lineTension: 0.1,
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
        // {
        //   label: 'Average Temps',
        //   type: 'line',
        //   fill: false,
        //   lineTension: 0.1,
        //   backgroundColor: 'rgba(255, 116, 0,0.4)',
        //   borderColor: 'rgba(255, 116, 0,0.4)',
        //   borderCapStyle: 'butt',
        //   borderDash: [],
        //   borderDashOffset: 0.0,
        //   borderJoinStyle: 'miter',
        //   pointBorderColor: 'rgba(255, 116, 0,1)',
        //   pointBackgroundColor: '#fff',
        //   pointBorderWidth: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBackgroundColor: 'rgba(255, 116, 0,1)',
        //   pointHoverBorderColor: 'rgba(255, 116, 0,1)',
        //   pointHoverBorderWidth: 2,
        //   pointRadius: 1,
        //   pointHitRadius: 10,
        //   data: [pre5_tavg, pre4_tavg, pre3_tavg, pre2_tavg, pre1_tavg, tavg, post1_tavg, post2_tavg, post3_tavg, post4_tavg, post5_tavg]
        // },
        // {
        //   label: 'Low Temps',
        //   type: 'line',
        //   fill: '-1',
        //   lineTension: 0.1,
        //   backgroundColor: 'rgba(169, 13, 255,0.4)',
        //   borderColor: 'rgba(169, 13, 255,1)',
        //   borderCapStyle: 'butt',
        //   borderDash: [],
        //   borderDashOffset: 0.0,
        //   borderJoinStyle: 'miter',
        //   pointBorderColor: 'rgba(169, 13, 255,1)',
        //   pointBackgroundColor: '#fff',
        //   pointBorderWidth: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBackgroundColor: 'rgba(169, 13, 255,1)',
        //   pointHoverBorderColor: 'rgba(169, 13, 255,1)',
        //   pointHoverBorderWidth: 2,
        //   pointRadius: 1,
        //   pointHitRadius: 10,
        //   data: [pre5_tmin, pre4_tmin, pre3_tmin, pre2_tmin, pre1_tmin, tmin, post1_tmin, post2_tmin, post3_tmin, post4_tmin, post5_tmin]
        // }
      ]
    };

    return (
      <div>
        <Bar data={data_runs} height={100} />
      </div>
    );

}

export default Graph
