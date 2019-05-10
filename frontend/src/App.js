import React from 'react';
import { Router, Redirect } from '@reach/router';

import Bootcamp from './containers/Bootcamp/Bootcamp';
import Login from './containers/Login/Login';
import EditProfile from './containers/Profile/EditProfile';
import MyBootcamps from './containers/Profile/MyBootcamps';
import Register from './containers/Register/Register';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AdminEditBootcamp from './containers/Admin/EditBootcamp.jsx';
import AdminBootcamps from './containers/Admin/bootcamps.jsx';
import PrivateZone from './guards/PrivateZone';
import AdminZone from './guards/AdminZone';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Router className='main'>
        <PrivateZone path='/'>
          <Bootcamp path='bootcamp/:id' />
          <EditProfile path='profile' />
          <MyBootcamps path='bootcamps' />
          <AdminZone path="admin">
            <AdminBootcamps path='bootcamps' />
            <AdminEditBootcamp path='bootcamp/new' />
            <AdminEditBootcamp path='bootcamp/:id' />
            <Redirect from='/' to='admin/bootcamps' noThrow />
          </AdminZone>
          <Redirect from='*' to='bootcamps' noThrow />
        </PrivateZone>
        <Register path='register' />
        <Login path='login' />
        <NotFound path='notFound' />
        <Redirect default from='*' to='notFound' noThrow />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
