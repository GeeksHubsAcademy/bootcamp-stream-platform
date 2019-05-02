import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicZone from '../../components/PublicZone';
import validator from 'validator';
import { postRegister } from '../../redux/actions';
import './Register.scss';

class _Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
      registrarme: '',
      errorname: undefined,
      errorlastname: undefined,
      erroremail: undefined,
      errorpassword: undefined,
      errorparssword2: undefined,
      message: undefined,
    };
  }

  handleChange = (ev) => {
    console.log('ENTRA en handlechange');
    this.setState({ [ev.target.name]: ev.target.value });
    this.validate();
  }

  handleSubmit = (ev) => {
    ev.preventDefault();//esto es para que no se refresque
    console.log('handleSubmit', this.state);
    if (this.state.password2 === this.state.password && this.state.password) {
      postRegister(this.state.name, this.state.lastname, this.state.email, this.state.password)
        .then(response => this.setState({ message: response }))
        .catch(error => this.setState({ message: error.message }));
    }
    // loggedIn(pass, email)
    //     .then(() => this.setState({ error: 'logged!!' }))
    //     .catch(e => this.setState({ error: 'email o contraseña incorrecta' }));
  }
  handleChange = (ev) => {
    console.log('ENTRA en handlechange');
    this.setState({ [ev.target.name]: ev.target.value });
    this.validate();
  }

  handleSubmit = (ev) => {
    ev.preventDefault();//esto es para que no se refresque
    console.log(this.state);
    postRegister(this.name, this.surname, this.email, this.password, this.password2);
    // loggedIn(pass, email)
    //     .then(() => this.setState({ error: 'logged!!' }))
    //     .catch(e => this.setState({ error: 'email o contraseÃ±a incorrecta' }));
  }
  validate = () => {//only validate email
    if (validator.isEmail(this.state.email)) {
      this.setState({ erroremail: undefined });
    }
    else {
      this.setState({ erroremail: 'Por favor, introduce un email válido' });
    }
  }

  render() {
    const { errorname, errorlastname, erroremail, errorpassword, errorparssword2, name, lastname, email, password, password2 }
      = this.state;//esto lo hacemos para no tener que escribir tol rato this.name...
    return (
      <section className='RegisterView'>
        <h1>Register</h1>
        <form className='Form' onSubmit={this.handleSubmit}>
          <input name='name' type='text' placeholder='name' onKeyUp={this.validate} value={name} onChange={this.handleChange} />
          <div className='error'>{errorname}</div>
          <input name='lastname' type='text' placeholder='lastname' onChange={this.handleChange} value={lastname} />
          <div className='error'>{errorlastname}</div>
          <input name='email' type='email' placeholder='email' onChange={this.handleChange} value={email} />
          <div className='error'>{erroremail}</div>
          <input name='password' type='password' placeholder='password' onChange={this.handleChange} value={password} />
          <div className='error'>{errorpassword}</div>
          <input name='password2' type='password' placeholder='repeat password' onChange={this.handleChange} value={password2} />
          <div className='error'>{errorparssword2}</div>
          <input name='registrarme' type='submit' />
          <h1>{this.state.message}</h1>
        </form>
      </section>
    );
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

