import React from 'react';

import { connect } from 'react-redux';
import { Link } from '@reach/router';
import {loggedOut} from '../redux/actions';
import './Navigation.scss'

export const Navigation = props => (
         <nav className='navigation'>
           <img src='https://geekshubsacademy.com/img/logo_Geeks_Alfatec.svg' alt='GeeksHubs Academy' />
           <div />
           <div className='user'>
             {props.user ? (
               <div className='logged'>
                 <div className='avatar'>avatar</div>
                 <nav className='menu'>
                   {props.user.role === 'admin' && <Link to='/admin'>admin</Link>}
                   <button onClick={loggedOut}>log out</button>
                 </nav>
               </div>
             ) : (
               <div className='notLogged'>
                 <Link to='/login'>login</Link>
               </div>
             )}
           </div>
         </nav>
       );

export default connect(state => ({ user: state.user }))(Navigation);
