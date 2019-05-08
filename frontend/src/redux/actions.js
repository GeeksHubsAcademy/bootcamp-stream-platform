import store from './index.js';
import Axios from 'axios';

let { dispatch } = store;

export async function removePost(postId) {

  const user = store.getState().user
  let token = user && user.token;
  let response = await Axios.delete('http://localhost:3001/post/' + postId, { headers: { Authorization: token } });

   let bootcamps = response.data;
   dispatch({
     type: 'BOOTCAMPS_LOADED',
     bootcamps,
   });
}



export async function sendPost(post, streamId) {
  const user = store.getState().user
  let token = user && user.token;
  let response = await Axios.post('http://localhost:3001/post/' + streamId, post, { headers: { Authorization: token } });

   let bootcamps = response.data;
   dispatch({
     type: 'BOOTCAMPS_LOADED',
     bootcamps,
   });
}


export async function loggedIn(password, email) {
  let response = await Axios.post('http://localhost:3001/user/login', { password, email });
  let user = response.data;
  //user.role = 'admin';
  dispatch({
    type: 'LOGGED_IN',
    user,
  });
   getUsers();
   getBootcamps();
  // dispatch({
  //   type: 'LOGGED_IN',
  //   user: {
  //     _id: 123,
  //     name: 'Juan',
  //     lastname: 'Garnica',
  //     role: 'admin',
  //     email: 'juan@geekhubs.com',
  //     imagePath: null,
  //     token: 'AASFDSDFQ298723ÑLKJWD98723HJDW76D2YBD623YB326D',
  //   },
  // });
}

export async function loggedOut() {
  // const user = store.getState().user
  // let token = user && user.token;
  // let response = await Axios.get('http://localhost:3001/user/logout', {headers: {Authorization:token }} );
  // console.log(response);

  dispatch({
    type: 'LOGGED_OUT',
  });
}

export async function getBootcamps() {
  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.get('http://localhost:3001/bootcamp/mine/', { headers: { Authorization: token } });
  let bootcamps = response.data;
  dispatch({
    type: 'BOOTCAMPS_LOADED',
    bootcamps,
  });
}

export async function postRegister({name, lastname, email, password}) {
  console.log(name, lastname, email, password);

  let res = await Axios.post('http://localhost:3001/user/register', { name, lastname, email, password });
  console.log(res);

  return 'Registro válido';
}

export async function updateProfile(userData, image) {
  const user = store.getState().user;
  let token = user && user.token;
  let bodyFormData = new FormData();
  for (const key in userData) {
    if (userData[key]) {
      bodyFormData.set(key, userData[key]);
    }
  }
  image && bodyFormData.append('image', image);
  // To view server error bodyFormData/{}
  let response = await Axios.patch('http://localhost:3001/user', bodyFormData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: token } });
  let newUser = response.data;
  newUser.token = token;
  dispatch({
    type: 'UPDATE_PROFILE',
    user: newUser,
  });
}

export async function deleteImage() {
  const user = store.getState().user;
  let token = user && user.token;
  let bodyFormData = new FormData();
  bodyFormData.set("imagePath", '');
  let response = await Axios.patch('http://localhost:3001/user', bodyFormData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: token } });
  let updatedUser = response.data;
  console.log(updatedUser);
  updatedUser.token = token;
  dispatch({
    type: 'UPDATE_PROFILE',
    user: updatedUser,
  });
}

export async function editBootcamp(bootcamp) {
  console.log('editBootcamp', bootcamp);

  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.patch('http://localhost:3001/bootcamp/' + bootcamp._id, bootcamp, { headers: { Authorization: token } });
   let bootcamps = response.data;
  console.log(bootcamps);
  dispatch({
    type: 'BOOTCAMPS_LOADED',
    bootcamps,
  });

}


export async function newBootcamp(bootcamp) {
  console.log(bootcamp);

  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.post('http://localhost:3001/bootcamp/', bootcamp, { headers: {  Authorization: token } });

  let bootcamps = response.data
  dispatch({
    type: 'BOOTCAMPS_LOADED',
    bootcamps,
  });


}



export async function getUsers() {
   const user = store.getState().user;
   let token = user && user.token;
  let response = await Axios.get('http://localhost:3001/user/', { headers: { Authorization: token } });

  let users = response.data
  dispatch({
    type: 'USERS_LOADED',
    users,
  });

}

export async function deleteUser() {
  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.delete('http://localhost:3001/user/delete/', { headers: {  Authorization: token } });
  let deletedUser = response.data;
  deletedUser.token = token;
  dispatch({
    type: 'DELETE_USER',
    deletedUser,
  });
}
