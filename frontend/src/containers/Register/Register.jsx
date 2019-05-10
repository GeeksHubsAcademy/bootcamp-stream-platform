import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicZone from '../../guards/PublicZone';
import validator from 'validator';
import { postRegister } from '../../redux/actions';
import './Register.scss';


//import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// form icons (npm install @material-ui/icons)
import FormControl from '@material-ui/core/FormControl';







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
      postRegister(this.state)
        .then(response => this.setState({ message: "Registro completado, ya puedes" }))
        .catch(error => {
          console.dir(error);
           this.setState({ message: error.message });
        });
    } else {
        this.setState({ message: 'completa los campos correctamente' });
    }

  }
  handleChange = (ev) => {
    console.log('ENTRA en handlechange');
    this.setState({ [ev.target.name]: ev.target.value });
    this.validate();
  }


  validate = () => {//only validate email
    if (validator.isEmail(this.state.email)) {
      this.setState({ erroremail: undefined });
    }
    else {
      this.setState({ erroremail: 'Por favor, introduce un email válido' });
    }
    if (this.state.password === this.state.password2) {
      this.setState({ errorparssword2: undefined });
    } else {
      this.setState({ errorparssword2: 'Las contraseñas no coinciden' });
    }
  }

  render() {
    const { errorname, errorlastname, erroremail, errorpassword, errorparssword2, name, lastname, email, password, password2 }
      = this.state;//esto lo hacemos para no tener que escribir tol rato this.name...
    return (
      <section className='RegisterSquare'>
        <h1>Register</h1>

        <form className='RegisterView' onSubmit={this.handleSubmit}>
          {/* <input name='name' type='text' placeholder='name' onKeyUp={this.validate} value={name} onChange={this.handleChange} /> */}
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Nombre</InputLabel>
            <Input
              name='name'
              type='text'
              placeholder='name'
              onKeyUp={this.validate}
              value={name}
              onChange={this.handleChange}

            />
          </FormControl>


          <div className='error'>{errorname}</div>
          {/* <input name='lastname' type='text' placeholder='lastname' onChange={this.handleChange} value={lastname} /> */}
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Lastname</InputLabel>
            <Input
              name='lastname'
              type='text'
              placeholder='Lastname'
              onKeyUp={this.validate}
              value={lastname}
              onChange={this.handleChange}

            />
          </FormControl>

          <div className='error'>{errorlastname}</div>
          {/* <input name='email' type='email' placeholder='email' onChange={this.handleChange} value={email} /> */}
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Email</InputLabel>
            <Input
              name='email'
              type='email'
              placeholder='email'
              onKeyUp={this.validate}
              value={email}
              onChange={this.handleChange}

            />
          </FormControl>
          <div className='error'>{erroremail}</div>
          {/* <input name='password' type='password' placeholder='password' onChange={this.handleChange} value={password} /> */}
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              placeholder='password'
              onKeyUp={this.validate}
              value={password}
              onChange={this.handleChange}

            />
          </FormControl>

          <div className='error'>{errorpassword}</div>
          {/* <input name='password2' type='password' placeholder='repeat password' onChange={this.handleChange} value={password2} /> */}
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Repeat Password</InputLabel>
            <Input
              name='password2'
              type='password'
              placeholder='Repeat password'
              onKeyUp={this.validate}
              value={password2}
              onChange={this.handleChange}

            />
          </FormControl>

          <div className='error'>{errorparssword2}</div>

          {/* <input name='registrarme' type='submit' /> */}

          <Button
            variant='contained'
            className='botonRegister'
            color='secondary'
            onClick={this.handleSubmit}>
            Register
          </Button>


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
