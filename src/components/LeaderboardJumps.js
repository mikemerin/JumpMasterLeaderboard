import React, { Component } from 'react';
import { Popup, Table, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../Leaderboard.css'
import '../index.css'


const jump_names = [ ["gate", "diagonal", "fjump", "sgate", "platform" ],
                     ["cascade", "tbone", "mjump2", "shuriken", "hdiamond"],
                     ["mjump1", "diamond", "bubble", "vortex", "hourglass"],
                     ["plane", "corner", "valve", "ninejump", "ddiamond"],
                     ["16px", "rdiagonal", "cdiagonal", "rukito"],
                     ["tas", "uvalve", "dvalve", "fang"],
                     ["invert", "rcorner", "charlie", "superf"],
                     ["dplane", "jdiamond", "cddiamond", "45"],
                     ["boxcorner", "fspike", "bvalve", "tvalve", "dcascade", "secret5", "minif", "dinvert", "ljump", "dbvalve", "ldiamond"]
                   ];

const labels = [ ["Gate", "Diagonal", "F-Jump", "Sideways Gate", "Platform Jump"],
                 ["Cascade", "T-Bone", "M-Jump 2", "Shuriken", "Half Diamond"],
                 ["M-Jump 1", "Diamond", "Bubble", "Vortex", "Hourglass"],
                 ["Plane", "Corner", "Valve", "9-Jump", "Double Diamond"],
                 ["16px", "Reverse Diagonal", "Ceiling Diagonal", "Rukito"],
                 ["TAS", "Upward Valve", "Downward Valve", "Fang"],
                 ["Invert", "Reverse Corner", "Charlie", "Super-F"],
                 ["Downward Plane", "Jump Diamond", "Ceiling Double Diamond", "4.5 Jump"],
                 ["Box Corner", "F-Spike", "Bottom Valve", "Top Valve", "Downward Cascade", "?????", "Mini-F", "Double Invert", "Lehee Jump", "Double Valve", "Lehee Diamond"],
               ];



// reserved for if there are any issues that pop up with dev builds
// const online_labels = [
//   "https://imgur.com/PWgoigU.png", "https://imgur.com/cI8bck7.png", "https://imgur.com/jdBjRVm.png", "https://imgur.com/IyN1nEZ.png", "https://imgur.com/Qu7I2X6.png",
//   "https://imgur.com/51WM0mT.png", "https://imgur.com/PdoNmxJ.png", "https://imgur.com/SJifuQU.png", "https://imgur.com/zH6UlC0.png", "https://imgur.com/mCgztWU.png",
//   "https://imgur.com/HIbB6MA.png", "https://imgur.com/1zLdLEA.png", "https://imgur.com/LJpDc26.png", "https://imgur.com/DgVFwwv.png", "https://imgur.com/TnfQaZn.png",
//   "https://imgur.com/HYlYcJn.png", "https://imgur.com/PJE22bY.png", "https://imgur.com/OKrUoTh.png", "https://imgur.com/kyKnOBb.png", "https://imgur.com/uLBMke7.png"]


export default class LeaderboardJumps extends Component {

  constructor(props) {
    super(props)
    this.state = {
      extra_scores: [
        ["16px", "rdiagonal", "cdiagonal", "rukito"],
        ["tas", "uvalve", "dvalve", "fang"],
        ["invert", "rcorner", "charlie", "superf"],
        ["dplane", "jdiamond", "cddiamond", "45"],
        ["boxcorner", "fspike", "bvalve", "tvalve", "dcascade", "secret5", "minif", "dinvert", "ljump", "dbvalve", "ldiamond"]
      ]
    }
  }

  // const { jump_data, extra_jump_top_data } = props;

  // console.log(props)


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

    var type;

    switch(n) {
      case 0: type = [0,1]; break;
      case 1: type = [2,3]; break;
      case 2: type = [4,5]; break;
      case 3: type = [6,7]; break;
      case 4: type = [8]; break;
      default: type = '';
    }
    // const type = n === 0 ? [0,1] : [2,3]
    // debugger
    const jd = this.props.jump_data;
    const ejd = this.props.extra_jump_top_data;

    var all_points_0 = [], all_jumps_0 = [], all_streaks_0 = []
    var all_jumps_1 = [], all_streaks_1 = [], all_points_1 = []

    if (n < 2) {
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
    } else if (n < 4) {
      jump_names[type[0]].forEach(jump => {
        if (ejd['16px_jumps']) {
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_points"]["id"]) {
          //   all_points_0.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_points"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_points`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_points`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_points_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_points`]['number'] }</span> <br /> { ejd[`${jump}_points`]['username'] }</Table.Cell>)
          // }
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_jumps"]["id"]) {
          //   all_jumps_0.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_jumps"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_jumps`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_jumps`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_jumps_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_jumps`]['number'] }</span> <br /> { ejd[`${jump}_jumps`]['username'] }</Table.Cell>)
          // }
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_streak"]["id"]) {
          //   all_streaks_0.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_streak"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_streak`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_streak`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_streaks_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_streak`]['number'] }</span> <br /> { ejd[`${jump}_streak`]['username'] }</Table.Cell>)
          // }
        }
      })
      jump_names[type[1]].forEach(jump => {
        if (ejd['16px_jumps']) {
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_points"]["id"]) {
          //   all_points_1.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_points"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_points`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_points`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_points_1.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_points`]['number'] }</span> <br /> { ejd[`${jump}_points`]['username'].replace("%20", " ") }</Table.Cell>)
          // }
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_jumps"]["id"]) {
          //   all_jumps_1.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_jumps"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_jumps`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_jumps`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_jumps_1.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_jumps`]['number'] }</span> <br /> { ejd[`${jump}_jumps`]['username'].replace("%20", " ") }</Table.Cell>)
          // }
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_streak"]["id"]) {
          //   all_streaks_1.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_streak"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_streak`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_streak`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_streaks_1.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_streak`]['number'] }</span> <br /> { ejd[`${jump}_streak`]['username'].replace("%20", " ") }</Table.Cell>)
          // }
        }
      })
    } else if (n === 4) {
      jump_names[type[0]].forEach(jump => {
        if (jump === "secret5") { jump = "?????" }
        if (ejd['16px_jumps']) {
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_points"]["id"]) {
          //   all_points_0.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_points"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_points`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_points`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_points_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_points`]['number'] }</span> <br /> { ejd[`${jump}_points`]['username'].replace("%20", " ") }</Table.Cell>)
          // }
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_jumps"]["id"]) {
          //   all_jumps_0.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_jumps"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_jumps`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_jumps`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_jumps_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_jumps`]['number'] }</span> <br /> { ejd[`${jump}_jumps`]['username'].replace("%20", " ") }</Table.Cell>)
          // }
          // to do: will enble once individual jump info is added
          // if (ejd[jump + "_streak"]["id"]) {
          //   all_streaks_0.push(
          //     <Table.Cell selectable key={jump} verticalAlign='middle'>
          //       <Link to={ '/jumps/' + ejd[jump + "_streak"]["id"] } onClick={ this.props.handleRunClick } >
          //         <span className='outlinePB'>
          //           { ejd[`${jump}_streak`]['number'] }
          //         </span> <br />
          //           { ejd[`${jump}_streak`]['username'] }
          //       </Link>
          //     </Table.Cell>)
          // } else {
            all_streaks_0.push(<Table.Cell key={jump} verticalAlign='middle'><span className='outlinePB'>{ ejd[`${jump}_streak`]['number'] }</span> <br /> { ejd[`${jump}_streak`]['username'].replace("%20", " ") }</Table.Cell>)
          // }
        }
      })
    }


    if (n < 4) {
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
    } else {
      return (
        <Table.Body>
          <Table.Row>
            <Table.Cell><h4>Points</h4></Table.Cell>
            { all_points_0 }
          </Table.Row>
          <Table.Row>
            <Table.Cell><h4>Jumps</h4></Table.Cell>
            { all_jumps_0 }
          </Table.Row>
          <Table.Row>
            <Table.Cell><h4>Streak</h4></Table.Cell>
            { all_streaks_0 }
          </Table.Row>
        </Table.Body>
      )
    }
  }

  render() {

    return (
      <Transition visible={ this.props.visible } animation='slide down' duration={1200}>
        <div className="Leaderboards-scroll">
          <center><h4>Normal Run Jumps</h4></center>
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

            { this.body(1) }

          </Table>
          <center><h4>Easter Egg Extra Jumps</h4></center>
          <Table celled color="blue" inverted striped fixed compact="very" size="small" textAlign="center" >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell><h4>Extra Easy</h4></Table.HeaderCell>
                { this.headers(4) }
                <Table.HeaderCell><h4>Extra Medium</h4></Table.HeaderCell>
                { this.headers(5) }
              </Table.Row>
            </Table.Header>

            { this.body(2) }


          </Table>
          <Table celled color="blue" inverted striped fixed compact="very" size="small" textAlign="center" >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell><h4>Extra Hard</h4></Table.HeaderCell>
                { this.headers(6) }
                <Table.HeaderCell><h4>Extra Hardest</h4></Table.HeaderCell>
                { this.headers(7) }
              </Table.Row>
            </Table.Header>

            { this.body(3) }

          </Table>
          <Table celled color="blue" inverted striped fixed compact="very" size="small" textAlign="center" >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell><h4>Final</h4></Table.HeaderCell>
                { this.headers(8) }
              </Table.Row>
            </Table.Header>

            { this.body(4) }

          </Table>
        </div>
      </Transition>

    )

  }

}
