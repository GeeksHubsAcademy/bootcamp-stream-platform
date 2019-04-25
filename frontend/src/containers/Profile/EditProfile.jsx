import React, { Component} from 'react';
import { connect } from 'react-redux';
// styles
import PropTypes from 'prop-types';

// TODO import material styles
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// form styles
import TextField from '@material-ui/core/TextField';
// button styles
import Button from '@material-ui/core/Button';


class EditProfile extends Component {

  // TODO it's necessary?
  logout = () => {
    this.props.dispatch({
      type: 'LOGGED_OUT',
    });
  };

  // state initial
  state = {
    userDetails: this.props.user || [],
  };

  // login = () => {
  //   //e.preventDefault();
  //  //console.log(this.state.email, this.state.pass)
  //  // loggedIn(this.state.pass, this.state.email)

  // };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {

    console.log(this.props);

    // TODO after login task
    //  if (!this.props.user) {
    //    return <Redirect to='/login' />;
    //  }

    return (

      <section className='EditProfileView'>

        <h1>Edit Profile</h1>

        {/* TODO import material styles  className={classes.container}  */}
        {/* /* TODO import material styles className={classes.textField} */}

        <form autoComplete="off">

        {/* error attribute */}

          <TextField
            id="standard-name"
            label="Name"
            value={this.state.userDetails.name || ''} 
            onChange={this.handleChange("name")}
            margin="normal"
            required
          />

          <TextField
            id="standard-lastname"
            label="Surname"
            value={this.state.userDetails.surname || ''} 
            onChange={this.handleChange("surname")}
            margin="normal"
            required
          />

          <TextField
            id="standard-email-input"
            label="Email"
            value={this.state.userDetails.email || ''} 
            onChange={this.handleChange("email")}
            type="email"
            margin="normal"
            required
          />

          <TextField
            id="standard-password-input"
            label="Password"
            type="password"            
            margin="normal"
          />

          <TextField
            id="standard-repeat-password-input"
            label="Repeat password"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />

          {/* NOTE disabled */}
          <TextField
            disabled
            id="standard-disabled"
            label="Profile"
            defaultValue="Student"
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

        {/* TODO review , it's in navbar?  className={classes.button} */}
        <Button variant="contained" onClick={this.logout}>
          Logout
        </Button>

      </section>
    );
  }

}

// TODO review
// EditProfile.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


const mapStateToProps = ({ user }) => ({ 
  isLogged: !!user,
  user
});

const mapDispatchToProps = dispatch => ({ dispatch });


//export default withStyles(styles)(EditProfile);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);
