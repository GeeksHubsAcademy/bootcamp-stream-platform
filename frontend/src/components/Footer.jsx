import React from 'react';

import { Link } from '@reach/router';
import FontAwesome from './FontAwesome';
import './Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <div className='footerLogo'>
      <img src='https://geekshubsacademy.com/img/logo_Geeks_Alfatec.svg' alt='GeeksHubs Academy' />
      <p className='blurb'>
        {' '}
        "Mi código funciona y no tengo ni idea de por qué." <br />
        -Desarrolladores web{' '}
      </p>
      <p className='rights'>All Content © GeeksHubs. VLC FSD class of 2019. All Rights Reserved</p>
    </div>
    <div className='social'>
      <span className='mdi mdi-facebook-box'>
        <FontAwesome icon='facebook-f' />
      </span>
      <span className='mdi mdi-twitter' />
      <span className='mdi mdi-linkedin-box' />
      <span className='mdi mdi-youtube' />
    </div>
    <div>
      <ul className='links'>
        <li>
          <a href='https://geekshubsacademy.com/terms' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>
            Terms and Conditions
          </a>
        </li>
        <li>
          <a href='https://geekshubsacademy.com/privacy' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>
            Privacy
          </a>
        </li>
        <li>
          <a href='https://geekshubsacademy.com/cookies' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>
            Cookies policy
          </a>
        </li>
      </ul>
    </div>
  </footer>
);


export default Footer;
