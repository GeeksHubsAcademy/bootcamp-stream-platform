import React, { Component, Redirect} from 'react';
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

  // TODO state interno // samplestate de user.js?
  state = {
    name: "Cristina",
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {

    // TODO after login task
     if (!this.props.user) {
       return <Redirect to='/login' />;
     }

    return (

      <section className='EditProfileView'>
      
        <h1>Edit Profile</h1>

        {/* TODO import material styles  className={classes.container}  */}
        <form noValidate autoComplete="off">
        {/* /* TODO import material styles className={classes.textField} */}
          <TextField
            id="standard-name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
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

          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
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


const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({ dispatch });


//export default withStyles(styles)(EditProfile);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);
