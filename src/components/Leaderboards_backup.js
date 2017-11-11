import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'


export default class Leaderboards extends Component {

  constructor(props) {
    super(props)
    this.state = {
      column: null,
      data: [],
      direction: null,
    }
  }

  //

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.filtered_data })
  }

  render() {

    const filtered_data = this.state.data.sort((a, b) => a.total < b.total).map((x, i) => {

      const created_at = `${x.created_at.slice(0,10)} - ${x.created_at.slice(11,19)} UTC`

      return (
        <Table.Row key={place} >
          <Table.Cell> { x.place } </Table.Cell>
          <Table.Cell> { x.username } </Table.Cell>
        	<Table.Cell> { x.total } </Table.Cell>
        	<Table.Cell> { x.jumps } </Table.Cell>
        	<Table.Cell> { x.deaths } </Table.Cell>
        	<Table.Cell> { created_at } </Table.Cell>
        </Table.Row>
      )

    })

    return (
      <Table celled color="blue" inverted sortable striped compact="very" size="small" textAlign="center" >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Place</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Score</Table.HeaderCell>
            <Table.HeaderCell>Jumps</Table.HeaderCell>
            <Table.HeaderCell>Deaths</Table.HeaderCell>
            <Table.HeaderCell>Best Jump</Table.HeaderCell>
            <Table.HeaderCell>Run Time</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { filtered_data }
        </Table.Body>

      </Table>

    )

  }

}

// <Table.Footer>
//   <Table.Row>
//     <Table.HeaderCell colSpan='3'>
//       <Menu floated='right' pagination>
//         <Menu.Item as='a' icon>
//           <Icon name='left chevron' />
//         </Menu.Item>
//         <Menu.Item as='a'>1</Menu.Item>
//         <Menu.Item as='a'>2</Menu.Item>
//         <Menu.Item as='a'>3</Menu.Item>
//         <Menu.Item as='a'>4</Menu.Item>
//         <Menu.Item as='a' icon>
//           <Icon name='right chevron' />
//         </Menu.Item>
//       </Menu>
//     </Table.HeaderCell>
//   </Table.Row>
// </Table.Footer>






// working sorted leaderboard before try for vertical HeaderCell

import _ from 'lodash'
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'


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
    // sort data and add a place
    var sorted_data = nextProps.filtered_data.sort((a, b) => a.total < b.total).map((x, i) => {
	     x['place'] = i+1
       x['created_at_formatted'] = `${x.created_at.slice(0,10)} - ${x.created_at.slice(11,19)} UTC`
       return x
      })
    this.setState({ column: null, data: sorted_data, direction: null })
  }

  handleSort = clickedColumn => () => {

    const { column, data, direction } = this.state

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

    )

  }

}
