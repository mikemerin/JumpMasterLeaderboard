import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react'

import Data from './components/Data'
import Graph from './components/Graph'
import Leaderboards from './components/Leaderboards'

import { ScoreAdapter } from './adapters'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scores: [],
      sums: { scores: 0, easy: 0, medium: 0, hard: 0, hardest: 0, runs: 0, jumps: 0, deaths: 0},
      type: "all",
      person: "all"
    }
  }

  componentWillMount() {
    console.log("mounting");
    ScoreAdapter.all().then(data => {

      data = data.sort((a, b) => a.longest < b.longest)
      var scores = 0, easy = 0, medium = 0, hard = 0, hardest = 0, runs = data.length, jumps = 0, deaths = 0

      data.forEach(x => {
        scores += x.total
        easy += x.easy
        medium += x.medium
        hard += x.hard
        hardest += x.hardest
        jumps += x.jumps
        deaths += x.deaths
      })

      var gate_points = 0, diagonal_points = 0, fjump_points = 0, sgate_points = 0, platform_points = 0,
          cascade_points = 0, tbone_points = 0, mjump2_points = 0, shuriken_points = 0, hdiamond_points = 0,
          mjump1_points = 0, diamond_points = 0, bubble_points = 0, vortex_points = 0, hourglass_points = 0,
          plane_points = 0, corner_points = 0, valve_points = 0, ninejump_points = 0, ddiamond_points = 0

      data.forEach(x => {
        if (x.gate_points > gate_points) { gate_points = x.gate_points }
        if (x.diagonal_points > diagonal_points) { diagonal_points = x.diagonal_points }
        if (x.fjump_points > fjump_points) { fjump_points = x.fjump_points }
        if (x.sgate_points > sgate_points) { sgate_points = x.sgate_points }
        if (x.platform_points > platform_points) { platform_points = x.platform_points }

        if (x.cascade_points > cascade_points) { cascade_points = x.cascade_points }
        if (x.tbone_points > tbone_points) { tbone_points = x.tbone_points }
        if (x.mjump2_points > mjump2_points) { mjump2_points = x.mjump2_points }
        if (x.shuriken_points > shuriken_points) { shuriken_points = x.shuriken_points }
        if (x.hdiamond_points > hdiamond_points) { hdiamond_points = x.hdiamond_points }

        if (x.mjump1_points > mjump1_points) { mjump1_points = x.mjump1_points }
        if (x.diamond_points > diamond_points) { diamond_points = x.diamond_points }
        if (x.bubble_points > bubble_points) { bubble_points = x.bubble_points }
        if (x.vortex_points > vortex_points) { vortex_points = x.vortex_points }
        if (x.hourglass_points > hourglass_points) { hourglass_points = x.hourglass_points }

        if (x.plane_points > plane_points) { plane_points = x.plane_points }
        if (x.corner_points > corner_points) { corner_points = x.corner_points }
        if (x.valve_points > valve_points) { valve_points = x.valve_points }
        if (x.ninejump_points > ninejump_points) { ninejump_points = x.ninejump_points }
        if (x.ddiamond_points > ddiamond_points) { ddiamond_points = x.ddiamond_points }
      })

      var sum_of_best = gate_points + diagonal_points + fjump_points + sgate_points + platform_points +
          cascade_points + tbone_points + mjump2_points + shuriken_points + hdiamond_points +
          mjump1_points + diamond_points + bubble_points + vortex_points + hourglass_points +
          plane_points + corner_points + valve_points + ninejump_points + ddiamond_points

        scores = Math.round(scores)
        easy = Math.round(easy)
        medium = Math.round(medium)
        hard = Math.round(hard)
        hardest = Math.round(hardest)
        sum_of_best = Math.round(sum_of_best)

      this.setState({ scores: data, sums: {scores: scores, easy: easy, medium: medium, hard: hard, hardest: hardest, runs: runs, jumps: jumps, deaths: deaths, sum_of_best: sum_of_best} })
    })
    // const callsign = this.context.router.history.location.pathname.split('/')[2]
    // if (callsign !== undefined)
      // { this.setState({ station: { latitude: 0, longitude: 0 } }) }
  }

  // componentDidUpdate(prevProps, prevState) {
  // // look to see if the type changed
  // debugger
  //
  //   if (prevState.station !== this.state.station &&
  //       prevState.stationState === this.state.stationState &&
  //       prevState.stationState !== '')
  //     { this.context.router.history.push(`/station/${this.state.station.callsign}`) }
  //   // debugger
  //   // const callsign = this.context.router.history.location.pathname.split('/')[2]
  //   // if (callsign !== undefined && )
  //   //   { this.setState({ station: { latitude: 0, longitude: 0 } }) }
  // }

  // typeHandler = (event, result) => {
  //   event.preventDefault()
  //   // this.context.router.history.push('/')
  //   this.setState({ type: result.value })
  // }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">The IWBT Jump Master Leaderboards</h1>
          </header>
        </div>
        <Grid columns={2} celled='internally' textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <Data scores={ this.state.scores } sums={ this.state.sums }/>
            </Grid.Column>
            <Grid.Column>
              <Graph scores={ this.state.scores } sums={ this.state.sums }/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Leaderboards scores={ this.state.scores } />
      </div>
    );
  }
}
