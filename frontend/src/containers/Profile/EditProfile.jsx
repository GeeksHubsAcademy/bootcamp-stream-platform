import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Redirect } from '@reach/router';

// redux
import { updateProfile, deleteUser, loggedOut } from '../../redux/actions';

//validate
import validator from 'validator';

// component styles
import './EditProfile.scss';

// form styles
//import TextField from '@material-ui/core/TextField';
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
// edit button
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

// Image
import FileInput from '../../components/Image/FileInput';

// Alert dialog
import AlertDialog from '../../components/Messages/AlertDialog';

class EditProfile extends Component {
  // state initial
  //state =  this.props.user || {}
  state = {
    name: this.props.user.name,
    lastname: this.props.user.lastname,
    email: this.props.user.email,
    //role: this.props.user.role,
    password: undefined,
    password2: undefined,
    errorName: undefined,
    errorlastname: undefined,
    errorEmail: undefined,
    errorPassword: undefined,
    errorPassword2: undefined,
    successMessage: undefined,
    showPassword: false,
    disabled: true,
    open: false,
  };

  // snackbar component
  handleClick = () => {
    this.setState({ open: true });
  };
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  deleteProfile = e => {
    e.preventDefault();
    //close dialog
    // this.child.handleCloseDialog();
    //show message
    //this.handleClick({ successMessage: 'Deleted user in DB!' });
    // go to action and logout by default when user isn't exists
    deleteUser()
    .then(() => this.setState({ successMessage: 'Deleted user in DB!' }))
    .catch(e => this.setState({ error: e.message }));
  };

  // Alert Dialog component 
  onClickDialog = () => {
    // to receive function to child to parent
    this.child.handleClickOpenDialog();
  }
 
  // action to updateProfile
  saveProfile = e => {
    e.preventDefault();
    const { name, lastname, email, password, image} = this.state;
    const userData = { name, lastname, email, password};
    if (this.validate()) {
      //console.log('Data to save:', userData);
      //console.log('Data to save:', image);
      updateProfile(userData, image)
        .then(() => this.setState({ successMessage: 'Great! updated profile!' }))
        .catch(e => this.setState({ error: e.message }))
        .then(() => this.handleClick());        
        //.catch(e => this.setState({ error: e.response }));
      // show snackbar message
    }
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value }, () => {
      // validate onChange inside callback
      this.validate();
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowEdit = () => {
    this.setState(state => ({ disabled: !state.disabled }));
  };

  validate = () => {
    let isValid = true;
    if (this.state.name === '') {
      this.setState({ errorName: 'Please, write your name' });
      isValid = false;
    } else {
      this.setState({ errorName: undefined });
    }

    if (this.state.lastname === '') {
      this.setState({ errorlastname: 'Please, write your lastname' });
      isValid = false;
    } else {
      this.setState({ errorlastname: undefined });
    }

    if (this.state.email === '') {
      this.setState({ errorEmail: 'Please, write your email' });
      isValid = false;
    } else {
      this.setState({ errorEmail: undefined });
    }
    if (validator.isEmail(this.state.email) !== true && this.state.email !== '') {
      this.setState({ errorEmail: 'Please, write your email in correct format' });
      isValid = false;
    }

    // NOT required , REVIEW restrictions?
    if (this.state.password !== this.state.password2) {
      this.setState({ errorPassword2: 'Please, passwords should be the same' });
      isValid = false;
    } else {
      this.setState({ errorPassword2: undefined });
    }

    return isValid;
  };

  handleNewImageSelected = (imageBlob) => {
    // TODO image empty => remove
    this.setState(({ image: imageBlob }));
    console.log('handleNewImageSelected:', imageBlob);
    this.handleClickShowEdit();
  }

  render() {

    return (
      <div>
        <section className='EditProfileView'>
          <h1>Hi {this.state.name}</h1>

          <FileInput onChange={this.handleNewImageSelected} 
                     name={this.state.name.trim()[0] + this.state.lastname.trim()[0]}/>        
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Tooltip title="Edit your profile" aria-label="Edit">
            <Fab color={ !!this.state.disabled ? 'primary' : 'secondary'}
                onClick={this.handleClickShowEdit}>
            <Icon>edit_icon</Icon>
            </Fab>
          </Tooltip>  
          </Grid>
          
          <form autoComplete='off'>

            <FormControl className='formControl' error={!!this.state.errorName}>
              <InputLabel htmlFor='component-name'>Name</InputLabel>
              <Input
                id='component-name'
                value={this.state.name}
                aria-describedby='component-name-text'
                required
                disabled={!!this.state.disabled}
                onClick={() => this.setState({ disabled: false })}
                onChange={this.handleChange('name')}
              />
              {this.state.errorName && <FormHelperText id='component-error-text'>{this.state.errorName}</FormHelperText>}
            </FormControl>

            <FormControl className='formControl' error={!!this.state.errorlastname}>
              <InputLabel htmlFor='component-lastname'>Lastname</InputLabel>
              <Input
                id='component-lastname'
                value={this.state.lastname}
                aria-describedby='component-lastname-text'
                disabled={!!this.state.disabled}
                onClick={() => this.setState({ disabled: false })}
                onChange={this.handleChange('lastname')}
                required
              />
              {this.state.errorlastname && <FormHelperText id='component-error-text'>{this.state.errorlastname}</FormHelperText>}
            </FormControl>

            <FormControl className='formControl' error={!!this.state.errorEmail}>
              <InputLabel htmlFor='component-email'>Email</InputLabel>
              <Input
                id='component-email'
                value={this.state.email}
                aria-describedby='component-email-text'
                type='email'
                disabled={!!this.state.disabled}
                onClick={() => this.setState({ disabled: false })}
                onChange={this.handleChange('email')}
                required
              />
              {this.state.errorEmail && <FormHelperText id='component-error-text'>{this.state.errorEmail}</FormHelperText>}
            </FormControl>

            <FormControl className={!!this.state.disabled ? 'hidden' : 'formControl'}  error={!!this.state.errorPassword}>
              <InputLabel htmlFor='component-password'>Change password</InputLabel>
              <Input
                id='component-password'
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                aria-describedby='component-password-text'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton aria-label='Toggle password visibility' onClick={this.handleClickShowPassword}>
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                disabled={!!this.state.disabled}
                onClick={() => this.setState({ disabled: false })}
                onChange={this.handleChange('password')}
              />
              {this.state.errorPassword && <FormHelperText id='component-error-text'>{this.state.errorPassword}</FormHelperText>}
            </FormControl>

            <FormControl className={!!this.state.disabled ? 'hidden' : 'formControl'} error={!!this.state.errorPassword2}>
              <InputLabel htmlFor='component-password2'>Repeat password</InputLabel>
              <Input
                id='component-password2'
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password2}
                aria-describedby='component-password2-text'
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton aria-label='Toggle password visibility' onClick={this.handleClickShowPassword}>
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                disabled={!!this.state.disabled}
                onClick={() => this.setState({ disabled: false })}
                onChange={this.handleChange('password2')}
              />
              {this.state.errorPassword2 && <FormHelperText id='component-error-text'>{this.state.errorPassword2}</FormHelperText>}
            </FormControl>

            {/* disabled field */}
            {/* <TextField disabled id='component-profile' label='Your profile' value={this.state.role} className='textField' margin='normal' /> */}

            <Button variant='contained' color='secondary' 
                    className={!!this.state.disabled ? 'hidden' : ''} 
                    onClick={this.saveProfile}>
              Save
            </Button>
          </form>

          <Snackbar
            className={!!this.state.successMessage ? 'success' : 'error'}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration= {!!this.state.successMessage ? '6000' : null}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id='message-id'>{this.state.successMessage} {this.state.error}</span>}
            action={[
              <IconButton key='close' aria-label='Close' color='inherit' onClick={this.handleClose}>
                <CloseIcon />
              </IconButton>,
            ]}
          /> 

        </section>       

        {/* NOTE: receive/send props to parent to child */}
        <AlertDialog onRef={ref => (this.child = ref)} 
        title="Really do you want delete your profile?"
        message="Your user and personal data will be deleted and you will not be able to access your account again"
        actionAgree={this.deleteProfile}
         />
        
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="endSection"
          >
          <Button size="small" variant="outlined" color="primary" 
                  onClick={this.onClickDialog}>
            Delete mi account
          </Button>
        </Grid>


      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isLogged: !!user,
  user,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);
