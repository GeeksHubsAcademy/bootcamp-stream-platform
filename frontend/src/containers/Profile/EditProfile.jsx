import React, { Component} from 'react';
import { connect } from 'react-redux';
//import { Redirect } from '@reach/router';

// redux
import { updateProfile } from '../../redux/actions';

// component styles
import './EditProfile.scss';

// form styles
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// form error styles
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// form icons (npm install @material-ui/icons)
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// forms messages : snackbar
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

class EditProfile extends Component {

  // state initial
  //state =  this.props.user || {}
  state = {
    name: this.props.user.name,
    surname: this.props.user.surname,
    email: this.props.user.email,
    role: this.props.user.role,
    // REVIEW not loaded pass
    //password: this.props.user.password,
    //password2: this.props.user.password2,
    password: '',
    password2: '',
    errorName: undefined,
    errorSurname: undefined,
    errorEmail: undefined,
    errorPassword: undefined,
    errorPassword2: undefined,
    successMessage: undefined,
    showPassword: false,
    disabled: true,
    open: false,
  }

  // snackbar
  handleClick = () => {
    this.setState({ open: true });
  };
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };


  // TODO
  deleteProfile = (e) => {
    e.preventDefault();
    //console.log('Delete', this.state.user)
  };

  //  action to updateProfile
  saveProfile = (e) => {
    e.preventDefault();

    this.setState(
      this.state,
      () =>{
        //validate onChange inside callback
        this.validate();
        // TODO no ejecutar siempre, onClick // onSubmit
        console.log('Data to save:', this.state)
        updateProfile(this.state)
        .then(() => this.setState({ successMessage: 'Great! updated profile!' }))
        .then ( () => this.handleClick() )
        .catch(e => this.setState({ error: 'error' }));
        // show snackbar message
      }
      );
  };

  handleChange = name => event => {
    this.setState(
      {[name]: event.target.value.trim() },
      () =>{
        //console.log( 'changed', this.state )
        // validate onChange inside callback
        this.validate();
      }
      );
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  validate = () => {
    //console.log('hola, estamos validando!');

    if( this.state.name === ''){
      this.setState({ errorName: 'Please, write your name'});
      console.log('empty name');
    } else {
      this.setState({ errorName: undefined});
    }

    if( this.state.surname === ''){
      this.setState({ errorSurname: 'Please, write your surname'});
      console.log('empty surname');
    } else {
      this.setState({ errorSurname: undefined});
    }

    //TODO restrictions
    if( this.state.email === ''){
      this.setState({ errorEmail: 'Please, write your email'});
      console.log('empty email');
    }  else {
      this.setState({ errorEmail: undefined});
    }
    // NOT required , TODO restrictions
    // if( this.state.password === ''){
    //   this.setState({ errorPassword: 'Please, write your password'});
    //   console.log('empty password');
    // }
    // if( this.state.password2 === ''){
    //   this.setState({ errorPassword2: 'Please, repeat your password'});
    //   console.log('empty repeat password');
    // }
    if( this.state.password !== this.state.password2){
      this.setState({ errorPassword2: 'Please, passwords should be the same'});
      console.log('no same passwords');
    } else {
      this.setState({ errorPassword2: undefined});
      //console.log(' coinciden');
    }


  }
  render() {
    //console.log(this.props);


    // TODO after login task
    // if (this.props.isLogged) {
    //   return <Redirect to='login' />;
    // }

    return (

      <section className="EditProfileView">

          <h1>Hi {this.state.name}</h1>
          <p>Edit your profile: </p>
          <form autoComplete="off">

          <FormControl className="formControl" error={!!this.state.errorName }>
            <InputLabel htmlFor="component-name">Name</InputLabel>
            <Input
              id="component-name"
              value={this.state.name}
              aria-describedby="component-name-text"
              required
              disabled={!!this.state.disabled}
              onClick={() => this.setState({ disabled: false })}
              onChange={this.handleChange("name")}
            />
            {this.state.errorName &&
            <FormHelperText id="component-error-text">{this.state.errorName}</FormHelperText>
            }
          </FormControl>

          <FormControl className="formControl" error={!!this.state.errorSurname }>
            <InputLabel htmlFor="component-surname">Surname</InputLabel>
            <Input
              id="component-surname"
              value={this.state.surname}
              aria-describedby="component-surname-text"
              disabled={!!this.state.disabled}
              onClick={() => this.setState({ disabled: false })}
              onChange={this.handleChange("surname")}
              required
            />
            {this.state.errorSurname &&
            <FormHelperText id="component-error-text">{this.state.errorSurname}</FormHelperText>
            }
          </FormControl>

          <FormControl className="formControl" error={!!this.state.errorEmail }>
            <InputLabel htmlFor="component-email">Email</InputLabel>
            <Input
              id="component-email"
              value={this.state.email}
              aria-describedby="component-email-text"
              type="email"
              disabled={!!this.state.disabled}
              onClick={() => this.setState({ disabled: false })}
              onChange={this.handleChange("email")}
              required
            />
            {this.state.errorEmail &&
            <FormHelperText id="component-error-text">{this.state.errorEmail}</FormHelperText>
            }
          </FormControl>

          <FormControl className="formControl" error={!!this.state.errorPassword }>
            <InputLabel htmlFor="component-password">Change password</InputLabel>
            <Input
              id="component-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              aria-describedby="component-password-text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}>
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              disabled={!!this.state.disabled}
              onClick={() => this.setState({ disabled: false })}
              onChange={this.handleChange("password")}
            />
            {this.state.errorPassword &&
            <FormHelperText id="component-error-text">{this.state.errorPassword}</FormHelperText>
            }
          </FormControl>

          <FormControl className="formControl" error={!!this.state.errorPassword2 }>
            <InputLabel htmlFor="component-password2">Repeat password</InputLabel>
            <Input
              id="component-password2"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password2}
              aria-describedby="component-password2-text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              disabled={!!this.state.disabled}
              onClick={() => this.setState({ disabled: false })}
              onChange={this.handleChange("password2")}
            />
            {this.state.errorPassword2 &&
            <FormHelperText id="component-error-text">{this.state.errorPassword2}</FormHelperText>
            }
          </FormControl>

          {/* disabled field */}
          <TextField
            disabled
            id="component-profile"
            label="Your profile"
            value={this.state.role}
            className="textField"
            margin="normal"
          />

          {/* TODO
            visibility on keyup form
            */}
          <Button variant="contained" color="primary"
                  className={ !!this.state.disabled ? 'hidden': ''}
                  onClick={this.saveProfile}>
            Save
          </Button>
        </form>

        <Snackbar
            className="success"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{ this.state.successMessage }</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />

        <form onClick={this.deleteProfile} >
          <Button variant="contained">
          Unsubscribe
          </Button>
        </form>

      </section>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  isLogged: !!user,
  user
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);
