import React from 'react';
import { Statistic, Divider } from 'semantic-ui-react'

export default function Data(props) {

  // debugger

  // const { filtered_data } = props

  var scores = [], easy = [], medium = [], hard = [], hardest = [], total_jumps = 0, total_deaths = 0, sum_of_best = 0

  props.filtered_data.forEach(x => {
    scores.push(x.total)
    easy.push(x.easy)
    medium.push(x.medium)
    hard.push(x.hard)
    hardest.push(x.hardest)
    total_jumps += x.jumps
    total_deaths += x.deaths
  })

  if ( props.filtered_data.length > 0 ) {

    function total(type) { return type.reduce((sum, x) => sum+x ) }
    function hundredths(type) { return Math.round(type * 100 ) / 100 }
    var runs = props.filtered_data.length

    var total_score = hundredths(total(scores))
        sum_of_best = hundredths(total(props.filtered_jumps.map(x => Math.max(...x))))

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
      <Statistic.Group widths={3}>
        <Statistic size='mini'>
          <Statistic.Label>Total Points</Statistic.Label>
          { total_score }
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Jumps</Statistic.Label>
          { total_jumps }
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Deaths</Statistic.Label>
          { total_deaths }
        </Statistic>
      </Statistic.Group>
      <Divider />
      <Statistic.Group widths={1}>
        <Statistic size='mini'>
          <Statistic.Label>Sum of Bests</Statistic.Label>
          { sum_of_best }
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
