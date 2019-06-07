import store from './index.js';
import Axios from 'axios';

const baseurl =
  process.env.NODE_ENV === 'production'
    ? 'https://murmuring-crag-16002.herokuapp.com'
    : 'http://localhost:3001';

let { dispatch } = store;

export async function removePost(postId) {
  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.delete(baseurl + '/post/' + postId, {
    headers: { Authorization: token },
  });

  let bootcamps = response.data;
  dispatch({
    type: 'BOOTCAMPS_LOADED',
    bootcamps,
  });
}

export async function sendPost(post, streamId) {
  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.post(baseurl + '/post/' + streamId, post, {
    headers: { Authorization: token },
  });

  let bootcamps = response.data;
  dispatch({
    type: 'BOOTCAMPS_LOADED',
    bootcamps,
  });
}

export async function loggedIn(password, email) {
  let response = await Axios.post(baseurl + '/user/login', { password, email });
  let user = response.data;
  dispatch({
    type: 'LOGGED_IN',
    user,
  });
  getUsers();
  getBootcamps();
}

export async function loggedOut() {
  const user = store.getState().user;
  let token = user && user.token;
  // let response = await Axios.get(baseurl + '/user/logout', {headers: {Authorization:token }} );
  // console.log(response);

  // Remove user on store even if not network
  Axios.get(baseurl + '/user/logout', { headers: { Authorization: token } });

  dispatch({
    type: 'LOGGED_OUT',
  });
}

export async function getBootcamps() {
  try {
    const user = store.getState().user;
    let token = user && user.token;
    let response = await Axios.get(baseurl + '/bootcamp/mine/', {
      headers: { Authorization: token },
    });
    let bootcamps = response.data;
    dispatch({
      type: 'BOOTCAMPS_LOADED',
      bootcamps,
    });
  } catch (error) {
    console.error(error.message);

    openNotification("Couldn't get data:\n" + error.message, 'error');
  }
}

export async function postRegister({ name, lastname, email, password }) {
  try {
    let res = await Axios.post(baseurl + '/user/register', {
      name,
      lastname,
      email,
      password,
    });
    console.log('registro completado', res);
  } catch (error) {
    console.dir(error);
    throw error;
  }

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
  let response = await Axios.patch(baseurl + '/user', bodyFormData, {
    headers: { 'Content-Type': 'multipart/form-data', Authorization: token },
  });
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
  bodyFormData.set('imagePath', '');
  let response = await Axios.patch(baseurl + '/user', bodyFormData, {
    headers: { 'Content-Type': 'multipart/form-data', Authorization: token },
  });
  let updatedUser = response.data;
  console.log(updatedUser);
  updatedUser.token = token;
  dispatch({
    type: 'UPDATE_PROFILE',
    user: updatedUser,
  });
}

export async function editBootcamp(bootcamp) {
  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.patch(
    baseurl + '/bootcamp/' + bootcamp._id,
    bootcamp,
    { headers: { Authorization: token } },
  );
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
  let response = await Axios.post(baseurl + '/bootcamp/', bootcamp, {
    headers: { Authorization: token },
  });

  let bootcamps = response.data;
  dispatch({
    type: 'BOOTCAMPS_LOADED',
    bootcamps,
  });
}

export async function getUsers() {
  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.get(baseurl + '/user/', {
    headers: { Authorization: token },
  });

  let users = response.data;
  dispatch({
    type: 'USERS_LOADED',
    users,
  });
}

export async function deleteUser() {
  const user = store.getState().user;
  let token = user && user.token;
  let response = await Axios.delete(baseurl + '/user/delete/', {
    headers: { Authorization: token },
  });
  let deletedUser = response.data;
  deletedUser.token = token;
  dispatch({
    type: 'DELETE_USER',
    deletedUser,
  });
}

export async function sendHeartBeat() {
  const user = store.getState().user;
  let token = user && user.token;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => sendData(coords),
      console.error,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  } else {
    console.error('no se puede acceder a la posición del usuario');
  }
  async function sendData(coords) {

    let response = await Axios.post(
      baseurl + '/heartbeat/',
      {
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy,
      },
      { headers: { Authorization: token } },
    );
    console.log(response);
  }
}

export async function closeNotification(id) {
  dispatch({
    type: 'CLOSE_NOTIFY',
    id,
  });
}

export async function openNotification(text, type) {
  dispatch({
    type: 'OPEN_NOTIFY',
    notification: {
      id: Date.now(),
      text,
      type,
    },
  });
}

(async function onStartUp() {
  try {
    await getBootcamps();
    await getUsers();
    sendHeartBeat();
    // setInterval(sendHeartBeat, 1000 * 60 * 15); // every 15 min
  } catch (error) {
    console.error(error.message);
    openNotification("Couldn't get data:\n" + error.message, 'error');
  }
})();
