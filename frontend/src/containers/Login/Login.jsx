import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import { loggedIn } from '../../redux/actions'
//import { set } from 'mongoose';

//importamos scss
import './Login.scss'



class Login extends Component {
  state = {
    pass: '',
    email: '',
    errorPass: '',
    errorEmail:''
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
    console.log({ [ev.target.name]: ev.target.value });
  }

  login = (e) => {

    // if (this.state.email === '' || this.state.pass === '') {
    //   e.preventDefault();
      
    //   this.setState({error:"ERRORRRRRR"});
      

    // } else {
    //   e.preventDefault();
    //   console.log(this.state.email, this.state.pass)
    //   // loggedIn(this.state.pass, this.state.email)
    // }


    if (this.state.pass === '') {
      e.preventDefault();
      
      this.setState({errorPass:"No has introducido el password"});

    } if (this.state.email === '') {
      e.preventDefault();
      
      this.setState({errorEmail:"No has introducido el email"});
      
    } else {
      e.preventDefault();
      console.log(this.state.email, this.state.pass)
      // loggedIn(this.state.pass, this.state.email)
    }
  };


  render() {
    console.log(this.props);

    // if (this.props.isLogged) {
    //   return <Redirect to='profile' />;
    // }

    return (
      <section className=''>
        <h1>Login</h1>

        <form onSubmit={this.login} className="loginView">
          <input name="email" placeholder="email" type="email" onChange={this.handleChange}/>
          <input name="pass" placeholder="password" type="password" onChange={this.handleChange} />
          <button >Login</button>
        </form>
            
        {this.state.errorPass && <div className="errorLoginView">{this.state.errorPass}</div>}
        {this.state.errorEmail && <div className="errorLoginView">{this.state.errorEmail}</div>}

        {/* <div className="errorLoginView">
          {this.state.error}
        </div> */}

      </section>
    );
  }
}
const mapStateToProps = ({ user }) => ({ isLogged: !!user });
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
