import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

export const JumpImages = () => {


      const jumps = ["gate_leading", "diagonal", "fjump", "sgate", "platform",
                      "cascade", "tbone", "mjump2", "shuriken", "hdiamond", "mjump1", "diamond", "bubble", "vortex", "hourglass",
                      "plane", "corner", "valve", "ninejump", "ddiamond" ]

      function createImage(image) { return <Image src={require(`../images/${image}.png`)} width='2.81%' floated='left' /> }

      const jump_images = jumps.map(jump => createImage(jump) )
      // const jump_images_2 = jumps2.map(jump => createImage(jump) )


  // const jump_images = () => jumps.map(x => `<img className="ui small image" src={require('../images/${x}.png')} height={20} />`).join("")
  // const jump_images = `<img className="ui small image" src={require('../images/gate.png')} height={20} />`



  return (
    <Image.Group>
      { jump_images }
    </Image.Group>
  )

}

export default JumpImages
