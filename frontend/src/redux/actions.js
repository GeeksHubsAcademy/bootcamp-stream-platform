import store from './index.js';
let { dispatch } = store;

export async function loggedIn(pass, email) {
  // let user = await axios.post('http://api.com/login', {pass, email});
  dispatch({
    type: 'LOGGED_IN',
    user: {
      _id: 123,
      name: 'Juan',
      surname: 'Garnica',
      role: 'admin',
      email: 'juan@geekhubs.com',
      imagePath: null,
      token: 'AASFDSDFQ298723ÑLKJWD98723HJDW76D2YBD623YB326D',
    },
  });
  return ;
}

export function loggedOut() {
  return {
    type: 'LOGGED_OUT',
  };
}

// export default { loggedIn, loggedOut };
