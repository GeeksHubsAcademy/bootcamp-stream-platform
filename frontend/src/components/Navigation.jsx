import React from 'react';

import { connect } from 'react-redux';
import { Link } from '@reach/router';
import {loggedOut} from '../redux/actions';
import './Navigation.scss'

export const NavigationComponent = props => (
         <nav className='navigation'>
           <div className='logo'>logo</div>
           <div className='user'>
             {props.user ? (
               <div className='logged'>
                 <div className='avatar'>avatar</div>
                 <nav className='menu'>
                   <Link to='movies/top_rated'>top rated</Link>

                   {props.user.role === 'admin' && (
                     <Link className='admin' to='/admin'>
                       admin
                     </Link>
                   )}
                   <Link to='Login'>popular</Link>
                   <button onClick={loggedOut}>log out</button>
                 </nav>
               </div>
             ) : (
               <Link className='notLogged' to='/login'>
                 login
               </Link>
             )}
           </div>
         </nav>
       );

export default connect(state => ({ user: state.user }))(NavigationComponent);
