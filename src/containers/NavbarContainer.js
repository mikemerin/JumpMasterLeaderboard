import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { Menu, Icon, Popup, Modal, Image } from 'semantic-ui-react'

export default class NavbarContainer extends Component {

  render() {

    const { handleHome, username } = this.props

    const modal = (
      <Modal size='tiny' trigger={<a><Popup position='bottom center' trigger={
          <Icon name='info' />
      } content='Info' /></a>}>

        <Modal.Header><center>I Wanna Be the Jump Master Leaderboards </center></Modal.Header>
          <Modal.Content image>
            <Image size='large' src={ require('../images/logo.png') } />
            <Modal.Description>
              <center><p>This website (and game) was created by ShadowsDieAway.</p></center>
              <br />
              <center><p>Please use the icons on the header for game and profile links.</p></center>
            </Modal.Description>
          </Modal.Content>
        </Modal>
  )

    return (
      <Menu color='blue' inverted  fluid widths={3} size='huge' icon fixed='top' >

        <Menu.Item name='I Wanna Be the Jump Master' fitted='vertically' >
          <Link to="/" onClick={ handleHome } >I Wanna Be the Jump Master</Link>
        </Menu.Item>

        <Menu.Item name='title' fitted='vertically' >

          <Switch>

            <Route exact path="/run/:id" render={routerProps => {
              const id = routerProps.match.params.id
              return `Run by ${username} (Run id: ${id})`
            }} />

            <Route exact path="/username/:username" render={routerProps => {
              const username = routerProps.match.params.username
              return `All runs for ${username}`
            }} />

            <Route path="/" render={routerProps => {
              return "Main Leaderboards"
            }} />

          </Switch>

        </Menu.Item>

        <Menu.Item name='links' position='right' fitted='vertically'>

          <Popup position='bottom center' trigger={
            <a href='http://www.delicious-fruit.com' target="_blank" rel="noopener noreferrer">
              <Icon name='download' />
            </a>
          } content='download the game' />

          { modal }

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
