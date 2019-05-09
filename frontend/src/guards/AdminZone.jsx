import React from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';

const AdminZone = ({ children, user }) => {
    return <>
    {
        user.role === 'admin'
        ?  children
        : <Redirect from='' to={`/bootcamps`} noThrow />

    }
    </>;
}
export default connect(({ user }) => ({ user }))(AdminZone);
