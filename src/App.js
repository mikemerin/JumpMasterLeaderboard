import React, { Component } from 'react';
import './App.css';
// import PropTypes from 'prop-types';

import Leaderboards from './components/Leaderboards'
import { ScoreAdapter } from './adapters'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scores: [],
      type: "all",
      person: "all"
    }
  }

  componentWillMount() {
    console.log("mounting");
    ScoreAdapter.all().then(data => {
      this.setState({ scores: data })
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
        <Leaderboards scores={ this.state.scores } />
      </div>
    );
  }
}
