import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicZone from '../../components/PublicZone';
import { Link } from '@reach/router';

import './Register.scss';




class _Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        imagePath: '',
        tokens: ''

      },

    }

  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }
  Registering() {
    if (this.props.state.user !== true) {
      this.setState({ errorRegistr: 'Unvalid Data' })
    }
  }
  //RegisterProces = event => {
  //  event.preventDefault();
  // let { password, email } = this.state;

  //  if (password === '') {
  //   this.setState({ errorPass: 'No has introducido el password' });
  //  }
  //  if (email === '') {
  //   this.setState({ errorEmail: 'No has introducido el email' });
  //  }
  //  if (email !== email1) {
  //   this.setState({ errorEmail: 'No has introducido el mismo email' });
  // }
  //  if (password !== email1) {
  //   this.setState({ errorPass: 'No has introducido la misma contraseña' });
  // }
  // if (email === email1) {
  //   this.setState({ errorEmail: 'No has introducido el mismo email' });
  // } else {
  //   console.log(password, email);
  //   Registering(password, email)
  //      .then(() => this.setState({ error: 'logged!!' }))
  //     .catch(e => this.setState({ error: 'email o contraseña incorrecta' }));
  // }
  //};

  render() {

    const { user, submitted } = this.state;
    return (
      <section className="RegisterView">
        <h1>Register</h1>
        
        <form onSubmit={this.login} className='loginView'>
          <input name='name' placeholder='name' type='name' onChange={this.handleChange} />
          {this.state.errorEmail && <div className='errorLoginView'>{this.state.errorEmail}</div>}

          <input name='lastName' placeholder='lastName' type='lastName' onChange={this.handleChange} />
          

          <input name='email' placeholder='email' type='email' onChange={this.handleChange} />
          {this.state.errorEmail && <div className='errorLoginView'>{this.state.errorEmail}</div>}

          <input name='email' placeholder='email' type='email' onChange={this.handleChange} />
          {this.state.errorEmail && <div className='errorLoginView'>{this.state.errorEmail}</div>}

          <input name='password' placeholder='password' type='password' onChange={this.handleChange} />
          {this.state.errorPass && <div className='errorLoginView'>{this.state.errorPass}</div>}

          <input name='password' placeholder='password' type='password' onChange={this.handleChange} />
          {this.state.errorPass && <div className='errorLoginView'>{this.state.errorPass}</div>}
          
          <div className="form-group">
          <button>Login</button>
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
        </form>
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
