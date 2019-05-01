import React from 'react';
import { Router, Redirect } from '@reach/router';

import Bootcamp from './containers/Bootcamp/Bootcamp';
import Login from './containers/Login/Login';
import EditProfile from './containers/Profile/EditProfile';
import MyBootcamps from './containers/Profile/MyBootcamps';
import Register from './containers/Register/Register';
import NotFound from './components/NotFound';
import Navigation2 from './components/Navigation2';
import Footer from './components/Footer';
import AdminEditBootcamp from './containers/Admin/EditBootcamp.jsx';
import AdminBootcamps from './containers/Admin/bootcamps.jsx';
import PrivateZone from './components/PrivateZone';

import './App.scss';
// import PublicZone from './components/PublicZone';

function App() {
  return (
    <div className='App'>
      <Navigation2 />
      <Router className='main'>
        <PrivateZone path='/'>
          <Bootcamp path='bootcamp/:id' />
          <EditProfile path='profile' />
          <MyBootcamps path='bootcamps' />
          <AdminBootcamps path='admin/bootcamps' />
          <AdminEditBootcamp path='admin/bootcamps/new' />
          <AdminEditBootcamp path='admin/bootcamps/:id' />
          <Redirect from='admin' to='admin/bootcamps' noThrow />
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
