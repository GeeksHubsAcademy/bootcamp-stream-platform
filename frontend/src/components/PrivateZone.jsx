import React from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';

const PrivateZone = ({ children, user }) => <>{user ? children : <Redirect from='' to='/login' noThrow />}</>;
export default connect(({ user }) => ({ user }))(PrivateZone);
