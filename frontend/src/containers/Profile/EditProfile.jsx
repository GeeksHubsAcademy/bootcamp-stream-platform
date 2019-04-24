import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';



class EditProfile extends Component {
  logout = () => {
    this.props.dispatch({
      type: 'LOGGED_OUT',
    });
  };
  render() {
     if (!this.props.user) {
       return <Redirect to='/login' />;
     }
    return (
      <section className='EditProfileView'>
        <h1>EditProfile</h1>
        <button onClick={this.logout}>logout</button>
      </section>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);
