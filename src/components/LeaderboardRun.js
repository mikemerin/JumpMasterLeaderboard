import React, { Component } from 'react';
import { Popup, Table, Transition } from 'semantic-ui-react'
import '../Leaderboard.css'

const jump_names = [ ["gate", "diagonal", "fjump", "sgate", "platform" ],
                     ["cascade", "tbone", "mjump2", "shuriken", "hdiamond"],
                     ["mjump1", "diamond", "bubble", "vortex", "hourglass"],
                     ["plane", "corner", "valve", "ninejump", "ddiamond"] ]

const labels = [ ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump"],
                 ["Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond"],
                 ["M-Jump1", "Diamond", "Bubble", "Vortex", "Hourglass"],
                 ["Plane", "Corner", "Valve", "9-Jump", "Double Diamond"] ]

// reserved for if there are any issues that pop up with dev builds
// const online_labels = [
//   "https://imgur.com/PWgoigU.png", "https://imgur.com/cI8bck7.png", "https://imgur.com/jdBjRVm.png", "https://imgur.com/IyN1nEZ.png", "https://imgur.com/Qu7I2X6.png",
//   "https://imgur.com/51WM0mT.png", "https://imgur.com/PdoNmxJ.png", "https://imgur.com/SJifuQU.png", "https://imgur.com/zH6UlC0.png", "https://imgur.com/mCgztWU.png",
//   "https://imgur.com/HIbB6MA.png", "https://imgur.com/1zLdLEA.png", "https://imgur.com/LJpDc26.png", "https://imgur.com/DgVFwwv.png", "https://imgur.com/TnfQaZn.png",
//   "https://imgur.com/HYlYcJn.png", "https://imgur.com/PJE22bY.png", "https://imgur.com/OKrUoTh.png", "https://imgur.com/kyKnOBb.png", "https://imgur.com/uLBMke7.png"]


export default class LeaderboardRun extends Component {

  headers = (n) => {

    return jump_names[n].map((jump, i) => (
      <Table.HeaderCell key={jump_names[n][i]}>
        <Popup position='top center' trigger={
            <img src={require(`../images/${jump}.png`)} alt={jump_names[n][i]} width={40} />
        } content={labels[n][i]} />
      </Table.HeaderCell>
    ))
  }

  body = (n) => {

    const type = n === 0 ? [0,1] : [2,3]
    function hundredths(type) { return Math.round(type * 100 ) / 100 }

    var all_points_0 = [], all_jumps_0 = [], all_streaks_0 = []

    jump_names[type[0]].forEach(jump => {
      if (this.props.run !== undefined) {
        all_points_0.push(<Table.Cell key={jump} >{ hundredths(this.props.run[`${jump}_points`]) }</Table.Cell>)
        all_jumps_0.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_jumps`] }</Table.Cell>)
        all_streaks_0.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_streak`] }</Table.Cell>)
      }
    })

    var all_jumps_1 = [], all_streaks_1 = [], all_points_1 = []
    jump_names[type[1]].forEach(jump => {
      if (this.props.run !== undefined) {
        all_points_1.push(<Table.Cell key={jump} >{ hundredths(this.props.run[`${jump}_points`]) }</Table.Cell>)
        all_jumps_1.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_jumps`] }</Table.Cell>)
        all_streaks_1.push(<Table.Cell key={jump} >{ this.props.run[`${jump}_streak`] }</Table.Cell>)
      }
    })

    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell><h4>Points</h4></Table.Cell>
          { all_points_0 }
          <Table.Cell><h4>Points</h4></Table.Cell>
          { all_points_1 }
        </Table.Row>
        <Table.Row>
          <Table.Cell><h4>Jumps</h4></Table.Cell>
          { all_jumps_0 }
          <Table.Cell><h4>Jumps</h4></Table.Cell>
          { all_jumps_1 }
        </Table.Row>
        <Table.Row>
          <Table.Cell><h4>Streak</h4></Table.Cell>
          { all_streaks_0 }
          <Table.Cell><h4>Streak</h4></Table.Cell>
          { all_streaks_1 }
        </Table.Row>
      </Table.Body>
    )

  }

  render() {

    return (
      <Transition visible={ this.props.visible } animation='slide down' duration={1200}>
        <div className="Leaderboards-scroll">
          <Table celled color="blue" inverted striped fixed compact="very" size="small" textAlign="center" >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell><h4>Easy</h4></Table.HeaderCell>
                { this.headers(0) }
                <Table.HeaderCell><h4>Medium</h4></Table.HeaderCell>
                { this.headers(1) }
              </Table.Row>
            </Table.Header>

            { this.body(0) }


          </Table>
          <Table celled color="blue" inverted striped fixed compact="very" size="small" textAlign="center" >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell><h4>Hard</h4></Table.HeaderCell>
                { this.headers(2) }
                <Table.HeaderCell><h4>Hardest</h4></Table.HeaderCell>
                { this.headers(3) }
              </Table.Row>
            </Table.Header>

            { this.body(2) }

          </Table>
        </div>
      </Transition>

    )

  }

}
