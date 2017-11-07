import React from 'react';
import { Statistic, Divider } from 'semantic-ui-react'

export default function Data(props) {

  // debugger

  // const { all_data } = props

  var scores = [], easy = [], medium = [], hard = [], hardest = [], total_jumps = 0, total_deaths = 0, sum_of_best = 0

  props.all_data.forEach(x => {
    scores.push(x.total)
    easy.push(x.easy)
    medium.push(x.medium)
    hard.push(x.hard)
    hardest.push(x.hardest)
    total_jumps += x.jumps
    total_deaths += x.deaths
  })

  if ( props.all_data.length > 0 ) {

    // note: will add the following function to reduce repeating

    // this.total = (type) => type.reduce((sum, x) => sum+x )
    // this.hundredths = (type) => Math.round(type * 100 ) / 100
    // var runs = props.all_data.length
    //
    // var total_score = this.hundredths(this.total(scores))
    // var total_easy = this.hundredths(this.total(easy))
    // var total_medium = this.hundredths(this.total(medium))
    // var total_hard = this.hundredths(this.total(hard))
    // var total_hardest = this.hundredths(this.total(hardest))

    var runs = props.all_data.length

    var total_score = Math.round(scores.reduce((sum, x) => sum+x ) * 100 ) / 100
    var total_easy = Math.round(easy.reduce((sum, x) => sum+x ) * 100 ) / 100
    var total_medium = Math.round(medium.reduce((sum, x) => sum+x ) * 100 ) / 100
    var total_hard = Math.round(hard.reduce((sum, x) => sum+x ) * 100 ) / 100
    var total_hardest = Math.round(hardest.reduce((sum, x) => sum+x ) * 100 ) / 100

    var avg_easy = Math.round(total_easy * 100 / runs ) / 100
    var avg_medium = Math.round(total_medium * 100 / runs ) / 100
    var avg_hard = Math.round(total_hard * 100 / runs ) / 100
    var avg_hardest = Math.round(total_hardest * 100 / runs ) / 100


    var sum_of_best = Math.round( props.each_jump.map(x => Math.max(...x)).reduce((sum, x) => sum+x ) * 100 ) / 100

  }


  return (
    <div>
      <h4>All Run Stats</h4>
      <Divider />
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
      <Statistic.Group widths={4}>
        <Statistic size='mini'>
          <Statistic.Label>Total Easy</Statistic.Label>
          { total_easy }
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Medium</Statistic.Label>
          { total_medium }
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Hard</Statistic.Label>
          { total_hard }
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Hardest</Statistic.Label>
          { total_hardest }
        </Statistic>
      </Statistic.Group>
      <Divider />
      <Statistic.Group widths={4}>
        <Statistic size='mini'>
          <Statistic.Label>Avg. Easy</Statistic.Label>
          { avg_easy }
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Avg. Medium</Statistic.Label>
          { avg_medium }
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Avg. Hard</Statistic.Label>
          { avg_hard }
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Avg. Hardest</Statistic.Label>
          { avg_hardest }
        </Statistic>
      </Statistic.Group>
      <Divider />
      <Statistic.Group widths={1}>
        <Statistic size='mini'>
          <Statistic.Label>Sum of Bests from All Players</Statistic.Label>
          { sum_of_best }
        </Statistic>
      </Statistic.Group>
    </div>
  )

}
