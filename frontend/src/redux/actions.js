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

}

export async function loggedOut() {
  const user = store.getState().user
  let token = user && user.token;
  let response = await Axios.get('http://localhost:3001/user/logout', {headers: {Authorization:token }} );
  console.log(response);


  dispatch( {
    type: 'LOGGED_OUT',
  })
}


export async function getBootcamps() {
  console.log('get bootcamps');

  const user = store.getState().user
  let token = user && user.token;
  let response = await Axios.get('http://localhost:3001/bootcamp/mine/', {headers: {Authorization:token }} );
  let bootcamps = response.data;
  console.log(response);


  dispatch({
    type: 'BOOTCAMPS_LOADED',
    bootcamps,
  });
}





// export default { loggedIn, loggedOut };
