import React, { useEffect } from 'react';
import Header from '../components/Header.js';

const Logout = ({ user }) => {
  useEffect(() => {
    if (user) {
      try {
        window.localStorage.setItem('user', JSON.stringify(user));
      } catch (err) {
        console.error('unable to set email and access token');
      }
    } else {
      window.localStorage.removeItem('user');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <h1>Logged out!</h1>
    </div>
  );
};

Logout.getInitialProps = async function({ req }) {
  const user = req ? req.user : null;
  return { user };
};

export default Logout;
