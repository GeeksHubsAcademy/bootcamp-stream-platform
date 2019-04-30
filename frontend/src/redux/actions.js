import store from './index.js';
import Axios from 'axios';

let { dispatch } = store;

export async function loggedIn(password, email) {
//  let response = await Axios.post('http://localhost:3001/user/login', { password, email });
//  let user = response.data;
//  dispatch({
//    type: 'LOGGED_IN',
//    user,
//  });
dispatch({
  type: 'LOGGED_IN',
  user: {role:'admin'},
});

}

export async function loggedOut() {
  // const user = store.getState().user
  // let token = user && user.token;
  // let response = await Axios.get('http://localhost:3001/user/logout', {headers: {Authorization:token }} );
  // console.log(response);


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

//de Juanma, no se si va aqui o que
export async function postRegister(name,surname,email,password,password2){
  let response = Axios.post('http://localhost:3001/user/register',{email,password})
  .then(res =>{
    localStorage.setItem('authorization', res.headers.authorization);//guardamos el token en localstorage para que la sesión se mantenga abierta
    setError('');
  })
  .catch(err => {
      console.log(err);
      setError('Wrong credentials');
  })
  //let response = await Axios.post('http://localhost:3001/register/', {name,surname,email,password,password2} );
}

export async function updateProfile(user) {  
//  let response = await Axios.post('http://localhost:3001/user/profile', { user });
//  let user = response.data;
    dispatch({
      type: 'UPDATE_PROFILE',
      user,
    });
    console.log('Saved', user);
  }



// export default { loggedIn, loggedOut };
