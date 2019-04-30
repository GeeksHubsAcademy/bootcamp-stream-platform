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
      surname: '',
      email: '',
      password: '',
      password2: '',
      registrarme: '',
      errorname: undefined,
      errorsurname: undefined,
      erroremail: undefined,
      errorpassword: undefined,
      errorparssword2: undefined,
    }
  }

  handleChange = (ev) => {
    console.log('ENTRA en handlechange');
    this.setState({ [ev.target.name]: ev.target.value });
    this.validate();
  }

  handleSubmit = (ev) => {
    ev.preventDefault();//esto es para que no se refresque 
    console.log(this.state);
    postRegister(this.name,this.surname,this.email,this.password,this.password2);
    // loggedIn(pass, email)
    //     .then(() => this.setState({ error: 'logged!!' }))
    //     .catch(e => this.setState({ error: 'email o contraseña incorrecta' }));
    
  }

  validate() {//only validate email
    if (validator.isEmail(this.state.email)) {
      this.setState({ erroremail: undefined });
    }
    else {
      this.setState({ erroremail: 'Por favor, introduce un email válido' });
    }
  }

  render() {

    const { errorname, errorsurname, erroremail, errorpassword, errorparssword2, name, surname, email, password, password2 }
      = this.state;//esto lo hacemos para no tener que escribir tol rato this.name...
    return (
      <section className="RegisterView">
        <h1>Register</h1>
        <form className="Form" onSubmit={this.handleSubmit}>
          <input name="name" type="text" placeholder="name" onKeyUp={this.validate} value={name} />
          <div className="error">{errorname}</div>
          <input name="surname" type="text" placeholder="surname" onChange={this.handleChange} value={surname} />
          <div className="error">{errorsurname}</div>
          <input name="email" type="email" placeholder="email" onChange={this.handleChange} value={email} />
          <div className="error">{erroremail}</div>
          <input name="password" type="password" placeholder="password" onChange={this.handleChange} value={password} />
          <div className="error">{errorpassword}</div>
          <input name="password2" type="password" placeholder="repeat password" onChange={this.handleChange} value={password2} />
          <div className="error">{errorparssword2}</div>
          <input name="registrarme" type="submit" />

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
