import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { loggedOut } from '../redux/actions';
// import FontAwesome from './FontAwesome';
import FontAwesome2 from './FontAwesome2';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './Navigation.scss'

export const Navigation = props => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <nav className='navigation'>
      <img src='https://geekshubsacademy.com/img/logo_Geeks_Alfatec.svg' alt='GeeksHubs Academy' />
      <div />
      <div className='user'>
        {props.user ? (
          <div className='logged'>
            
            <nav className='menu'>
              {/* <Link to='movies/top_rated'>top rated</Link> */}
  
              <div className="menu2">
                {/*menu nuevo con varias opciones dandole al boton */}
  
                <Button
                  aria-owns='simple-menu'
                  aria-haspopup="true"
                  onClick={() => setMenuVisible(true)}
                >
                  Open Menu
                </Button>
                <Menu
                  id= 'menu-dropdown'
                  open={menuVisible}
                  onClose={() => setMenuVisible(false)}
                >
                  <MenuItem onClick={() => setMenuVisible(false)}><Link to='/profile'>profile</Link></MenuItem>
                  <MenuItem onClick={() => setMenuVisible(false)}><Link to='/bootcamp'>bootcamps</Link></MenuItem>
                  {props.user.role === 'admin' && <MenuItem onClick={() => setMenuVisible(false)}><Link to='/admin'>admin</Link></MenuItem>}
                  <MenuItem onClick={() => setMenuVisible(false)}><Link to='/bootcamp'><FontAwesome2 onClick={loggedOut} icon='sign-out-alt' /></Link></MenuItem>
                  
                </Menu>
  
  
              </div>
  
              
              
              
              
            
              
            </nav>
          </div>
        ) : (
            <div className='notLogged'>
              <Link to='/login'>login</Link>
              <FontAwesome2 icon='sign-in-alt' />
            </div>
          )}
      </div>
    </nav>
  );
}

export default connect(state => ({ user: state.user }))(Navigation);




