import React from 'react';
import { Redirect, Match } from '@reach/router';
import { connect } from 'react-redux';

const PublicZone = ({ children, user }) => (
  <Match path='*'>
    {({ location }) => {
      const to =
        location.search &&
        location.search
          .replace('?to=', '')
          .replace('/login', '')
          .replace('/register', '');
      const redirectTo = to || '/bootcamps';
      return user ? <Redirect from='' to={redirectTo} noThrow /> : children;
    }}
  </Match>
);

export default connect(({ user }) => ({ user }))(PublicZone);
