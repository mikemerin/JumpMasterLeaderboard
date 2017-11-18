import React from 'react';
import { Statistic, Divider, Popup } from 'semantic-ui-react'

export const DataRun = (props) => {

  const jump_names = [ ["gate", "diagonal", "fjump", "sgate", "platform" ],
                       ["cascade", "tbone", "mjump2", "shuriken", "hdiamond"],
                       ["mjump1", "diamond", "bubble", "vortex", "hourglass"],
                       ["plane", "corner", "valve", "ninejump", "ddiamond"] ]


  const { all_data, filtered_data, filtered_jumps, user_list, username, run } = props

  var scores = [], easy = [], medium = [], hard = [], hardest = []

  var runs = filtered_data.length, total_jumps = null, total_deaths = null, avg_runs = null
  var difficulty_jumps = [ null, null, null, null ]

  function total(type) { return type.reduce((sum, x) => sum+x ) }
  function hundredths(type) { return Math.round(type * 100 ) / 100 }

  filtered_data.forEach(x => {
    scores.push(x.total)
    easy.push(x.easy)
    medium.push(x.medium)
    hard.push(x.hard)
    hardest.push(x.hardest)
    total_jumps += x.jumps
    total_deaths += x.deaths
  })

  if ( run.id !== undefined ) {

    var total_points = hundredths(total(scores))
    if (username === "All Users") {
      avg_runs = Math.round(runs / user_list.length * 100 ) / 100
    } else {
      avg_runs = "N/A"
    }

    var avg_points = hundredths(total_points / runs )
    var avg_jumps = hundredths(total_jumps / runs )
    var avg_deaths = hundredths(total_deaths / runs )

    var sum_of_best = hundredths(total(filtered_jumps.map(x => Math.max(...x))))

    var total_easy = hundredths(total(easy))
    var avg_easy = hundredths(total_easy / runs )

    var total_medium = hundredths(total(medium))
    var avg_medium = hundredths(total_medium / runs )

    var total_hard = hundredths(total(hard))
    var avg_hard = hundredths(total_hard / runs )

    var total_hardest = hundredths(total(hardest))
    var avg_hardest = hundredths(total_hardest / runs )

    for (let i = 0; i < 4; i++ )
    { difficulty_jumps[i] = total(jump_names[i].map(jump => run[`${jump}_jumps`])) }

  }
  // else {
  //   alert("Sorry, no data was found on this run.")
  // }

  // if (all_data.length > 0 && all_data[0].username === "Sorry, no data was found")
  //   { runs = 0, avg_runs = 0 }

return (

  <div>
    <Statistic.Group widths={5}>
      <Statistic size='mini'>
        { total_jumps }
        <Statistic.Label>Jumps</Statistic.Label>
        { avg_jumps }
      </Statistic>
      <Statistic size='mini'>
        { total_deaths }
        <Statistic.Label>Deaths</Statistic.Label>
        { avg_deaths }
      </Statistic>
      <Statistic size='mini'>
        Total
        <Statistic.Label>   </Statistic.Label>
        Average
      </Statistic>
      <Statistic size='mini'>
        { total_points }
        <Statistic.Label>Points</Statistic.Label>
        { avg_points }
      </Statistic>
      <Statistic size='mini'>
        { runs }
        <Statistic.Label>Runs</Statistic.Label>
        <Popup position='bottom center' trigger={
            <div>{ avg_runs }</div>
        } content='average runs per user' />
      </Statistic>

    </Statistic.Group>

    <Divider />
    <Statistic.Group widths={3}>

      <Statistic size='mini'>
        <Statistic.Label>Total Jumps</Statistic.Label>
        { run.jumps }
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Label>Total Points</Statistic.Label>
        { run.total }
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
