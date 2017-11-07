import React from 'react';
import { Statistic } from 'semantic-ui-react'

export default function Data(props) {

  const { scores, easy, medium, hard, hardest, jumps, deaths, sum_of_best } = props.sums

  return (
    <div>
      <Statistic.Group widths='five'>
        <Statistic size='mini'>
          <Statistic.Label>Total</Statistic.Label>
          {scores}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Easy</Statistic.Label>
          {easy}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Medium</Statistic.Label>
          {medium}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Hard</Statistic.Label>
          {hard}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Hardest</Statistic.Label>
          {hardest}
        </Statistic>
      </Statistic.Group>
      <Statistic.Group widths='three'>
        <Statistic size='mini'>
          <Statistic.Label>Jumps</Statistic.Label>
          {jumps}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Deaths</Statistic.Label>
          {deaths}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Sum of Bests</Statistic.Label>
          {sum_of_best}
        </Statistic>
      </Statistic.Group>
    </div>
  )

}
