import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react'

import Data from './components/Data'
import DifficultyGraph from './components/DifficultyGraph'
// import JumpImages from './components/JumpImages'
import Navbar from './components/Navbar'
import RunGraph from './components/RunGraph'
import Leaderboards from './components/Leaderboards'

import { ScoreAdapter } from './adapters'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      all_data: [],
      each_jump: [],
      type: "all",
      person: "all"
    }
  }

  componentWillMount() {
    console.log("mounting");
    ScoreAdapter.all().then(data => {

      data = data.sort((a, b) => a.longest < b.longest)

      var each_jump = [ [], [], [], [], [],
                    [], [], [], [], [],
                    [], [], [], [], [],
                    [], [], [], [], [] ]

      data.forEach(x => {

        each_jump[0].push(x.gate_points)
        each_jump[1].push(x.diagonal_points)
        each_jump[2].push(x.fjump_points)
        each_jump[3].push(x.sgate_points)
        each_jump[4].push(x.platform_points)

        each_jump[5].push(x.cascade_points)
        each_jump[6].push(x.tbone_points)
        each_jump[7].push(x.mjump2_points)
        each_jump[8].push(x.shuriken_points)
        each_jump[9].push(x.hdiamond_points)

        each_jump[10].push(x.mjump1_points)
        each_jump[11].push(x.diamond_points)
        each_jump[12].push(x.bubble_points)
        each_jump[13].push(x.vortex_points)
        each_jump[14].push(x.hourglass_points)

        each_jump[15].push(x.plane_points)
        each_jump[16].push(x.corner_points)
        each_jump[17].push(x.valve_points)
        each_jump[18].push(x.ninejump_points)
        each_jump[19].push(x.ddiamond_points)

      })

      this.setState({ all_data: data, each_jump: each_jump })
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
        <Navbar />
        <Grid columns='equal' relaxed padded textAlign="center" verticalAlign="middle">
          <Grid.Row stretched >
            <Grid.Column>
              <DifficultyGraph each_jump={ this.state.each_jump } />
            </Grid.Column>
            <Grid.Column>
              <Data all_data={ this.state.all_data } each_jump={ this.state.each_jump }/>
            </Grid.Column>
            <Grid.Column>
              <RunGraph all_data={ this.state.all_data } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Leaderboards all_data={ this.state.all_data } />
      </div>
    );
  }
}
