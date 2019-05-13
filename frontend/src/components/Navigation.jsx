import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { loggedOut } from '../redux/actions';
import FontAwesome from './FontAwesome';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './Navigation.scss';
import Avatar from './Image/AvatarFromUser';

export const Navigation = ({user}) => {
  const [menuVisible, setMenuVisible] = useState(false);


  const menuLogged = (
    <div className='nav logged'>
      <Button aria-owns='simple-menu' aria-haspopup='true' onClick={() => setMenuVisible(true)}>  <Avatar user={user}></Avatar>
        <FontAwesome icon='bars' />
      </Button>

      <Drawer anchor='right' open={menuVisible} onClose={() => setMenuVisible(false)}>
        <div tabIndex={0} role='button' onClick={() => setMenuVisible(false)} onKeyDown={() => setMenuVisible(false)}>
          <div className='menuList'>
            <Button aria-owns='simple-menu' aria-haspopup='true' onClick={() => setMenuVisible(true)}>  <Avatar user={user}></Avatar>
              <FontAwesome icon='bars' />
            </Button>
            <Divider />
            <List id='menu-dropdown' open={menuVisible} onClose={() => setMenuVisible(false)}>
              <ListItem onClick={() => setMenuVisible(false)}>
                <Link to='/profile'>profile</Link>
              </ListItem>
              <ListItem onClick={() => setMenuVisible(false)}>
                <Link to='/bootcamp'>bootcamps</Link>
              </ListItem>
              {user && user.role === 'admin' && (
                <ListItem onClick={() => setMenuVisible(false)}>
                  <Link to='/admin'>admin</Link>
                </ListItem>
              )}
              <ListItem
                onClick={() => {
                  setMenuVisible(false);
                  loggedOut();
                }}
              >
                <Link to='/bootcamp'>
                  <FontAwesome icon='sign-out-alt' />
                </Link>
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  );

  const menuNotLogged = (
    <div className='notLogged'>
      <Link to='/login'>login</Link>
      <br />
      <Link to='/register'>Register</Link>

      <FontAwesome icon='sign-in-alt' />
    </div>
  );

  return (
    <nav className='navigation'>
      <img className='logo' src='https://geekshubsacademy.com/img/logo_Geeks_Alfatec.svg' alt='GeeksHubs Academy' />
      <div className='network'>Social Network</div>
      {user ? menuLogged : menuNotLogged}
    </nav>
  );
};

export default connect(state => ({ user: state.user }))(Navigation);
