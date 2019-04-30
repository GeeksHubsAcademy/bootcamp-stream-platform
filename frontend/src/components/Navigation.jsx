import React from 'react';

import { connect } from 'react-redux';
import { Link } from '@reach/router';
import {loggedOut} from '../redux/actions';
// import FontAwesome from './FontAwesome.jsx';
// import FontAwesome2 from './FontAwesome2';

import './Navigation.scss'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Fade from '@material-ui/core/Fade';

// function FadeMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   function handleClick(event) {
//     setAnchorEl(event.currentTarget);
//   }

//   function handleClose() {
//     setAnchorEl(null);
//   }

//   return (
//     <div>
//       <Button aria-owns={open ? 'fade-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
//         Open with fade transition
//       </Button>
//       <Menu
//         id="fade-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }


export const Navigation = props => (
         <nav className='navigation'>
           <img src='https://geekshubsacademy.com/img/logo_Geeks_Alfatec.svg' alt='GeeksHubs Academy' />
           <div />
           <div className='user'>
             {props.user ? (
               <div className='logged'>
                 <div className='avatar'>avatar</div>
                 <FontAwesome2 icon='user-circle' />
                 <nav className='menu'>
                   {/* <Link to='movies/top_rated'>top rated</Link> */}

                    <div className="menu2">
                    {/*menu nuevo con varias opciones dandole al boton */}
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Opcion1" />
                    <MenuItem value={2} primaryText="Opcion2" />
                    <MenuItem value={3} primaryText="Opcion3" />
                    <MenuItem value={4} primaryText="Opcion4" />
                    <MenuItem value={5} primaryText="Opcion5" />
                    </DropDownMenu>
                    
                  
                    </div>
                    
                   {props.user.role === 'admin' && <Link to='/admin'>admin</Link>}
                   <FontAwesome2 icon='user-shield' />

                   {/* <Link to='Login'>popular</Link> */}
                   <button onClick={loggedOut}>log out</button>
                   <FontAwesome2 icon='sign-out-alt' />
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

export default connect(state => ({ user: state.user }))(Navigation);
