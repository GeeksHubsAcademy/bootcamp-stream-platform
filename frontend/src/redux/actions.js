import store from './index.js';
import Axios from 'axios';

let { dispatch } = store;

export async function loggedIn(password, email) {
   let response = await Axios.post('http://localhost:3001/user/login', { password, email });
   let user = response.data;
   dispatch({
     type: 'LOGGED_IN',
     user,
   });
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
  console.log('get bootcamps');

  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.get('http://localhost:3001/bootcamp/mine/', { headers: { Authorization: token } });
  let bootcamps = response.data;
  console.log(response);

  dispatch({
    type: 'BOOTCAMPS_LOADED',
    bootcamps,
  });
}

//de Juanma, no se si va aqui o que
export async function postRegister(name,lastname,email,password){
  console.log(name, lastname, email, password);

  let res = await Axios.post('http://localhost:3001/user/register', { name, lastname, email, password })
  console.log(res);


  return 'Registro válido';

}

export async function updateProfile(userData) {
  const user = store.getState().user;
  let token = user && user.token;
  let bodyFormData = new FormData();
  for (const key in userData) {
    if (userData[key]) {
      bodyFormData.set(key, userData[key]);
    }
  }
  // bodyFormData.append('image', imageFile);
  let response = await Axios.patch('http://localhost:3001/user/update', bodyFormData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: token }});
  let newUser = response.data;
  newUser.token = token;
  dispatch({
    type: 'UPDATE_PROFILE',
    user: newUser,
  });
}

// export default { loggedIn, loggedOut };
