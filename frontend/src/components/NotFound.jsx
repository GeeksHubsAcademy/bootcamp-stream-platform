import React from 'react';

import { Link } from '@reach/router';

const NotFound = () => (
  <section className='404'>
    <h1>Página no encontrada</h1>
    <h2>404</h2>
    <Link to="login">Logeate</Link>
  </section>
);

export default NotFound;
