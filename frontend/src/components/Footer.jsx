import React from 'react';

import { Link } from '@reach/router';
import './Navigation.scss';

const Footer = () => (
  <footer className='navigation'>
    
    <Link to='movies/upcoming'>upcoming</Link>
    <Link to='movies/popular'>popular</Link>
  </footer>
);

export default Footer;
