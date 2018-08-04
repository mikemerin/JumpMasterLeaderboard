import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import LeaderboardIndex from '../components/LeaderboardIndex'
import LeaderboardRun from '../components/LeaderboardRun'
import LeaderboardJumps from '../components/LeaderboardJumps'

export default class LeaderboardContainer extends Component {

  render() {

    const { all_data, jump_data, extra_jump_data, extra_jump_top_data, filtered_data, filtered_jumps, handleNameClick, handleRunClick, visible, run } = this.props

    return (

        <Switch>

          <Route exact path="/jumps" render={routerProps => {
            return <LeaderboardJumps jump_data={ jump_data } extra_jump_data={ extra_jump_data } extra_jump_top_data={ extra_jump_top_data }
                    handleRunClick={ handleRunClick } visible={ visible } />
          }} />

          <Route exact path="/run/:id" render={routerProps => {
            const id = routerProps.match.params.id
            const run = all_data.find(x => x.id === parseInt(id, 10))
            return <LeaderboardRun all_data={ all_data } filtered_data={ filtered_data } run={ run }
                    handleNameClick={ handleNameClick } filtered_jumps={ filtered_jumps} visible={ visible } />
          }} />

          <Route exact path="/username/:username" render={routerProps => {
            const username = routerProps.match.params.username
            return <LeaderboardIndex filtered_data={ filtered_data } username={ username } run={ run }
                           handleNameClick={ handleNameClick } handleRunClick={ handleRunClick } visible={ visible } />
          }} />

          <Route path="/" render={routerProps => {
            return <LeaderboardIndex filtered_data={ filtered_data } username={ this.props.username } run={ run }
                          handleNameClick={ handleNameClick } handleRunClick={ handleRunClick } visible={ visible } />
          }} />

        </Switch>

    )
  }
}
