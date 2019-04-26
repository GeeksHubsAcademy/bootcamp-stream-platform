import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';

// component styles
import './EditProfile.scss';

// form styles
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class EditProfile extends Component {

  // state initial
  state =  this.props.user || {}

  saveProfile = (e) => {
    e.preventDefault();
    console.log('Saved', this.state)
  };

  // TODO
  deleteProfile = (e) => {
    e.preventDefault();
    console.log('Delete', this.state.bootcamp)
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    //console.log(this.props);

    // TODO after login task
    // if (this.props.isLogged) {
    //   return <Redirect to='login' />;
    // }

    return (
    
      <section className="EditProfileView">

          <h1>Hi {this.state.name }</h1>
          <p>Edit your profile: </p>
          <form autoComplete="off"
                onClick={this.saveProfile}>

            {/* TODO
              error attribute }             
            */}
            <TextField
              id="standard-name"
              label="Name"
              name="name"    
              className="textField"
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
              required
            />

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
              className="textField"
              margin="normal"
            />

            <TextField
              id="standard-repeat-password-input"
              label="Repeat password"
              name="repeat-password"
              type="password"
              autoComplete="current-password"
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
