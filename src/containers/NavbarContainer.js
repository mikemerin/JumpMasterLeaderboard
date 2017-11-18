import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { Menu, Icon, Popup, Modal, Image } from 'semantic-ui-react'

export const NavbarContainer = (props) => {

  const { handleHome, username } = props

  const modal = (
    <Modal size='small' dimmer='blurring' closeIcon trigger={<a><Popup position='bottom center' trigger={
        <Icon name='info' />
    } content='Info' /></a>}>

      <Modal.Header><center>I Wanna Be the Jump Master Leaderboards </center></Modal.Header>
        <Modal.Content image>
          <Image src={ require('../images/logo.png') } width={250} height={190} />
          <Modal.Description>
            <center><p><font size={4}>This website, along with the game I Wanna Be the Jump Master, was created by ShadowsDieAway.</font></p></center>
            <br />
            <center><p><font size={4}>This site was built with React.js, React Chart.js 2, and Semantic-UI-React.</font></p></center>
            <br />
            <center><p><font size={4}>Please use the icons on the header for game and profile links.</font></p></center>
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

        { modal }

      </Menu.Item>

    </Menu>
  )

}

export default NavbarContainer
