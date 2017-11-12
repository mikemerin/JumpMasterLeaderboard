import React, { Component } from 'react';
import { Popup, Table } from 'semantic-ui-react'
import '../Leaderboard.css'

const jump_names = ["gate", "diagonal", "fjump", "sgate", "platform",
                    "cascade", "tbone", "mjump2", "shuriken", "hdiamond",
                    "mjump1", "diamond", "bubble", "vortex", "hourglass",
                    "plane", "corner", "valve", "ninejump", "ddiamond"]

const labels = ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump",
                "Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond",
                "M-Jump1", "Diamond", "Bubble", "Vortex", "Hourglass",
                "Plane", "Corner", "Valve", "9-Jump", "Double Diamond"]

export default class LeaderboardRun extends Component {

  componentWillReceiveProps(nextProps) {
    // sort data by high score followed by lowest deaths, and add a place / custom created_at
    // var { filtered_data, filtered_jumps, run } = nextProps
    // this.setState({ filtered_data: filtered_data, run: run })
  }

  headers = () => {
    return jump_names.map((jump, i) => (
      <Table.HeaderCell key={jump}>
        <Popup position='top center' trigger={
            <img src={ require(`../images/${jump}.png`) } alt={jump} width={40} />
        } content={labels[i]} />
      </Table.HeaderCell>
    ))
  }

  body = () => {
    var all_jumps = [], all_streaks = [], all_points = []
    jump_names.forEach(jump => {
      // console.log(eval(`this.props.run.${jump}_jumps`))
      // eval(`this.props.run.${jump}_jumps`)
      if (this.props.run !== undefined) {
        all_jumps.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_jumps`] }</Table.Cell>)
        all_streaks.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_streak`] }</Table.Cell>)
        all_points.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_points`] }</Table.Cell>)
      }
    })

    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>Jumps</Table.Cell>
          { all_jumps }
        </Table.Row>
        <Table.Row>
          <Table.Cell>Streak</Table.Cell>
          { all_streaks }
        </Table.Row>
        <Table.Row>
          <Table.Cell>Points</Table.Cell>
          { all_points }
        </Table.Row>
      </Table.Body>
    )

  }


  render() {

    // definition

    return (
      <div className="Leaderboards-scroll">
        <Table celled color="blue" inverted striped fixed compact="very" size="small" textAlign="center" >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Data</Table.HeaderCell>
              { this.headers() }
            </Table.Row>
          </Table.Header>

          { this.body() }

        </Table>
      </div>

    )

  }

}

// <Table.Header>
//   <Table.Row>
//     <Table.HeaderCell>Data</Table.HeaderCell>
//     <Table.HeaderCell>Gate</Table.HeaderCell>
//     <Table.HeaderCell>Diagonal</Table.HeaderCell>
//     <Table.HeaderCell>F-Jump</Table.HeaderCell>
//     <Table.HeaderCell>S. Gate</Table.HeaderCell>
//     <Table.HeaderCell>Platform</Table.HeaderCell>
//     <Table.HeaderCell>Cascade</Table.HeaderCell>
//     <Table.HeaderCell>T-Bone</Table.HeaderCell>
//     <Table.HeaderCell>M-Jump 2</Table.HeaderCell>
//     <Table.HeaderCell>Shuriken</Table.HeaderCell>
//     <Table.HeaderCell>H. Diamond</Table.HeaderCell>
//     <Table.HeaderCell>M-Jump 1</Table.HeaderCell>
//     <Table.HeaderCell>Diamond</Table.HeaderCell>
//     <Table.HeaderCell>Bubble</Table.HeaderCell>
//     <Table.HeaderCell>Vortex</Table.HeaderCell>
//     <Table.HeaderCell>Hourglass</Table.HeaderCell>
//     <Table.HeaderCell>Plane</Table.HeaderCell>
//     <Table.HeaderCell>Corner</Table.HeaderCell>
//     <Table.HeaderCell>Valve</Table.HeaderCell>
//     <Table.HeaderCell>9-Jump</Table.HeaderCell>
//     <Table.HeaderCell>D. Diamond</Table.HeaderCell>
//   </Table.Row>
// </Table.Header>

// <Table.Row key={place}>
//   <Table.Cell>{place}</Table.Cell>
//   <Table.Cell>{username}</Table.Cell>
//   <Table.Cell>{total}</Table.Cell>
//   <Table.Cell>{jumps}</Table.Cell>
//   <Table.Cell>{deaths}</Table.Cell>
//   <Table.Cell>{created_at_formatted}</Table.Cell>
// </Table.Row>
