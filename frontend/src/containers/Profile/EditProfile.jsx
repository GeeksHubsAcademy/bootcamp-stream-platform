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
  state = {
    userDetails: this.props.user || [],
  };

  saveProfile = (e) => {
    e.preventDefault();
    //console.log(this.state.userDetails.name)
   //console.log(name, email, password)
   //loggedIn(name, password)
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });

    console.log({ [name]: event.target.value });


  };

  render() {

    //console.log(this.props);

    // TODO after login task
    // if (this.props.isLogged) {
    //   return <Redirect to='login' />;
    // }

    return (
    
      <section className="EditProfileView">

           <h1>Hi {this.state.userDetails.name || ''}</h1>
           <p>Edit your profile: </p>

          <form autoComplete="off" onSubmit={this.saveProfile}>

            {/* TODO
              error attribute 
              value={this.state.userDetails.name || ''}             
            */}
            <TextField
              id="standard-name"
              label="Name"
              name="name"    
              className="textField"
              value={this.state.userDetails.name || ''} 
              onChange={this.handleChange("name")}
              margin="normal"
              required
            />

            <TextField
              id="standard-surname"
              label="Surname"
              name="surname"
              value={this.state.userDetails.surname || ''} 
              onChange={this.handleChange("surname")}
              className="textField"
              margin="normal"
              required
            />

            <TextField
              id="standard-email-input"
              label="Email"
              name="email"
              value={this.state.userDetails.email || ''} 
              onChange={this.handleChange("email")}
              type="email"
              className="textField"
              margin="normal"
              required
            />

            <TextField
              id="standard-password-input"
              label="Password"
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

            {/* NOTE disabled */}
            <TextField
              disabled
              id="standard-disabled"
              label="Profile"
              defaultValue="Student"
              className="textField"
              margin="normal"
            />

            <Button variant="contained">
              Save
            </Button>

          </form>

          <form className="" action="/profile/delete" method="DELETE">
            <Button variant="contained">
            unsubscribe
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
