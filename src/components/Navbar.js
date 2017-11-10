import React from 'react'
import { Icon, Menu, Popup } from 'semantic-ui-react'

export const Navbar = (props) => {

  return (

    <Menu color='blue' inverted fluid widths={3} size='huge' icon>

      <Menu.Item name='IWBT Jump Master Leaderboards' fitted='vertically'/>

      <Menu.Item name='searchbar'>

      </Menu.Item>
      <Menu.Item name='links' position='right'>

        <Popup position='bottom center' trigger={
            <a href='http://www.delicious-fruit.com' target="_blank" rel="noopener noreferrer">
              <Icon name='download' />
            </a>
        } content='download the game' />

        <Popup position='bottom center' trigger={
          <a href="http://twitch.tv/shadowsdieaway" target="_blank" rel="noopener noreferrer">
            <Icon name='twitch' />
          </a>
        } content='Twitch' />

        <Popup position='bottom center' trigger={
          <a href="https://twitter.com/MikeMerin" target="_blank" rel="noopener noreferrer">
            <Icon name='twitter square' />
          </a>
        } content='Twitter' />

        <Popup position='bottom center' trigger={
            <a href="http://github.com/mikemerin" target="_blank" rel="noopener noreferrer">
              <Icon name='github square' />
            </a>
        } content='Github' />

        <Popup position='bottom center' trigger={
          <a href="https://mikemerin.github.io" target="_blank" rel="noopener noreferrer">
            <Icon name='graduation' />
          </a>
        } content='Blog' />

      </Menu.Item>
    </Menu>


  )

}

export default Navbar
