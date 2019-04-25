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
import AdminEditBootcamp from './containers/Admin/EditBootcamp.jsx'
import AdminBootcamps from './containers/Admin/Admin'
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Router className='main'>
        <Register path='register' />
        <Login path='login' />
        <Bootcamp path='bootcamp/:id' />
        <EditProfile path='profile' />
        <MyBootcamps path='profile/my-bootcamps' />
        <AdminBootcamps path='admin/bootcamps' />
        <AdminEditBootcamp path='admin/bootcamps/new' />
        <AdminEditBootcamp path='admin/bootcamps/:id' />
        <NotFound path='notFound' />
        <Redirect default from='*' to='notFound' noThrow />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
