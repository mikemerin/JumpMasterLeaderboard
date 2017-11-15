import React, { Component } from 'react';
import { Grid, Divider, Transition } from 'semantic-ui-react'

import Data from '../components/Data'
import DifficultyGraph from '../components/DifficultyGraph'
import RunGraph from '../components/RunGraph'

import SearchPerson from '../components/SearchPerson'

export default class DataContainer extends Component {

  render() {

    const { all_data, user_list, filtered_data, filtered_jumps, handleNameChange, username, visible } = this.props

    return(
      <Grid columns='equal' relaxed textAlign="center" verticalAlign="middle" padded >
        <Grid.Row stretched>
          <Transition visible={ visible } animation='scale' duration={500}>
            <Grid.Column>
              <DifficultyGraph filtered_jumps={ filtered_jumps } />
            </Grid.Column>
          </Transition>
          <Transition visible={ visible } animation='horizontal flip' duration={1500}>
            <Grid.Column>
              <SearchPerson all_data={ all_data } user_list={ user_list } handleNameChange={ handleNameChange } username={ username } />
              <Divider />
              <Data all_data={ all_data } user_list={ user_list } filtered_data={ filtered_data } filtered_jumps={ filtered_jumps } username={ username } />
            </Grid.Column>
          </Transition>
          <Transition visible={ visible } animation='scale' duration={500}>
            <Grid.Column>
              <RunGraph filtered_data={ filtered_data } />
            </Grid.Column>
          </Transition>
        </Grid.Row>
      </Grid>
    )
  }


}
