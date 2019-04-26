import React from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';

const PrivateZone = ({ children, user, location }) => {
    console.log('location', location);
    return <>{user ? children : <Redirect from='' to={`/login?to=${location.pathname}`} noThrow />}</>;
}
export default connect(({ user }) => ({ user }))(PrivateZone);
