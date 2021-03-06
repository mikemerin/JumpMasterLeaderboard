import React from 'react';
import { Statistic, Divider } from 'semantic-ui-react'
import '../index.css'

export const DataRun = (props) => {

  const jump_names = [ ["gate", "diagonal", "fjump", "sgate", "platform" ],
                       ["cascade", "tbone", "mjump2", "shuriken", "hdiamond"],
                       ["mjump1", "diamond", "bubble", "vortex", "hourglass"],
                       ["plane", "corner", "valve", "ninejump", "ddiamond"] ]


  const { all_data, filtered_data, all_jumps, filtered_jumps, run } = props

  var pbs = 0, wrs = 0

  function hundredths(type) { return type === undefined ? type : Math.round(type * 100 ) / 100 }
  // function total(type) { return type.reduce((sum, x) => sum+x ) }
  function maximum(type) { return Math.max(...type) }

  if ( run.id !== undefined ) {

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
        <div className='outlinePB'>JUMP Pt PBs</div>
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
        <div className='outlineWR'>JUMP Pt WRs</div>
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
        <div className={ high('easy_points') }>{ hundredths(run.easy_points) }</div>
        <Statistic.Label>Easy</Statistic.Label>
        <div className={ high('easy_jumps') }>{ hundredths(run.easy_jumps) }</div>
      </Statistic>
      <Statistic size='mini'>
        <div className={ high('medium_points') }>{ hundredths(run.medium_points) }</div>
        <Statistic.Label>Medium</Statistic.Label>
        <div className={ high('medium_jumps') }>{ hundredths(run.medium_jumps) }</div>
      </Statistic>
      <Statistic size='mini'>
        Points
        <Statistic.Label>   </Statistic.Label>
        Jumps
      </Statistic>
      <Statistic size='mini'>
        <div className={ high('hard_points') }>{ hundredths(run.hard_points) }</div>
        <Statistic.Label>Hard</Statistic.Label>
        <div className={ high('hard_jumps') }>{ hundredths(run.hard_jumps) }</div>
      </Statistic>
      <Statistic size='mini'>
        <div className={ high('hardest_points') }>{ hundredths(run.hardest_points) }</div>
        <Statistic.Label>Hardest</Statistic.Label>
        <div className={ high('hardest_jumps') }>{ hundredths(run.hardest_jumps) }</div>
      </Statistic>

    </Statistic.Group>
    </div>

  )
}


export default DataRun
