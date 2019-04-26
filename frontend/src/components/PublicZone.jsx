import React from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';

const PrivateZone = ({ children, user }) =>
(
<div>{user ? <Redirect from='' to='/bootcamps' noThrow /> :  children }</div>

)



export default connect(({ user }) => ({ user }))(PrivateZone);
