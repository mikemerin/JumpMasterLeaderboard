import React, { Component } from 'react';
import { Grid, Divider, Transition, Button } from 'semantic-ui-react'
import { Route, Switch, Link } from 'react-router-dom'

import Data from '../components/Data'
import DifficultyGraph from '../components/DifficultyGraph'
import DifficultyGraphRun from '../components/DifficultyGraphRun'
import DifficultyGraphUser from '../components/DifficultyGraphUser'

import RunGraph from '../components/RunGraph'

import SearchPerson from '../components/SearchPerson'

export default class DataContainer extends Component {

  render() {

    const { all_data, all_jumps, user_list, filtered_data, filtered_jumps, handleNameChange, handleNameClick, handleHome, username, visible, run } = this.props

    return(
      <Switch>
        <Route exact path="/run/:id" render={routerProps => {
          return (
            <Grid columns='equal' relaxed textAlign="center" verticalAlign="middle" padded >
              <Grid.Row stretched>
                <Transition visible={ visible } animation='scale' duration={1500}>
                  <Grid.Column>

                    <DifficultyGraphRun all_jumps={ all_jumps } filtered_jumps={ filtered_jumps } run={ run } />

                  </Grid.Column>
                </Transition>
                <Transition visible={ visible } animation='horizontal flip' duration={2000}>
                  <Grid.Column>
                    <div>
                      <Button basic><Link to="/" onClick={ handleHome } >All Runs</Link></Button>
                      <Button basic><Link to={`/username/${username}`} onClick={ handleNameClick }> All Runs by {username} </Link></Button>
                    </div>
                    <Divider />

                    <Data all_data={ all_data } user_list={ user_list } filtered_data={ filtered_data } filtered_jumps={ filtered_jumps } username={ username } />

                  </Grid.Column>
                </Transition>
                <Transition visible={ visible } animation='scale' duration={1500}>
                  <Grid.Column>

                    <RunGraph filtered_data={ filtered_data } />

                  </Grid.Column>
                </Transition>
              </Grid.Row>
            </Grid>
          )
        }} />

        <Route path="/" render={routerProps => {
          return (
            <Grid columns='equal' relaxed textAlign="center" verticalAlign="middle" padded >
              <Grid.Row stretched>
                <Transition visible={ visible } animation='scale' duration={1500}>
                  <Grid.Column>
                    <Switch>
                      <Route exact path="/username/:username" render={routerProps => {
                        return (
                          <DifficultyGraphUser all_jumps={ all_jumps } filtered_jumps={ filtered_jumps } username={ username } />
                        )
                      }} />

                      <Route path="/" render={routerProps => {
                        return (
                          <DifficultyGraph all_jumps={ all_jumps } filtered_jumps={ filtered_jumps } username={ username } />
                        )
                      }} />
                    </Switch>
                  </Grid.Column>
                </Transition>
                <Transition visible={ visible } animation='horizontal flip' duration={2000}>
                  <Grid.Column>
                    <SearchPerson all_data={ all_data } user_list={ user_list } handleNameChange={ handleNameChange } username={ username } />
                    <Divider />
                    <Data all_data={ all_data } user_list={ user_list } filtered_data={ filtered_data } filtered_jumps={ filtered_jumps } username={ username } />
                  </Grid.Column>
                </Transition>
                <Transition visible={ visible } animation='scale' duration={1500}>
                  <Grid.Column>
                    <RunGraph filtered_data={ filtered_data } />
                  </Grid.Column>
                </Transition>
              </Grid.Row>
            </Grid>
          )
        }} />
      </Switch>
    )
  }


}
