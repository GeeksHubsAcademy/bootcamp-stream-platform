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
import AdminBootcamps from './containers/Admin/bootcamps';
import PrivateZone from './components/PrivateZone';
import CreatePostCode from './components/CreatePost/CreatePostCode/CreatePostCode';
import Player from './components/CreatePost/Reproductor';

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
          <AdminBootcamps path='admin/bootcamps' />
          <AdminEditBootcamp path='admin/bootcamp/new' />
          <AdminEditBootcamp path='admin/bootcamp/:id' />
          <CreatePostCode path='asd' />
          <Redirect from='admin' to='admin/bootcamps' noThrow />
          <Redirect from='*' to='bootcamps' noThrow />
        </PrivateZone>
        <Player path='micro' />
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
