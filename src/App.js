import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Grid, Divider } from 'semantic-ui-react'

import Data from './components/Data'
import DifficultyGraph from './components/DifficultyGraph'
import Navbar from './components/Navbar'
import RunGraph from './components/RunGraph'
import Leaderboards from './components/Leaderboards'
import SearchPerson from './components/SearchPerson'

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
    this.context.router.history.push('/')
  }

  handleNameChange = (event, result) => {
    event.preventDefault()
    this.setState({ username: result.value })
  }

  typeHandler = (event, result) => {
    event.preventDefault()
    this.setState({ type: result.value })
  }

  render() {

    const filtered_data = this.filterData()
    const filtered_jumps = this.filterJumps(filtered_data)

    // <Route path="/station/:callsign/:date" render={routerProps => {
    //               const { date, callsign } = routerProps.match.params
    //               const station = this.state.stations.find(x => x.callsign === callsign)
    //
    //               return (
    //                 <div>
    //                   <Grid.Row>
    //                     <DataContainer date={ date } station={ station }/>
    //                   </Grid.Row>
    //                 </div>
    //               )
    //             }} />.

    return (
      <div>
        <Navbar handleHome={ this.handleHome } />
        <Grid columns='equal' relaxed padded textAlign="center" verticalAlign="middle" >
          <Grid.Row stretched>
            <Grid.Column>
              <DifficultyGraph filtered_jumps={ filtered_jumps } />
            </Grid.Column>
            <Grid.Column>
              <SearchPerson all_data={ this.state.all_data } handleNameChange={ this.handleNameChange } handleHome={ this.handleHome } username={ this.state.username } />
              <Divider />
              <Data filtered_data={ filtered_data } filtered_jumps={ filtered_jumps } />
            </Grid.Column>
            <Grid.Column>
              <RunGraph filtered_data={ filtered_data } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Switch>
          <Route exact path="/" render={routerProps => {
            return <Leaderboards filtered_data={ filtered_data } />
          }} />
          <Route exact path="/username/:username" render={routerProps => {
            const username = routerProps.match.params.username
            return <Leaderboards filtered_data={ filtered_data } username={ username } />
          }} />
        </Switch>
      </div>
    );
  }
}
