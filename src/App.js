import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react'
import './App.css'

import { ScoreAdapter } from './adapters'

import NavbarContainer from './containers/NavbarContainer'
import DataContainer from './containers/DataContainer'
import LeaderboardContainer from './containers/LeaderboardContainer'



export default class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      extra_jump_data: [],
      extra_jump_top_data: [],
      jump_data: [],
      all_data: [],
      url: '',
      visible: false,
      username: "All Unique Users",
      run: {}
    }
  }

  componentWillMount() {
    console.log("mounting");
    window.onpopstate = e => window.history.go(1);
    ScoreAdapter.jumps().then(jump_data => {
      this.setState({ jump_data: jump_data})
    })

    ScoreAdapter.all().then(data => {
      data.forEach(x => {
        delete x.ipa;
        x.username = encodeURIComponent(x.username === "" ? "Anonymous" : x.username);
      })
      this.setState({ all_data: data })

      var path = this.context.router.route.location.pathname
      this.setState({ url: path })

      if (!!path.match(/^\/username\/(\w+)/)) {
        this.setState({ username: path.match(/^\/username\/(\w+)/)[1] })
      }

      if (!!path.match(/^\/run\/(\d+)/)) {
        // if (this.state.all_data.length > 0) {
          var id = parseInt(path.match(/^\/run\/(\d+)/)[1], 10)
          var run = this.state.all_data.find(x => x.id === id)
          if ( run !== undefined )
            { this.setState({ username: run.username, run: run }) }
          else {
              alert(`Sorry, this run was not found.\n\nReturning you to the main screen.`)
              this.context.router.history.push("/")
              this.context.router.history.push("/")
            }
      }

    })

    ScoreAdapter.extra_jumps().then(data => {
      data.forEach(x => {
        delete x.ipa;
        x.username = encodeURIComponent(x.username === "" ? "Anonymous" : x.username);
      })
      this.setState({ extra_jump_data: data })
    })

    ScoreAdapter.extra_jumps_top().then(data => {
      for (var key in data) {
      	data[key].username = encodeURIComponent(data[key].username === "" ? "Anonymous" : data[key].username)
      }
      this.setState({ extra_jump_top_data: data })
    })


  }

  componentDidUpdate(prevProps, prevState) {
    // fade in once data is fetched
    if ( prevState.all_data !== this.state.all_data )
      { this.setState({ visible: true }) }

    if ( prevState.username !== this.state.username ) {
      if ( ["All Unique Users", "All Users", "All"].includes(this.state.username) )
        { this.context.router.history.push('/') }
      else if ( this.state.username !== "All Jumps" && this.state.run.id === undefined )
        { this.context.router.history.push(`/username/${this.state.username}`) }
    }

    if ( !["All Unique Users", "All Users", "All"].includes(this.state.username) && prevState.run.id !== undefined && this.state.run.id === undefined )
      { this.context.router.history.push(`/username/${this.state.username}`) }

  }

  addPlacesAndFormatCA(data) {
    var data_dup = data.slice(0,data.length)

    // sort by high score (low death tiebreker), add place and format, then resort by id
    return data_dup.sort((a, b) => b.total - a.total || a.deaths - b.deaths ).map((x, i) => {
       x['global_place'] = i+1
       x['created_at_formatted'] = `${x.created_at.slice(0,10)} - ${x.created_at.slice(11,19)}`
       return x
    }).sort((a, b) => a.id - b.id )
  }

  filterData() {

    // first filter by name (or all name),

    // then sort by high score (low death tiebreker), add local_place, then resort by id

    return this.state.all_data.filter(x => (
      // if all, filter everything, else filter by the username picked
      ["All Unique Users", "All Users"].includes(this.state.username) ? x : x.username === this.state.username
    )).sort((a, b) => b.total - a.total || a.deaths - b.deaths ).map((x,i) => {
       x['local_place'] = i+1
       return x
    }).sort((a, b) => a.id - b.id )
  }

  justJumps(data) {
    var jumps = [ [], [], [], [], [],
                  [], [], [], [], [],
                  [], [], [], [], [],
                  [], [], [], [], [] ]

    data.forEach(x => {

      jumps[0].push(x.gate_points)
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
    this.setState({ username: "All Unique Users", run: {} })
  }

  handleJumps = (event) => {
    this.setState({ username: "All Jumps", run: {} })
  }

  handleNameChange = (event, result) => {
    this.setState({ username: result.value })
  }

  handleNameClick = (event) => {
    const username = event.target.href.match(/username\/(\w+)/)[1]
    this.setState({ username: username, run: {} })
  }

  handleRunClick = (event) => {
    var id = parseInt(event.target.href.match(/run\/(\d+)/)[1], 10)
    var run = this.state.all_data.find(x => x.id === id)
    this.setState({ username: run.username, run: run })
  }

  loading_screen = () => {
    if (this.state.all_data.length === 0) {
      return (
        <Dimmer active page>
          <Loader size='large'>Fetching All Run Data</Loader>
        </Dimmer>
      )
    }
  }

  render() {

    const { all_data, jump_data, extra_jump_data, extra_jump_top_data, username, run, visible, url } = this.state

    this.addPlacesAndFormatCA(all_data)
    const filtered_data = this.filterData()
    const all_jumps = this.justJumps(all_data)
    const filtered_jumps = this.justJumps(filtered_data)

    // unique users, sorted alphabetically
    var user_hash = {}
    var user_list = all_data.map(x => x.username)
    user_list.forEach(x => { if (user_hash[x] === undefined) { user_hash[x] = 1 } } )
    user_list = Object.keys(user_hash).sort()

    return (
      <div>
        { this.loading_screen() }
        <div className="App-header">
          <NavbarContainer handleHome={ this.handleHome } handleJumps={ this.handleJumps } username={ username } run={ run } />
        </div>

        <div className="Data-fixed">
          <DataContainer all_data={ all_data } all_jumps={ all_jumps } filtered_jumps={ filtered_jumps } filtered_data={ filtered_data }
            handleNameChange={ this.handleNameChange } handleHome={ this.handleHome } handleNameClick={ this.handleNameClick }
            user_list={ user_list } username={ username } visible={ visible } run={ run } />
        </div>

        <LeaderboardContainer all_data={ all_data } jump_data={ jump_data } extra_jump_data={ extra_jump_data } extra_jump_top_data={ extra_jump_top_data }
            filtered_data={ filtered_data } filtered_jumps={ filtered_jumps } url={ url }
            username={ username } visible={ visible } handleNameClick={ this.handleNameClick } handleRunClick={ this.handleRunClick } />

      </div>
    );
  }
}
