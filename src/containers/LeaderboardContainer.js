import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Transition } from 'semantic-ui-react'

import LeaderboardIndex from '../components/LeaderboardIndex'
import LeaderboardRun from '../components/LeaderboardRun'

export default class LeaderboardContainer extends Component {

  render() {

    const { all_data, filtered_data, filtered_jumps, handleNameClick, username, visible } = this.props

    return (

        <Switch>

          <Route exact path="/username/:username/run/:id" render={routerProps => {
            const id = routerProps.match.params.id
            const username = routerProps.match.params.username
            const run = all_data.find(x => x.id === parseInt(id, 10))
            return <LeaderboardRun all_data={ all_data } filtered_data={ filtered_data } username={ username } filtered_jumps={ filtered_jumps} run={ run } visible={ visible } />
          }} />

          <Route exact path="/username/:username" render={routerProps => {
            const username = routerProps.match.params.username
            return <LeaderboardIndex filtered_data={ filtered_data } username={ username } visible={ visible } />
          }} />

          <Route path="/" render={routerProps => {
            return <LeaderboardIndex filtered_data={ filtered_data } username={ "All Users" } handleNameClick={ this.handleNameClick } visible={ visible } />
          }} />
        </Switch>

    )
  }
}
