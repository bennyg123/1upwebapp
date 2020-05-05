import Router from 'next/router';
import 'isomorphic-fetch';

/**
 * authenticates the user using their email and access token if passed through
 */
export const authenticate = async (req, res) => {
  const user = req
    ? { email: req.user, oneup_access_token: req.session.oneup_access_token }
    : getAuthUser();
  if (user) {
    return user;
  } else {
    req ? res.redirect('/login') : Router.push('/login');
    return null;
  }
};

/**
 * logs the user out if they press the logout key
 */
export const logoutEvent = eve => {
  if (eve.key === 'logout') {
    logout();
  }
};

/**
 * removes identifying data (email, access_token) from localstorage
 */
export const logout = () => {
  console.log('clearinglocalstorage');
  window.localStorage.removeItem('email');
  window.localStorage.removeItem('oneup_access_token');
  window.localStorage.setItem('logout', new Date());
  window.fetch('/logout', { method: 'POST' });
  Router.push('/logout');
};

/**
 * Gets the user email and access token from localstorage if they exist
 */
const getAuthUser = () => {
  try {
    return {
      email: window.localStorage.getItem('email'),
      oneup_access_token: window.localStorage.getItem('oneup_access_token'),
    };
  } catch (err) {
    return null;
  }
};
