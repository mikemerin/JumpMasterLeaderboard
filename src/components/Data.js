import React from 'react';
import { Statistic, Divider, Popup } from 'semantic-ui-react'

export default function Data(props) {

  const { filtered_data, user_list } = props

  var scores = [], easy = [], medium = [], hard = [], hardest = []

  var runs = filtered_data.length, total_jumps = 0, total_deaths = 0, avg_runs = 0

  filtered_data.forEach(x => {
    scores.push(x.total)
    easy.push(x.easy)
    medium.push(x.medium)
    hard.push(x.hard)
    hardest.push(x.hardest)
    total_jumps += x.jumps
    total_deaths += x.deaths
  })

  if ( runs > 0 ) {

    function total(type) { return type.reduce((sum, x) => sum+x ) }
    function hundredths(type) { return Math.round(type * 100 ) / 100 }

    var total_points = hundredths(total(scores))
    avg_runs = runs / user_list.length

    var avg_points = hundredths(total_points / runs )
    var avg_jumps = hundredths(total_jumps / runs )
    var avg_deaths = hundredths(total_deaths / runs )

    var sum_of_best = hundredths(total(props.filtered_jumps.map(x => Math.max(...x))))

    var total_easy = hundredths(total(easy))
    var avg_easy = hundredths(total_easy / runs )

    var total_medium = hundredths(total(medium))
    var avg_medium = hundredths(total_medium / runs )

    var total_hard = hundredths(total(hard))
    var avg_hard = hundredths(total_hard / runs )

    var total_hardest = hundredths(total(hardest))
    var avg_hardest = hundredths(total_hardest / runs )

  }

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
