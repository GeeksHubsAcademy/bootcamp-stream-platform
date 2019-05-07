import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from '@reach/router';
import { loggedIn } from '../../redux/actions';
//import { set } from 'mongoose';

//importamos scss
import './Login.scss';
import PublicZone from '../../components/PublicZone';
//material-ui
//import { withStyles } from '@material-ui/core/styles';
import Button, {classes} from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// form icons (npm install @material-ui/icons)
//import IconButton from '@material-ui/core/IconButton';
//import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
//import TextField from '@material-ui/core/TextField';
//import FormHelperText from '@material-ui/core/FormHelperText';


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
    console.log(this.state);
    event.preventDefault();
    let { pass, email } = this.state;

    if (pass === '' && email=== '') {
      this.setState({ errorPass: 'No has introducido el password' });
      this.setState({ errorEmail: 'No has introducido el email' });
    }else if (email === '') {
      this.setState({ errorEmail: 'No has introducido el email' });
    }else if(pass === ''){
      this.setState({ errorPass: 'No has introducido el password' });
    }else {
      console.log(pass, email);
      this.props.loggedIn(pass, email)
        // .then(() => this.setState({ error: 'logged!!' }))
        .catch(e => this.setState({ error: 'El email y/o la contraseña incorrecta' }));
    }
    console.log(this.state);
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
            />
          </FormControl>
          
          {this.state.errorEmail && <div className='errorLoginView'>{this.state.errorEmail}</div>}
          <FormControl className='formControl' error={!!this.state.errorName}>
            <InputLabel htmlFor='component-name'>Password</InputLabel>
            <Input 
            name='pass'
           
            type='password'
            onChange={this.handleChange}
            />
          </FormControl>
         
          {this.state.errorPass && <div className='errorLoginView'>{this.state.errorPass}</div>}
          
          <Button 
          variant='outlined' 
          color='secondary' 
          onClick={this.login}>
            Login
          </Button>
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
