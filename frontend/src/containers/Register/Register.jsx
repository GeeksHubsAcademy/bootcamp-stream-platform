import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicZone from '../../components/PublicZone';

class _Register extends Component {

  render() {
    return (
        <section className="RegisterView">
          <h1>Register</h1>
        </section>
    )
  }
}




const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({ dispatch });

export const Register = connect(
         mapStateToProps,
         mapDispatchToProps,
       )(_Register);

export default () => (
  <PublicZone>
    <Register />
  </PublicZone>
);
