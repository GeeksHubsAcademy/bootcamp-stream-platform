import { dispatch } from './index.js';
// import store from './index.js';
// let { dispatch } = store;


export async function loggedIn(pass, email) {
  let user = await axios.post('http://api.com/login', {pass, email});
    dispatch({
      type: 'LOGGED_IN',
      user: user,
    });
   return user
}

export function loggedOut() {
  return {
    type: 'LOGGED_OUT',
  };
}

// export default { loggedIn, loggedOut };
