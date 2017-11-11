import _ from 'lodash'
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import '../LeaderboardContainer.css'

export default class Leaderboards extends Component {

  constructor(props) {
    super(props)
    this.state = {
      column: null,
      data: [],
      direction: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    // sort data by high score followed by lowest deaths, and add a place / custom created_at
    var sorted_data = nextProps.filtered_data.sort((a, b) => b.total - a.total || a.deaths - b.deaths ).map((x, i) => {
	     x['place'] = i+1
       x['created_at_formatted'] = `${x.created_at.slice(0,10)} - ${x.created_at.slice(11,19)} UTC`
       return x
      })
    this.setState({ column: null, data: sorted_data, direction: null })
    window.scrollTo(0, 0)
  }

  handleSort = clickedColumn => () => {

    const { column, data, direction } = this.state
    console.log(this.state)

    if (column !== clickedColumn) {
      if (clickedColumn === "place" || clickedColumn === "username" ) {
        this.setState({
          column: clickedColumn,
          data: _.sortBy(data, [clickedColumn]),
          direction: 'ascending',
        })
      } else {
        this.setState({
          column: clickedColumn,
          data: _.sortBy(data, [clickedColumn]).reverse(),
          direction: 'ascending',
        })
      }

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })

  }

  render() {

    const { column, data, direction } = this.state

    return (
      <div className="Leaderboards-scroll">
        <Table celled color="blue" inverted sortable striped fixed compact="very" size="small" textAlign="center" >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column === 'place' ? direction : null} onClick={this.handleSort('place')}>Place</Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'username' ? direction : null} onClick={this.handleSort('username')}>Username</Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'total' ? direction : null} onClick={this.handleSort('total')}>Score</Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'jumps' ? direction : null} onClick={this.handleSort('jumps')}>Jumps</Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'deaths' ? direction : null} onClick={this.handleSort('deaths')}>Deaths</Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'created_at_formatted' ? direction : null} onClick={this.handleSort('created_at_formatted')}>Run Time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {_.map(data, ({ place, username, total, jumps, deaths, created_at_formatted }) => (
              <Table.Row key={place}>
                <Table.Cell>{place}</Table.Cell>
                <Table.Cell>{username}</Table.Cell>
                <Table.Cell>{total}</Table.Cell>
                <Table.Cell>{jumps}</Table.Cell>
                <Table.Cell>{deaths}</Table.Cell>
                <Table.Cell>{created_at_formatted}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

        </Table>
      </div>

    )

  }

}
