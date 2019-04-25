import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import { loggedIn } from '../../redux/actions'



class Login extends Component {
  state = {
    pass: '',
    email:''
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
    console.log({ [ev.target.name]: ev.target.value });
}


  login = () => {

    //e.preventDefault();
   console.log(this.state.email, this.state.pass)
   // loggedIn(this.state.pass, this.state.email)

  };
  render() {
    console.log(this.props);

      // if (this.props.isLogged) {
      //   return <Redirect to='profile' />;
      // }

    return (
      <section className='LoginView'>
        <h1>Login</h1>

        <form onSubmit={this.login} className="">
          <input name="email" placeholder="email" type="email" onChange={this.handleChange} required />
          <input name="pass" placeholder="password" type="password" onChange={this.handleChange} required />


          <button >login</button>
        </form>
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
