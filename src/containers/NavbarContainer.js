import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Popup } from 'semantic-ui-react'

export default class NavbarContainer extends Component {

  render() {

    const { handleHome, username } = this.props

    const title = username === "All Users" ? "Main Leaderboards" : `All runs for ${username}`

    return (
      <Menu color='blue' inverted  fluid widths={3} size='huge' icon fixed='top' >

        <Menu.Item name='I Wanna Be the Jump Master' fitted='vertically' >
          <Link to="/" onClick={ handleHome } >I Wanna Be the Jump Master</Link>
        </Menu.Item>

        <Menu.Item name='title' fitted='vertically' > { title } </Menu.Item>

        <Menu.Item name='links' position='right' fitted='vertically'>

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

}
