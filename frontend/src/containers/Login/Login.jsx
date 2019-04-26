import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import { loggedIn } from '../../redux/actions';
//import { set } from 'mongoose';

//importamos scss
import './Login.scss'



class Login extends Component {
  state = {
    pass: '',
    email: '',
    errorPass: '',
    errorEmail:'',
    error:'',
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
    console.log({ [ev.target.name]: ev.target.value });
  }

  login = (event) => {

    event.preventDefault();
    let {pass, email} = this.state;

    if (pass === '') {

      this.setState({errorPass:"No has introducido el password"});

    }
     if (email === '') {

      this.setState({errorEmail:"No has introducido el email"});

    } else {

      loggedIn(pass, email)
        .then(() => this.setState({ error: 'logged!!' }))
        .catch( (e) => this.setState({ error: 'email o contraseña incorrecta' }));

    }
  };


  render() {
    console.log(this.props);

    // if (this.props.isLogged) {
    //   return <Redirect to='profile' />;
    // }

    return (
      <section className=''>
        <h1>Login</h1>

        <form onSubmit={this.login} className='loginView'>
          <input name='email' placeholder='email' type='email' onChange={this.handleChange} />
          {this.state.errorEmail && <div className='errorLoginView'>{this.state.errorEmail}</div>}
          <input name='pass' placeholder='password' type='password' onChange={this.handleChange} />
          {this.state.errorPass && <div className='errorLoginView'>{this.state.errorPass}</div>}
          <button>Login</button>
        </form>

        {this.state.error && <h1 className='errorLoginView'>{this.state.error}</h1>}

        {/* <div className="errorLoginView">
          {this.state.error}
        </div> */}
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
