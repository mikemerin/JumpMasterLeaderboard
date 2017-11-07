import React from 'react';
import { Statistic, Divider } from 'semantic-ui-react'

export default function Data(props) {

  const { scores, easy, medium, hard, hardest, jumps, deaths, sum_of_best } = props.sums

  return (
    <div>
      <h4>All Run Stats</h4>
      <Divider />
      <Statistic.Group widths={3}>
        <Statistic size='mini'>
          <Statistic.Label>Total Points</Statistic.Label>
          {scores}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Jumps</Statistic.Label>
          {jumps}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Deaths</Statistic.Label>
          {deaths}
        </Statistic>
      </Statistic.Group>
      <Divider />
      <Statistic.Group widths={4}>
        <Statistic size='mini'>
          <Statistic.Label>Total Easy</Statistic.Label>
          {easy}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Medium</Statistic.Label>
          {medium}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Hard</Statistic.Label>
          {hard}
        </Statistic>
        <Statistic size='mini'>
          <Statistic.Label>Total Hardest</Statistic.Label>
          {hardest}
        </Statistic>
      </Statistic.Group>
      <Divider />
      <Statistic.Group widths={1}>
        <Statistic size='mini'>
          <Statistic.Label>Sum of Bests</Statistic.Label>
          {sum_of_best}
        </Statistic>
      </Statistic.Group>
    </div>
  )

}
