import Router from 'next/router';
import 'isomorphic-fetch';

// If the user is logged in returns the user, otherwise redirects back to the login page
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

// Logs the user out when they click the logout key
export const logoutEvent = (eve, url) => {
  if (eve.key === 'logout') {
    logout();
  }
};

// Clears local storage of the access token and email and sets the date when they logged out
export const logout = () => {
  console.log('clearinglocalstorage');
  window.localStorage.removeItem('email');
  window.localStorage.removeItem('oneup_access_token');
  window.localStorage.setItem('logout', new Date());
  window.fetch('/logout', { method: 'POST' });
  Router.push('/logout');
};

// Gets the user email and token from localstorage
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
