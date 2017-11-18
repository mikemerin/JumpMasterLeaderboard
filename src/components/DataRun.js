import React from 'react';
import { Statistic, Divider } from 'semantic-ui-react'
import '../index.css'

export const DataRun = (props) => {

  const jump_names = [ ["gate", "diagonal", "fjump", "sgate", "platform" ],
                       ["cascade", "tbone", "mjump2", "shuriken", "hdiamond"],
                       ["mjump1", "diamond", "bubble", "vortex", "hourglass"],
                       ["plane", "corner", "valve", "ninejump", "ddiamond"] ]


  const { all_data, filtered_data, all_jumps, filtered_jumps, run } = props

  var difficulty_jumps = [ null, null, null, null ], pbs = 0, wrs = 0

  function hundredths(type) { return type === undefined ? type : Math.round(type * 100 ) / 100 }
  function total(type) { return type.reduce((sum, x) => sum+x ) }
  function maximum(type) { return Math.max(...type) }

  if ( run.id !== undefined ) {

    // add up jumps for each difficulty
    for (let i = 0; i < 4; i++ )
    { difficulty_jumps[i] = total(jump_names[i].map(jump => run[`${jump}_jumps`])) }

    // count the total PBs/WRs for all jumps
    jump_names.reduce((a,b) => a.concat(b)).forEach((jump, i) => {
      if ( run[`${jump}_points`] >= maximum( filtered_jumps[i]) )
        { pbs++ }
      if ( run[`${jump}_points`] >= maximum( all_jumps[i]) )
        { wrs++ }
    })

    // debugger
    // [ props.local_place, props.global_place, props.jumps, props.total, props.deaths, props.easy, props.medium, props.hard, props.hardest ].forEach(x => {
    //
    // })

  }

  function high(type) {

    if ( run[type]  === maximum( filtered_data.map(x => x[type] )) ) {
      return run[type]  === maximum( all_data.map(x => x[type] )) ? 'outlineWR' : 'outlinePB'
    } else {
      return ''
    }

  }

return (

  <div>
    <Statistic.Group widths={4}>
      <Statistic size='mini'>
        <div className='outlinePB'>JUMP PBs</div>
        { pbs }
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Label>User Rank</Statistic.Label>
        { run.local_place }
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Label>Global Rank</Statistic.Label>
        { run.global_place }
      </Statistic>
      <Statistic size='mini'>
        <div className='outlineWR'>JUMP WRs</div>
        { wrs }
      </Statistic>
    </Statistic.Group>

    <Divider />
    <Statistic.Group widths={3}>

      <Statistic size='mini'>
        <Statistic.Label>Jumps</Statistic.Label>
        <div className={ high('jumps') }>{ run.jumps }</div>
      </Statistic>
      <Statistic size='mini'>
        <font size='4.5'><strong>
          <Statistic.Label>TOTAL POINTS</Statistic.Label>
          <div className={ high('total') }>{ hundredths(run.total) }</div>
        </strong></font>
      </Statistic>
      <Statistic size='mini'>
        <Statistic.Label>Deaths</Statistic.Label>
        <div className={ high('deaths') }>{ run.deaths }</div>
      </Statistic>

    </Statistic.Group>
    <Divider />
    <Statistic.Group widths={5}>

      <Statistic size='mini'>
        <div className={ high('easy') }>{ hundredths(run.easy) }</div>
        <Statistic.Label>Easy</Statistic.Label>
        { difficulty_jumps[0] }
      </Statistic>
      <Statistic size='mini'>
        <div className={ high('medium') }>{ hundredths(run.medium) }</div>
        <Statistic.Label>Medium</Statistic.Label>
        { difficulty_jumps[1] }
      </Statistic>
      <Statistic size='mini'>
        Points
        <Statistic.Label>   </Statistic.Label>
        Jumps
      </Statistic>
      <Statistic size='mini'>
        <div className={ high('hard') }>{ hundredths(run.hard) }</div>
        <Statistic.Label>Hard</Statistic.Label>
        { difficulty_jumps[2] }
      </Statistic>
      <Statistic size='mini'>
        <div className={ high('hardest') }>{ hundredths(run.hardest) }</div>
        <Statistic.Label>Hardest</Statistic.Label>
        { difficulty_jumps[3] }
      </Statistic>

    </Statistic.Group>
    </div>

  )
}


export default DataRun
