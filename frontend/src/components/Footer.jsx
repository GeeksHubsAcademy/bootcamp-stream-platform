import React from 'react';

import FontAwesome from './FontAwesome';

import './Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <div className='footerLogo'>
      <img src='https://geekshubsacademy.com/img/logo_Geeks_Alfatec.svg' alt='GeeksHubs Academy' />
      <p className='blurb'> "If at first you don't succeed, try and try again. </p>
      <p className='rights'>All Content © GeeksHubs. VLC FSD class of 2019. All Rights Reserved</p>
    </div>

    <div className='social'>
      <div>
        {' '}
        <h5>Follow us</h5>{' '}
      </div>
      <span className='facebook' />
      <FontAwesome family='fab' icon='facebook-f' />
      <span className='twitter' />
      <FontAwesome family='fab' icon='twitter' />
      <span className='linkedin-in' />
      <FontAwesome family='fab' icon='linkedin-in' />
      <span className='instagram' />
      <FontAwesome family='fab' icon='instagram' />
      <span className='youtube' />
      <FontAwesome family='fab' icon='youtube' />
      <span className='github' />
      <FontAwesome family='fab' icon='github' />
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
