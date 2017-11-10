import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Grid, Divider } from 'semantic-ui-react'

import Data from '../components/Data'
import DifficultyGraph from '../components/DifficultyGraph'
import RunGraph from '../components/RunGraph'

import SearchPerson from '../components/SearchPerson'


export default class DataContainer extends Component {

  render() {

    const { all_data, filtered_data, filtered_jumps, handleNameChange, handleHome, username } = this.props

    return(
      <Grid columns='equal' relaxed padded textAlign="center" verticalAlign="middle" >
        <Grid.Row stretched>
          <Grid.Column>
            <DifficultyGraph filtered_jumps={ filtered_jumps } />
          </Grid.Column>
          <Grid.Column>
            <SearchPerson all_data={ all_data } handleNameChange={ handleNameChange } handleHome={ handleHome } username={ username } />
            <Divider />
            <Data filtered_data={ filtered_data } filtered_jumps={ filtered_jumps } />
          </Grid.Column>
          <Grid.Column>
            <RunGraph filtered_data={ filtered_data } />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }


}
