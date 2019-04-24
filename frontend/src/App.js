import React from 'react';

import {Router, Redirect} from '@reach/router';
import Bootcamp from './containers/Bootcamp/Bootcamp';
import Login from './containers/Login/Login';
import Admin from './containers/Admin/Admin';
import EditProfile from './containers/Profile/EditProfile';
import MyBootcamps from './containers/Profile/MyBootcamps';
import Register from './containers/Register/Register';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Router className='main'>
        <Bootcamp path='bootcamp/:id' />
        <Register path='register' />
        <EditProfile path='profile' />
        <Admin path='admin' />
        <MyBootcamps path='profile/my-bootcamps' />
        <Login path='login' />
        <NotFound path='notFound' />
        <Redirect default from='*' to='notFound' noThrow />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
