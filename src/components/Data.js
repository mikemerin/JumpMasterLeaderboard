import React from 'react';
import { Statistic } from 'semantic-ui-react'

export default function Data(props) {

  const { scores, easy, medium, hard, hardest, runs, jumps, deaths, sum_of_best } = props.sums

  return (
    <div>
      <Statistic.Group widths='five'>
        <Statistic size='mini'>
          <Statistic.Label>Total</Statistic.Label>
          <Statistic.Value>{scores}</Statistic.Value>
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Easy</Statistic.Label>
          <Statistic.Value>{easy}</Statistic.Value>
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Medium</Statistic.Label>
          <Statistic.Value>{medium}</Statistic.Value>
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Hard</Statistic.Label>
          <Statistic.Value>{hard}</Statistic.Value>
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Hardest</Statistic.Label>
          <Statistic.Value>{hardest}</Statistic.Value>
        </Statistic>
      </Statistic.Group>
      <Statistic.Group widths='four'>
        <Statistic size='mini'>
          <Statistic.Label>Runs</Statistic.Label>
          <Statistic.Value>{runs}</Statistic.Value>
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Jumps</Statistic.Label>
          <Statistic.Value>{jumps}</Statistic.Value>
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Deaths</Statistic.Label>
          <Statistic.Value>{deaths}</Statistic.Value>
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Sum of Bests</Statistic.Label>
          <Statistic.Value>{sum_of_best}</Statistic.Value>
        </Statistic>
      </Statistic.Group>
    </div>
  )

}
