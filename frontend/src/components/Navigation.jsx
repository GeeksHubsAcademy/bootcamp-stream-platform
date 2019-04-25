import React from 'react';

import { connect } from 'react-redux';
import { Link } from '@reach/router';

import './Navigation.scss'

const Navigation = () => (
  
  <nav className="navigation">

      <div className="logo">
      logo
      </div>
      <div className="user">

          <div className="avatar">avatar</div>
          <nav className="menu">
            <Link to='movies/top_rated'>top rated</Link>

            <Link to='movies/upcoming'>upcoming</Link>
            <Link to='Login'>popular</Link>

          </nav>
      
      </div>

  </nav>
);

export default connect( state => ({user: state.user}) )(Navigation);
