import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

export const JumpImages = () => {


      const jumps1 = ["gate", "diagonal", "fjump", "sgate", "platform",
                      "cascade", "tbone", "mjump2", "shuriken", "hdiamond", "mjump1", "diamond", "bubble", "vortex", "hourglass",
                      "plane", "corner", "valve", "ninejump", "ddiamond" ]

      function createImage(image) { return <Image src={require(`../images/${image}.png`)} width='3%' floated='left' /> }

      const jump_images_1 = jumps1.map(jump => createImage(jump) )
      // const jump_images_2 = jumps2.map(jump => createImage(jump) )


  // const jump_images = () => jumps.map(x => `<img className="ui small image" src={require('../images/${x}.png')} height={20} />`).join("")
  // const jump_images = `<img className="ui small image" src={require('../images/gate.png')} height={20} />`



  return (
    <Grid.Column width={16}>
      <Grid.Row>
        <Grid.Column width={11}>
          <Image.Group>
            { jump_images_1 }
          </Image.Group>
        </Grid.Column>
        <Grid.Column width={3}>
          "hey"
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
  )

}

export default JumpImages
