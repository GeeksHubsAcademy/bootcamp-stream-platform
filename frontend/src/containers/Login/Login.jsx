import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from '@reach/router';
import { loggedIn } from '../../redux/actions';
//import { set } from 'mongoose';

//importamos scss
import './Login.scss';
import PublicZone from '../../guards/PublicZone';
//material-ui
//import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// form icons (npm install @material-ui/icons)
//import IconButton from '@material-ui/core/IconButton';
//import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
//import TextField from '@material-ui/core/TextField';
//import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';


class _Login extends Component {
  state = {
    pass: '',
    email: '',
    errorPass: '',
    errorEmail: '',
    error: '',
  };

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
    //console.log({ [ev.target.name]: ev.target.value });
  };

  login = event => {

    event.preventDefault();
    let { pass, email } = this.state;

    if (pass === '' && email === '') {
      this.setState({ errorPass: 'No has introducido el password' });
      this.setState({ errorEmail: 'No has introducido el email' });
    } else if (email === '') {
      this.setState({ errorEmail: 'No has introducido el email' });
    } else if (pass === '') {
      this.setState({ errorPass: 'No has introducido el password' });
    } else {
      //console.log(pass, email);
      this.props.loggedIn(pass, email)
        // .then(() => this.setState({ error: 'logged!!' }))
        .catch(e => this.setState({ error: 'El email y/o la contraseña incorrecta' }));
    }

  };

  render() {
    // if (this.props.isLogged) {
    //   return <Redirect to='profile' />;
    // }

    return (
      <section className='LoginSquare'>
        <h1>Login</h1>

        <form className='loginView'>
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Email</InputLabel>
            <Input
              name='email'
              type='email'
              onChange={this.handleChange}
              onFocus={() => this.setState({ errorEmail: '' })}
            />
          </FormControl>

          {this.state.errorEmail && <div className='errorLoginView'>{this.state.errorEmail}</div>}

          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Password</InputLabel>
            <Input
              name='pass'
              type='password'
              onChange={this.handleChange}
              onFocus={() => this.setState({ errorPass: '' })}
            />
          </FormControl>

          {this.state.errorPass && <div className='errorLoginView'>{this.state.errorPass}</div>}

          <Button
            variant='contained'
            className='botonLogin'
            color='secondary'
            onClick={this.login}>
            Login
          </Button>

          <div className="linkLogin">
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
            >
              Register
            </Link>

            {/* <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    alert("I'm a button.");
                  }}
                  >

                Recuperar password
                </Link> */}

          </div>

          {this.state.error && <div className='errorLoginView'>{this.state.error}</div>}
        </form>


        {/* <div className="errorLoginView">
          {this.state.error}
        </div> */}
      </section>
    );
  }
}

// export const  withStyles(styles)(OutlinedButtons);

const mapStateToProps = ({ user }) => ({ isLogged: !!user });
const mapDispatchToProps = () => ({ loggedIn: loggedIn });

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Login);

export default () => (
  <PublicZone>
    <Login />
  </PublicZone>
);
