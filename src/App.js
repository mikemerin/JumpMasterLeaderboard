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
import SearchPerson from './components/SearchPerson'

import PropTypes from 'prop-types';

import { ScoreAdapter } from './adapters'


export default class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      all_data: [],
      type: "all",
      username: "all users"
    }
  }

  componentWillMount() {
    console.log("mounting");
    ScoreAdapter.all().then(data => {

      data = data.sort((a, b) => a.total < b.total)

      this.setState({ all_data: data })

    // const callsign = this.context.router.history.location.pathname.split('/')[2]
    // if (callsign !== undefined)
      // { this.setState({ station: { latitude: 0, longitude: 0 } }) }
    })
  }

  componentDidUpdate(prevProps, prevState) {
  // look to see if the type changed
    if ( prevState.username !== this.state.username )
      { this.context.router.history.push(`/username/${this.state.username}`) }
    // debugger
    // const callsign = this.context.router.history.location.pathname.split('/')[2]
    // if (callsign !== undefined && )
    //   { this.setState({ station: { latitude: 0, longitude: 0 } }) }
  }

  filterData() {
    return this.state.all_data.filter(x => (
      this.state.username === "all users" ? x : x.username === this.state.username
    ))
  }

  filterJumps(filtered_data) {
    var each_jump = [ [], [], [], [], [],
                  [], [], [], [], [],
                  [], [], [], [], [],
                  [], [], [], [], [] ]

    filtered_data.forEach(x => {

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

    return each_jump
  }

  handleHome = (event) => {
    event.preventDefault()
    this.context.router.history.push('/')
  }

  handleNameChange = (event, result) => {
    event.preventDefault()
    this.setState({ username: result.value })
  }

  typeHandler = (event, result) => {
    event.preventDefault()
    // this.context.router.history.push('/')
    this.setState({ type: result.value })
  }

  render() {

    const filtered_data = this.filterData()
    const filtered_jumps = this.filterJumps(filtered_data)

    return (
      <div>
        <Navbar handleHome={ this.handleHome } />
        <Grid columns='equal' relaxed padded textAlign="center" verticalAlign="middle">
          <Grid.Row stretched >
            <Grid.Column>
              <DifficultyGraph filtered_jumps={ filtered_jumps } />
            </Grid.Column>
            <Grid.Column>
              <Data filtered_data={ filtered_data } filtered_jumps={ filtered_jumps } />
              <SearchPerson all_data={ this.state.all_data } handleNameChange={ this.handleNameChange } />
            </Grid.Column>
            <Grid.Column>
              <RunGraph filtered_data={ filtered_data } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Leaderboards filtered_data={ filtered_data } />
      </div>
    );
  }
}
