import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import { loggedIn } from '../../redux/actions';
//import { set } from 'mongoose';

//importamos scss
import './Login.scss';
import PublicZone from '../../components/PublicZone';
//material-ui
import { withStyles } from '@material-ui/core/styles';
import Button, {classes} from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// form icons (npm install @material-ui/icons)
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';


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
    console.log({ [ev.target.name]: ev.target.value });
  };

  login = event => {
    event.preventDefault();
    let { pass, email } = this.state;

    if (pass === '') {
      this.setState({ errorPass: 'No has introducido el password' });
    }
    if (email === '') {
      this.setState({ errorEmail: 'No has introducido el email' });
    } else {
      console.log(pass, email);
      loggedIn(pass, email)
        // .then(() => this.setState({ error: 'logged!!' }))
        .catch(e => this.setState({ error: 'email o contraseña incorrecta' }));
    }
  };

  render() {
    console.log(this.props);

    // if (this.props.isLogged) {
    //   return <Redirect to='profile' />;
    // }

    return (
      <section className='LoginSquare'>
        <h1>Login</h1>

        <form onSubmit={this.login} className='loginView'>
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Email</InputLabel>
            <Input />
          </FormControl>
          <input name='email' placeholder='email' type='email' onChange={this.handleChange} />
          {this.state.errorEmail && <div className='errorLoginView'>{this.state.errorEmail}</div>}
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Password</InputLabel>
            <Input />
          </FormControl>
          <input name='pass' placeholder='password' type='password' onChange={this.handleChange} />
          {this.state.errorPass && <div className='errorLoginView'>{this.state.errorPass}</div>}
          <button>Login</button>
          <Button variant='outlined' color='secondary' className='Boton'>
            Login
          </Button>
        </form>

        {this.state.error && <h1 className='errorLoginView'>{this.state.error}</h1>}

        {/* <div className="errorLoginView">
          {this.state.error}
        </div> */}
      </section>
    );
  }
}



// export const  withStyles(styles)(OutlinedButtons);

const mapStateToProps = ({ user }) => ({ isLogged: !!user });
const mapDispatchToProps = dispatch => ({ dispatch });

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Login);

export default () => (
  <PublicZone>
    <Login />
  </PublicZone>
);
