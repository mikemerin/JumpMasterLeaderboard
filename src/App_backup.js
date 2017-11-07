import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react'

import Data from './components/Data'
import DifficultyGraph from './components/DifficultyGraph'
import RunGraph from './components/RunGraph'
import Leaderboards from './components/Leaderboards'

import { ScoreAdapter } from './adapters'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scores: [],
      sums: { scores: 0, easy: 0, medium: 0, hard: 0, hardest: 0, jumps: 0, deaths: 0},
      jumps: { gate: [], diagonal: [], fjump: [], sgate: [], platform: [],
               cascade: [], tbone: [], mjump2: [], shuriken: [], hdiamond: [],
               mjump2: [], diamond: [], bubble: [], vortex: [], hourglass: [],
               plane: [], corner: [], valve: [], ninejump: [], ddiamond: [] },
      type: "all",
      person: "all"
    }
  }

  componentWillMount() {
    console.log("mounting");
    ScoreAdapter.all().then(data => {

      data = data.sort((a, b) => a.longest < b.longest)
      var scores = 0, easy = 0, medium = 0, hard = 0, hardest = 0, jumps = 0, deaths = 0

      data.forEach(x => {
        scores += x.total
        easy += x.easy
        medium += x.medium
        hard += x.hard
        hardest += x.hardest
        jumps += x.jumps
        deaths += x.deaths
      })

      var jumps = { gate: [], diagonal: [], fjump: [], sgate: [], platform: [],
          cascade: [], tbone: [], mjump2: [], shuriken: [], hdiamond: [],
          mjump1: [], diamond: [], bubble: [], vortex: [], hourglass: [],
          plane: [], corner: [], valve: [], ninejump: [], ddiamond: [] }

      data.forEach(x => {

        jumps["gate"].push(x.gate_points)
        jumps["diagonal"].push(x.diagonal_points)
        jumps["fjump"].push(x.fjump_points)
        jumps["sgate"].push(x.sgate_points)
        jumps["platform"].push(x.platform_points)

        jumps["cascade"].push(x.cascade_points)
        jumps["tbone"].push(x.tbone_points)
        jumps["mjump2"].push(x.mjump2_points)
        jumps["shuriken"].push(x.shuriken_points)
        jumps["hdiamond"].push(x.hdiamond_points)

        jumps["mjump1"].push(x.mjump1_points)
        jumps["diamond"].push(x.diamond_points)
        jumps["bubble"].push(x.bubble_points)
        jumps["vortex"].push(x.vortex_points)
        jumps["hourglass"].push(x.hourglass_points)

        jumps["plane"].push(x.plane_points)
        jumps["corner"].push(x.corner_points)
        jumps["valve"].push(x.valve_points)
        jumps["ninejump"].push(x.ninejump_points)
        jumps["ddiamond"].push(x.ddiamond_points)

      })

      debugger

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

      this.setState({ scores: data, sums: {scores: scores, easy: easy, medium: medium, hard: hard, hardest: hardest, jumps: jumps, deaths: deaths, sum_of_best: sum_of_best} })
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
        <Grid columns={3} celled='internally' textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <Data scores={ this.state.scores } sums={ this.state.sums }/>
            </Grid.Column>
            <Grid.Column>
              <DifficultyGraph scores={ this.state.scores } sums={ this.state.sums }/>
            </Grid.Column>
            <Grid.Column>
              <RunGraph scores={ this.state.scores } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Leaderboards scores={ this.state.scores } />
      </div>
    );
  }
}
