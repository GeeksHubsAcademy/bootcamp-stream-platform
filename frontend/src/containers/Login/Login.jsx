import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';

class Login extends Component {
  login = () => {
    this.props.dispatch({
      type: 'LOGGED_IN',
      user: { name: 'juan' },
    });
  };
  render() {
    if (this.props.user) {
      return <Redirect to='/profile' />;
    }
     return (
         <section className='LoginView'>
           <h1>Login</h1>
           <button onClick={this.login}>login</button>
         </section>
       );
  }
}
const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
