import _ from 'lodash'
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import '../Leaderboard.css'

export default class LeaderboardRun extends Component {

  componentWillReceiveProps(nextProps) {
    // sort data by high score followed by lowest deaths, and add a place / custom created_at
    var { filtered_data, filtered_jumps, run } = nextProps

    // debugger
    // var sorted_data = nextProps.filtered_data.sort((a, b) => b.total - a.total || a.deaths - b.deaths ).map((x, i) => {
	  //    x['place'] = i+1
    //    x['created_at_formatted'] = `${x.created_at.slice(0,10)} - ${x.created_at.slice(11,19)} UTC`
    //    return x
    //   })
    // this.setState({ column: null, data: sorted_data, direction: null })
    // window.scrollTo(0, 0)
  }

  render() {

    const jumps = ["gate", "diagonal", "fjump", "sgate", "platform",
                   "cascade", "tbone", "mjump2", "shuriken", "hdiamond",
                   "mjump1", "diamond", "bubble", "vortex", "hourglass",
                   "plane", "corner", "valve", "ninejump", "ddiamond"]

    function headers(jumps) { return jumps.map(jump => <Table.HeaderCell><img src={ require(`../images/${jump}.png`) } width={45} /></Table.HeaderCell> ) }

    // definition

    return (
      <div className="Leaderboards-scroll">
        <Table celled color="blue" inverted striped fixed compact="very" size="small" textAlign="center" >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Data</Table.HeaderCell>
              { headers(jumps) }
            </Table.Row>
          </Table.Header>

          <Table.Body>

          </Table.Body>

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
