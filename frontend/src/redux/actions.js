export function loggedIn(user) {
  return {
    type: 'LOGGED_IN',
    user: user,
  };
}

export function loggedOut(user) {
  return {
    type: 'LOGGED_OUT',
  };
}


// export default { loggedIn, loggedOut };