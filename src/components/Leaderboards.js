import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


export default function Leaderboards(props) {

  console.log(props.scores)



  const scores = props.scores.map((x, i) => {

    const created_at = `${x.created_at.slice(0,10)} - ${x.created_at.slice(11,19)} UTC`

    return (
      <Table.Row key={i} >
        <Table.Cell> { x.username } </Table.Cell>
      	<Table.Cell> { x.total } pts</Table.Cell>
      	<Table.Cell> { x.jumps } </Table.Cell>
      	<Table.Cell> { x.deaths } </Table.Cell>
      	<Table.Cell> { x.longest_streak } </Table.Cell>
      	<Table.Cell> { x.bestjump_type } - { x.bestjump_points } pts</Table.Cell>
      	<Table.Cell> { created_at } </Table.Cell>
      </Table.Row>
    )
  })



  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Score</Table.HeaderCell>
          <Table.HeaderCell>Jumps</Table.HeaderCell>
          <Table.HeaderCell>Deaths</Table.HeaderCell>
          <Table.HeaderCell>Longest Streak</Table.HeaderCell>
          <Table.HeaderCell>Best Jump</Table.HeaderCell>
          <Table.HeaderCell>Run Time</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        { scores }
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
