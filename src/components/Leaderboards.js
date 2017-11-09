import React from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react'


export default function Leaderboards(props) {

  const filtered_data = props.filtered_data.sort((a, b) => a.total < b.total).map((x, i) => {

    const created_at = `${x.created_at.slice(0,10)} - ${x.created_at.slice(11,19)} UTC`

    return (
      <Table.Row key={i} >
        <Table.Cell> { i+1 } </Table.Cell>
        <Table.Cell> { x.username } </Table.Cell>
      	<Table.Cell> { x.total } </Table.Cell>
      	<Table.Cell> { x.jumps } </Table.Cell>
      	<Table.Cell> { x.deaths } </Table.Cell>
      	<Table.Cell> { x.bestjump_type } - { x.bestjump_points } </Table.Cell>
      	<Table.Cell> { created_at } </Table.Cell>
      </Table.Row>
    )
  })

  return (
    <Table celled color="blue" inverted compact size="small">
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

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='left chevron' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='right chevron' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )

}
