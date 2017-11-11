import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react'

import Leaderboards from './components/Leaderboards'
import NavbarContainer from './containers/NavbarContainer'
import DataContainer from './containers/DataContainer'

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
      username: "All Users"
    }
  }

  componentWillMount() {
    console.log("mounting");
    ScoreAdapter.all().then(data => {
      this.setState({ all_data: data })
    })
    var path = this.context.router.route.location.pathname
    if (!!path.match(/\username\/(\w+)/)) {
      this.setState({ username: path.match(/\username\/(\w+)/)[1] })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevState.username !== this.state.username )
      if ( this.state.username === "All Users" )
        { this.context.router.history.push('/') }
      else
        { this.context.router.history.push(`/username/${this.state.username}`) }
  }

  filterData() {
    return this.state.all_data.filter(x => (
      this.state.username === "All Users" ? x : x.username === this.state.username
    ))
  }

  filterJumps(filtered_data) {
    var jumps = [ [], [], [], [], [],
                  [], [], [], [], [],
                  [], [], [], [], [],
                  [], [], [], [], [] ]

    filtered_data.forEach(x => {

      jumps[0].push(x.gate_points);
      jumps[1].push(x.diagonal_points)
      jumps[2].push(x.fjump_points)
      jumps[3].push(x.sgate_points)
      jumps[4].push(x.platform_points)

      jumps[5].push(x.cascade_points)
      jumps[6].push(x.tbone_points)
      jumps[7].push(x.mjump2_points)
      jumps[8].push(x.shuriken_points)
      jumps[9].push(x.hdiamond_points)

      jumps[10].push(x.mjump1_points)
      jumps[11].push(x.diamond_points)
      jumps[12].push(x.bubble_points)
      jumps[13].push(x.vortex_points)
      jumps[14].push(x.hourglass_points)

      jumps[15].push(x.plane_points)
      jumps[16].push(x.corner_points)
      jumps[17].push(x.valve_points)
      jumps[18].push(x.ninejump_points)
      jumps[19].push(x.ddiamond_points)

    })

    return jumps
  }

  handleHome = (event) => {
    event.preventDefault()
    this.setState({ username: "All Users" })
  }

  handleNameChange = (event, result) => {
    event.preventDefault()
    this.setState({ username: result.value })
  }

  typeHandler = (event, result) => {
    event.preventDefault()
    this.setState({ type: result.value })
  }

  loading_screen = () => {

    if (this.state.all_data.length === 0) {
      return (
        <Dimmer active>
          <Loader size='large'>Loading All Runs</Loader>
        </Dimmer>
      )
    }
  }

  render() {

    const filtered_data = this.filterData()
    const filtered_jumps = this.filterJumps(filtered_data)

    // unique users, sorted alphabetically
    var user_hash = {}
    var user_list = this.state.all_data.map(x => x.username)
    user_list.forEach(x => { if (user_hash[x] === undefined) { user_hash[x] = 1 } } )
    user_list = Object.keys(user_hash).sort()

    return (
      <div>

          <NavbarContainer handleHome={ this.handleHome } username={ this.state.username } />
        { this.loading_screen() }
        <DataContainer all_data={ this.state.all_data } user_list={ user_list } filtered_jumps={ filtered_jumps } filtered_data={ filtered_data }
          handleNameChange={ this.handleNameChange } handleHome={ this.handleHome } username={ this.state.username } />
        <Switch>
          <Route exact path="/username/:username" render={routerProps => {
            const username = routerProps.match.params.username
            return <Leaderboards filtered_data={ filtered_data } username={ username } />
          }} />
          <Route path="/" render={routerProps => {
            return <Leaderboards filtered_data={ filtered_data } />
          }} />
        </Switch>
      </div>
    );
  }
}
