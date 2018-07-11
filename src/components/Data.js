import React from 'react';
import { Statistic, Divider, Popup } from 'semantic-ui-react'

export const Data = (props) => {

  const { filtered_data, filtered_jumps, user_list, username } = props

  var scores = [], easy_points = [], medium_points = [], hard_points = [], hardest_points = []

  var runs = filtered_data.length, total_jumps = null, total_deaths = null, avg_runs = null

  filtered_data.forEach(x => {
    scores.push(x.total)
    easy_points.push(x.easy_points)
    medium_points.push(x.medium_points)
    hard_points.push(x.hard_points)
    hardest_points.push(x.hardest_points)
    total_jumps += x.jumps
    total_deaths += x.deaths
  })

  if ( runs > 0 ) {

    function total(type) { return type.reduce((sum, x) => sum+x ) }
    function hundredths(type) { return Math.round(type * 100 ) / 100 }

    var total_points = hundredths(total(scores))
    if (["All Unique Users", "All Users"].includes(username)) {
      avg_runs = Math.round(runs / user_list.length * 100 ) / 100
    } else {
      avg_runs = "N/A"
    }

    var avg_points = hundredths(total_points / runs )
    var avg_jumps = hundredths(total_jumps / runs )
    var avg_deaths = hundredths(total_deaths / runs )

    var sum_of_best = hundredths(total(filtered_jumps.map(x => Math.max(...x))))

    var total_easy = hundredths(total(easy_points))
    var avg_easy = hundredths(total_easy / runs )

    var total_medium = hundredths(total(medium_points))
    var avg_medium = hundredths(total_medium / runs )

    var total_hard = hundredths(total(hard_points))
    var avg_hard = hundredths(total_hard / runs )

    var total_hardest = hundredths(total(hardest_points))
    var avg_hardest = hundredths(total_hardest / runs )

  } else { runs = null }

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
    <Statistic.Group widths={1}>

      <Statistic size='mini'>
        <Statistic.Label>Sum of Bests</Statistic.Label>
        <Popup position='bottom center' trigger={
            <div>{ sum_of_best }</div>
        } content='best jump from each run' />
      </Statistic>

    </Statistic.Group>
    <Divider />
    <Statistic.Group widths={5}>

      <Statistic size='mini'>
        { total_easy }
        <Statistic.Label>Easy</Statistic.Label>
        { avg_easy }
      </Statistic>
      <Statistic size='mini'>
        { total_medium }
        <Statistic.Label>Medium</Statistic.Label>
        { avg_medium }
      </Statistic>
      <Statistic size='mini'>
        Total
        <Statistic.Label>   </Statistic.Label>
        Average
      </Statistic>
      <Statistic size='mini'>
        { total_hard }
        <Statistic.Label>Hard</Statistic.Label>
        { avg_hard }
      </Statistic>
      <Statistic size='mini'>
        { total_hardest }
        <Statistic.Label>Hardest</Statistic.Label>
        { avg_hardest }
      </Statistic>

    </Statistic.Group>
    </div>

  )

}

export default Data
