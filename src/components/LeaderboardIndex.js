import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Table, Transition } from 'semantic-ui-react'
import '../Leaderboard.css'

export default class LeaderboardIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      unique_users: false,
      column: null,
      data: [],
      direction: null,
    }
  }

  componentWillReceiveProps(nextProps) {

    // sort data by high score (tiebreaker lowest deaths)
    var sorted_data = nextProps.filtered_data.sort((a, b) => b.total - a.total || a.deaths - b.deaths )

    if (this.props.username === 'All Users') {
      var unique_user_runs = [];

      sorted_data.forEach(x => {
        var unique_users = unique_user_runs.map(r => r.username);
        if (!unique_users.includes(x.username)) { unique_user_runs.push(x) }
      })

      this.setState({ column: null, data: unique_user_runs, direction: null })

    } else {
      this.setState({ column: null, data: sorted_data, direction: null })
    }

    window.scrollTo(0, 0)
  }

  handleSort = clickedColumn => () => {

    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      if (clickedColumn === "local_place" || clickedColumn === "username" ) {
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

  // toggle table for all runs vs. one user's

  globalHeader() {
    return (this.props.username === "All Users" ? "" : "Global " ) + "Rank"
  }

  localHeader(column, direction) {
    if (this.props.username !== "All Users") {
      return <Table.HeaderCell sorted={column === 'local_place' ? direction : null} onClick={this.handleSort('local_place')}>Local Rank</Table.HeaderCell>
    }
  }

  localCell(local_place, id, username) {
    if (this.props.username !== "All Users" ) {
      return <Table.Cell> {local_place} </Table.Cell>
    }
  }


  render() {

    const { column, data, direction } = this.state
    const { visible, handleNameClick, handleRunClick } = this.props
    function hundredths(type) { return Math.round(type * 100 ) / 100 }

    return (
      <Transition visible={ visible } animation='slide down' duration={1200}>
        <div className="Leaderboards-scroll">
          <Table celled color="blue" inverted sortable striped fixed compact="very" size="small" textAlign="center" >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> Run Info </Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'global_place' ? direction : null} onClick={this.handleSort('global_place')}>{ this.globalHeader() }</Table.HeaderCell>
                { this.localHeader(column, direction) }
                <Table.HeaderCell sorted={column === 'username' ? direction : null} onClick={this.handleSort('username')}>Username</Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'total' ? direction : null} onClick={this.handleSort('total')}>Score</Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'jumps' ? direction : null} onClick={this.handleSort('jumps')}>Jumps</Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'deaths' ? direction : null} onClick={this.handleSort('deaths')}>Deaths</Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'created_at_formatted' ? direction : null} onClick={this.handleSort('created_at_formatted')}>Run Time</Table.HeaderCell>
              </Table.Row>
            </Table.Header>


            <Table.Body>
              {_.map(data, ({ id, global_place, local_place, username, total, jumps, deaths, created_at_formatted }) => (
                <Table.Row key={global_place}>
                  <Table.Cell selectable><Link to={`/run/${id}`} onClick={ handleRunClick } > Link </Link></Table.Cell>
                  <Table.Cell> {global_place} </Table.Cell>
                  { this.localCell(local_place, id, username) }
                  <Table.Cell selectable><Link to={`/username/${username}`} onClick={ handleNameClick }> {username} </Link></Table.Cell>
                  <Table.Cell>{hundredths(total)}</Table.Cell>
                  <Table.Cell>{jumps}</Table.Cell>
                  <Table.Cell>{deaths}</Table.Cell>
                  <Table.Cell>{created_at_formatted}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

          </Table>
        </div>
      </Transition>
    )

  }

}
