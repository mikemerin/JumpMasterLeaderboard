import React from 'react';
import { Statistic, Divider, Popup } from 'semantic-ui-react'

export const DataRun = (props) => {

  const jump_names = [ ["gate", "diagonal", "fjump", "sgate", "platform" ],
                       ["cascade", "tbone", "mjump2", "shuriken", "hdiamond"],
                       ["mjump1", "diamond", "bubble", "vortex", "hourglass"],
                       ["plane", "corner", "valve", "ninejump", "ddiamond"] ]


  const { all_data, filtered_data, all_jumps, filtered_jumps, user_list, username, run } = props

  var scores = [], easy = [], medium = [], hard = [], hardest = []

  var runs = filtered_data.length, total_jumps = null, total_deaths = null, avg_runs = null
  var difficulty_jumps = [ null, null, null, null ], pbs = null, wrs = null

  function total(type) { return type.reduce((sum, x) => sum+x ) }
  function hundredths(type) { return Math.round(type * 100 ) / 100 }

  // filtered_data.forEach(x => {
  //   scores.push(x.total)
  //   easy.push(x.easy)
  //   medium.push(x.medium)
  //   hard.push(x.hard)
  //   hardest.push(x.hardest)
  //   total_jumps += x.jumps
  //   total_deaths += x.deaths
  // })

  if ( run.id !== undefined ) {

    // var total_easy = hundredths(total(easy))
    // var avg_easy = hundredths(total_easy / runs )
    //
    // var total_medium = hundredths(total(medium))
    // var avg_medium = hundredths(total_medium / runs )
    //
    // var total_hard = hundredths(total(hard))
    // var avg_hard = hundredths(total_hard / runs )
    //
    // var total_hardest = hundredths(total(hardest))
    // var avg_hardest = hundredths(total_hardest / runs )

    for (let i = 0; i < 4; i++ )
    { difficulty_jumps[i] = total(jump_names[i].map(jump => run[`${jump}_jumps`])) }

    jump_names.reduce((a,b) => a.concat(b)).forEach((jump, i) => {
      if ( run[`${jump}_points`] >= Math.max(...filtered_jumps[i]) )
        { pbs++ }
      if ( run[`${jump}_points`] >= Math.max(...all_jumps[i]) )
        { wrs++ }
    })

  }
  // else {
  //   alert("Sorry, no data was found on this run.")
  // }

  // if (all_data.length > 0 && all_data[0].username === "Sorry, no data was found")
  //   { runs = 0, avg_runs = 0 }

return (

  <div>
    <Statistic.Group widths={4}>
      <Statistic size='mini'>
        <Statistic.Label>PBs</Statistic.Label>
        { pbs }
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Label>User Rank</Statistic.Label>
        { run.local_place }
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Label>Global Rank</Statistic.Label>
        { run.global_place }
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Label>WRs</Statistic.Label>
        { wrs }
      </Statistic>
    </Statistic.Group>

    <Divider />
    <Statistic.Group widths={3}>

      <Statistic size='mini'>
        <Statistic.Label>Total Jumps</Statistic.Label>
        { run.jumps }
      </Statistic>
      <Statistic size='mini'>
        <font size='4.5'><strong>
          <Statistic.Label>TOTAL POINTS</Statistic.Label>
          { run.total }
        </strong></font>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Label>Total Deaths</Statistic.Label>
        { run.deaths }
      </Statistic>

    </Statistic.Group>
    <Divider />
    <Statistic.Group widths={5}>

      <Statistic size='mini'>
        { run.easy }
        <Statistic.Label>Easy</Statistic.Label>
        { difficulty_jumps[0] }
      </Statistic>
      <Statistic size='mini'>
        { run.medium }
        <Statistic.Label>Medium</Statistic.Label>
        { difficulty_jumps[1] }
      </Statistic>
      <Statistic size='mini'>
        Points
        <Statistic.Label>   </Statistic.Label>
        Jumps
      </Statistic>
      <Statistic size='mini'>
        { run.hard }
        <Statistic.Label>Hard</Statistic.Label>
        { difficulty_jumps[2] }
      </Statistic>
      <Statistic size='mini'>
        { run.hardest }
        <Statistic.Label>Hardest</Statistic.Label>
        { difficulty_jumps[3] }
      </Statistic>

    </Statistic.Group>
    </div>

  )
}


export default DataRun
