import React from 'react';

import { Link } from '@reach/router';

import './Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <div>
      <h1>Logo</h1>
      <p className='blurb'> “When a fullstack developer plays <br/> a game of thrones they win or they die.” </p>
      <p className='rights'>All Content © GeeksHubs. FSD class of 2019.
        All Rights Reserved</p>
    </div>
    <div className='social'> 
    RRSS
    </div>
    <div className='links'>
    <ul>
      <li><Link to='https://geekshubsacademy.com/terms'>Terms and Conditions</Link></li>
      <li><Link to='https://geekshubsacademy.com/privacy'>Privacy</Link></li>
      <li><Link to='https://geekshubsacademy.com/cookies'>Cookies policy</Link></li>
    </ul>
      </div>
  </footer>
);


export default Footer;
