import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
// import { loggedIn } from '../../redux/actions'



class Login extends Component {
  login = () => {
    // loggedIn(pass, email)
    // .then(
    //   () => this.navigation.push('/home')
    // )
    // .catch(
    //   error => this.setState({error})
    // )
  };
  render() {
    if (this.props.isLogged) {
      return <Redirect to='profile' />;
    }
    return (
      <section className='LoginView'>
        <h1>Login</h1>
        <button onClick={this.login}>login</button>
      </section>
    );
  }
}
const mapStateToProps = ({ user }) => ({ isLogged: !!user });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
