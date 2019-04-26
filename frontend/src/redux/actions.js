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

  // return ;
}

export function loggedOut() {
  dispatch( {
    type: 'LOGGED_OUT',
  })
}

// export default { loggedIn, loggedOut };
