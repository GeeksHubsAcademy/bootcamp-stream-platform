import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';

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


class EditProfile extends Component {

  // state initial
  //state =  this.props.user || {}
  state = {
    name: this.props.user.name,
    surname: this.props.user.surname,
    email: this.props.user.email,
    password: this.props.user.password,
    password2: this.props.user.password2,
    // TODO el input type submit tiene un name?
    errorName: undefined,
    errorSurname: undefined,
    errorEmail: undefined,
    errorPassword: undefined,
    errorPassword2: undefined
  }

  // TODO
  deleteProfile = (e) => {
    e.preventDefault();
    //console.log('Delete', this.state.bootcamp)
  };

  // TODO post action
  saveProfile = (e) => {
    e.preventDefault();
    //console.log('Saved', this.state)
    this.validate();
  };  

  handleChange = name => event => {
    this.setState(
      {[name]: event.target.value.trim() },
      () =>{
        console.log( this.state )
        // validate onChange inside callback
        this.validate();
      }
      );
  };

  validate = () => {
    console.log('hola, estamos validando!');

    if( this.state.name === ''){
      this.setState({ errorName: 'Please, write your name'});
      console.log('campo vacío');
    }
    // if( this.state.password !== this.state.password2){
    //   this.setState({ errorPassword2: 'las contraseñas no coinciden'});
    //   console.log('no coinciden');
    // } else {
    //   this.setState({ errorPassword2: undefined});
    //   console.log(' coinciden');      
    // }

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
          <form autoComplete="off"
                onClick={this.saveProfile}>

            {/* TODO
              error attribute }             
            */}
            {/* <TextField
              id="standard-name"
              label="Name"
              name="name"    
              className="textField"
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              required
            /> */}
 
       <FormControl className="formControl" error={!!this.state.errorName }>
              <InputLabel htmlFor="component-name">Name</InputLabel>
              <Input
                id="component-name"
                value={this.state.name}
                onChange={this.handleChange("name")}
                aria-describedby="component-name-text"
                required
              />              
              {/* <FormHelperText 
                id="component-error-text"
                className={ this.state.errorName ? 'visible': 'hidden'}>
                {this.state.errorName}
              </FormHelperText> */}
              {this.state.errorName && 
              <FormHelperText id="component-error-text">{this.state.errorName}</FormHelperText>
              }  

            </FormControl>

            <TextField
              id="standard-surname"
              label="Surname"
              name="surname"
              value={this.state.surname} 
              onChange={this.handleChange("surname")}
              className="textField"
              margin="normal"
              required
            />

            <TextField
              id="standard-email-input"
              label="Email"
              name="email"
              value={this.state.email} 
              onChange={this.handleChange("email")}
              type="email"
              className="textField"
              margin="normal"
              required
            />

            <TextField
              id="standard-password-input"
              label="Change password"
              name="password"
              type="password"  
              autoComplete="current-password" 
              className="textField"
              margin="normal"
            />

            <TextField
              id="standard-repeat-password-input"
              label="Repeat password"
              name="password2"
              type="password"
              className="textField"
              margin="normal"
            />

            {/* disabled */}
            <TextField
              disabled
              id="standard-disabled"
              label="Your profile"
              defaultValue="Student"
              className="textField"
              margin="normal"
            />

            {/* TODO 
              visibility on keyup form 
              */}
            <Button variant="contained" color="primary">
              Save
            </Button>
          </form>

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
