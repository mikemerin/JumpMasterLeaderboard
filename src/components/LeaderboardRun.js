import React, { Component } from 'react';
import { Popup, Table, Transition } from 'semantic-ui-react'
import '../Leaderboard.css'

const jump_names = ["gate", "diagonal", "fjump", "sgate", "platform",
                    "cascade", "tbone", "mjump2", "shuriken", "hdiamond",
                    "mjump1", "diamond", "bubble", "vortex", "hourglass",
                    "plane", "corner", "valve", "ninejump", "ddiamond"]

const labels = ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump",
                "Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond",
                "M-Jump1", "Diamond", "Bubble", "Vortex", "Hourglass",
                "Plane", "Corner", "Valve", "9-Jump", "Double Diamond"]

// reserved for if there are any issues that pop up with dev builds
// const online_labels = [
//   "https://imgur.com/PWgoigU.png", "https://imgur.com/cI8bck7.png", "https://imgur.com/jdBjRVm.png", "https://imgur.com/IyN1nEZ.png", "https://imgur.com/Qu7I2X6.png",
//   "https://imgur.com/51WM0mT.png", "https://imgur.com/PdoNmxJ.png", "https://imgur.com/SJifuQU.png", "https://imgur.com/zH6UlC0.png", "https://imgur.com/mCgztWU.png",
//   "https://imgur.com/HIbB6MA.png", "https://imgur.com/1zLdLEA.png", "https://imgur.com/LJpDc26.png", "https://imgur.com/DgVFwwv.png", "https://imgur.com/TnfQaZn.png",
//   "https://imgur.com/HYlYcJn.png", "https://imgur.com/PJE22bY.png", "https://imgur.com/OKrUoTh.png", "https://imgur.com/kyKnOBb.png", "https://imgur.com/uLBMke7.png"]


export default class LeaderboardRun extends Component {

  headers = () => {

    return jump_names.map((jump, i) => (
      <Table.HeaderCell key={jump_names[i]}>
        <Popup position='top center' trigger={
            <img src={require(`../images/${jump}.png`)} alt={jump_names[i]} width={40} />
        } content={labels[i]} />
      </Table.HeaderCell>
    ))
  }

  body = () => {

    function hundredths(type) { return Math.round(type * 100 ) / 100 }

    var all_jumps = [], all_streaks = [], all_points = []
    jump_names.forEach(jump => {
      if (this.props.run !== undefined) {
        all_jumps.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_jumps`] }</Table.Cell>)
        all_streaks.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_streak`] }</Table.Cell>)
        all_points.push(<Table.Cell key={jump} >{ hundredths(this.props.run[`${jump}_points`]) }</Table.Cell>)
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
      <Transition visible={ this.props.visible } animation='slide down' duration={1200}>
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
      </Transition>

    )

  }

}
