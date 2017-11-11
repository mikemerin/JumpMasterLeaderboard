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
