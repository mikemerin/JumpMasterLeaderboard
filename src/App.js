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

      scores = Math.round(scores)
      easy = Math.round(easy)
      medium = Math.round(medium)
      hard = Math.round(hard)
      hardest = Math.round(hardest)

      this.setState({ scores: data, sums: {scores: scores, easy: easy, medium: medium, hard: hard, hardest: hardest, runs: runs, jumps: jumps, deaths: deaths} })
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
