import React from 'react'
import { Grid, Segment, Menu } from 'semantic-ui-react'

export const Navbar = () => {

  const logo = require(`../images/logo.png`)

  // need to change logo to "return to main page, aka '/' "

    return (

    <Grid columns='equal' inverted >
      <Grid.Row color='blue' textAlign='center'>
        <Grid.Column>
          <Segment color='blue' inverted >
            <Menu stackable color='blue' inverted tabular>
            <a href='http://www.delicious-fruit.com'>
              <img className='image' alt='logo' src={ logo } width={35} height={35} />
            </a>  

            <a href='http://www.delicious-fruit.com' target="_blank" rel="noopener noreferrer">
              <img className='image' alt='logo' src='https://image.flaticon.com/icons/png/512/0/532.png' width={35} height={35} />
            </a>
            </Menu>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='blue' inverted>
            <h2 className="item">IWBT Jump Master Leaderboards</h2>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='blue' inverted>
            <Menu stackable color='blue' inverted tabular floated='right'>
              <a href='https://github.com/mikemerin' target="_blank" rel="noopener noreferrer">
                <img className='image' alt='github' src='https://image.flaticon.com/icons/png/512/25/25231.png' width={35} height={35} />
              </a>  

              <a href='http://www.twitch.tv/shadowsdieaway' target="_blank" rel="noopener noreferrer">
                <img className='image' alt='twitch' src='https://seeklogo.com/images/T/twitch-tv-logo-51C922E0F0-seeklogo.com.png' width={35} height={35} />
              </a>
                
              <a href='http://mikemerin.github.io' target="_blank" rel="noopener noreferrer">
                <img className='image' alt='blog' src='https://i.pinimg.com/originals/21/b0/33/21b033957ebf4670343d8c9967c3f2b5.png' width={35} height={35} />
              </a>
               
              <a href='https://twitter.com/MikeMerin' target="_blank" rel="noopener noreferrer">
                <img className='image' alt='twitter' src='http://simpleicon.com/wp-content/uploads/twitter-2.png' width={35} height={35} />
              </a>
             </Menu>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

}

export default Navbar
