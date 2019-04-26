import React from 'react';

import { Link } from '@reach/router';
import './Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <div>
      <img src='https://geekshubsacademy.com/img/logo_Geeks_Alfatec.svg' alt='GeeksHubs Academy' />
      <p className='blurb'> “When a fullstack developer plays <br/> a game of thrones they win or they die.” </p>
      <p className='rights'>All Content © GeeksHubs. VLC FSD class of 2019.
        All Rights Reserved</p>
    </div>
    <div className='social'> 
    {/* <span class="mdi mdi-facebook-box"></span>
    <span class="mdi mdi-twitter"></span>
    <span class="mdi mdi-linkedin-box"></span>
    <span class="mdi mdi-youtube"></span> */}
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
