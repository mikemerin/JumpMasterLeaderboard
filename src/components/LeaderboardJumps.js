import React, { Component } from 'react';
import { Popup, Table, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../Leaderboard.css'
import '../index.css'


const jump_names = [ ["gate", "diagonal", "fjump", "sgate", "platform" ],
                     ["cascade", "tbone", "mjump2", "shuriken", "hdiamond"],
                     ["mjump1", "diamond", "bubble", "vortex", "hourglass"],
                     ["plane", "corner", "valve", "ninejump", "ddiamond"] ]

const labels = [ ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump"],
                 ["Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond"],
                 ["M-Jump 1", "Diamond", "Bubble", "Vortex", "Hourglass"],
                 ["Plane", "Corner", "Valve", "9-Jump", "Double Diamond"] ]

// reserved for if there are any issues that pop up with dev builds
// const online_labels = [
//   "https://imgur.com/PWgoigU.png", "https://imgur.com/cI8bck7.png", "https://imgur.com/jdBjRVm.png", "https://imgur.com/IyN1nEZ.png", "https://imgur.com/Qu7I2X6.png",
//   "https://imgur.com/51WM0mT.png", "https://imgur.com/PdoNmxJ.png", "https://imgur.com/SJifuQU.png", "https://imgur.com/zH6UlC0.png", "https://imgur.com/mCgztWU.png",
//   "https://imgur.com/HIbB6MA.png", "https://imgur.com/1zLdLEA.png", "https://imgur.com/LJpDc26.png", "https://imgur.com/DgVFwwv.png", "https://imgur.com/TnfQaZn.png",
//   "https://imgur.com/HYlYcJn.png", "https://imgur.com/PJE22bY.png", "https://imgur.com/OKrUoTh.png", "https://imgur.com/kyKnOBb.png", "https://imgur.com/uLBMke7.png"]


export default class LeaderboardJumps extends Component {

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
    // debugger
    const jd = this.props.jump_data;

    var all_points_0 = [], all_jumps_0 = [], all_streaks_0 = []
    var all_jumps_1 = [], all_streaks_1 = [], all_points_1 = []

    jump_names[type[0]].forEach(jump => {
      if (jd.gate_points) {
        if (jd[jump + "_points"]["id"]) {
          all_points_0.push(
            <Table.Cell selectable key={jump} verticalAlign='middle'>
              <Link to={ '/run/' + jd[jump + "_points"]["id"] } onClick={ this.props.handleRunClick } >
                <span className='outlinePB'>
                  { jd[`${jump}_points`]['number'] }
                </span> <br />
                  { jd[`${jump}_points`]['username'] }
              </Link>
            </Table.Cell>)
        } else {
          all_points_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ jd[`${jump}_points`]['number'] }</span> <br /> { jd[`${jump}_points`]['username'] }</Table.Cell>)
        }
        if (jd[jump + "_jumps"]["id"]) {
          all_jumps_0.push(
            <Table.Cell selectable key={jump} verticalAlign='middle'>
              <Link to={ '/run/' + jd[jump + "_jumps"]["id"] } onClick={ this.props.handleRunClick } >
                <span className='outlinePB'>
                  { jd[`${jump}_jumps`]['number'] }
                </span> <br />
                  { jd[`${jump}_jumps`]['username'] }
              </Link>
            </Table.Cell>)
        } else {
          all_jumps_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ jd[`${jump}_jumps`]['number'] }</span> <br /> { jd[`${jump}_jumps`]['username'] }</Table.Cell>)
        }
        if (jd[jump + "_streak"]["id"]) {
          all_streaks_0.push(
            <Table.Cell selectable key={jump} verticalAlign='middle'>
              <Link to={ '/run/' + jd[jump + "_streak"]["id"] } onClick={ this.props.handleRunClick } >
                <span className='outlinePB'>
                  { jd[`${jump}_streak`]['number'] }
                </span> <br />
                  { jd[`${jump}_streak`]['username'] }
              </Link>
            </Table.Cell>)
        } else {
          all_streaks_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ jd[`${jump}_streak`]['number'] }</span> <br /> { jd[`${jump}_streak`]['username'] }</Table.Cell>)
        }
      }
    })
    jump_names[type[1]].forEach(jump => {
      if (jd.gate_points) {
        if (jd[jump + "_points"]["id"]) {
          all_points_1.push(
            <Table.Cell selectable key={jump} verticalAlign='middle'>
              <Link to={ '/run/' + jd[jump + "_points"]["id"] } onClick={ this.props.handleRunClick } >
                <span className='outlinePB'>
                  { jd[`${jump}_points`]['number'] }
                </span> <br />
                  { jd[`${jump}_points`]['username'] }
              </Link>
            </Table.Cell>)
        } else {
          all_points_1.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ jd[`${jump}_points`]['number'] }</span> <br /> { jd[`${jump}_points`]['username'] }</Table.Cell>)
        }
        if (jd[jump + "_jumps"]["id"]) {
          all_jumps_1.push(
            <Table.Cell selectable key={jump} verticalAlign='middle'>
              <Link to={ '/run/' + jd[jump + "_jumps"]["id"] } onClick={ this.props.handleRunClick } >
                <span className='outlinePB'>
                  { jd[`${jump}_jumps`]['number'] }
                </span> <br />
                  { jd[`${jump}_jumps`]['username'] }
              </Link>
            </Table.Cell>)
        } else {
          all_jumps_1.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ jd[`${jump}_jumps`]['number'] }</span> <br /> { jd[`${jump}_jumps`]['username'] }</Table.Cell>)
        }
        if (jd[jump + "_streak"]["id"]) {
          all_streaks_1.push(
            <Table.Cell selectable key={jump} verticalAlign='middle'>
              <Link to={ '/run/' + jd[jump + "_streak"]["id"] } onClick={ this.props.handleRunClick } >
                <span className='outlinePB'>
                  { jd[`${jump}_streak`]['number'] }
                </span> <br />
                  { jd[`${jump}_streak`]['username'] }
              </Link>
            </Table.Cell>)
        } else {
          all_streaks_1.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ jd[`${jump}_streak`]['number'] }</span> <br /> { jd[`${jump}_streak`]['username'] }</Table.Cell>)
        }
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
