import React from 'react';

// import { Link } from '@reach/router';
import FontAwesome from './FontAwesome';

import './Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <div className='footerLogo'>
      <img src='https://geekshubsacademy.com/img/logo_Geeks_Alfatec.svg' alt='GeeksHubs Academy' />
      <p className='blurb'>
        {' '}
        "If at first you don't succeed, <br />
        try and try again.{' '}
      </p>
      <p className='rights'>All Content © GeeksHubs. VLC FSD class of 2019. All Rights Reserved</p>
    </div>
    <div className='social'>
    <div> <h5>Follow us</h5> </div>
      {/* <span className='facebook'/> */}
      <FontAwesome icon='facebook-f' />
      {/* <span className='twitter' /> */}
      <FontAwesome icon='twitter' />
      
      <FontAwesome icon='linkedin-in' />
      
      <FontAwesome icon='instagram' />
      
      <FontAwesome icon='youtube' />
      
      <FontAwesome icon='github' />
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
