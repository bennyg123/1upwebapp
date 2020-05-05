import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import Header from '../components/Header.js';
import { authenticate } from '../utils';

// var createReactClass = require('create-react-class');

// TODO decide: is Iframe component useful
// eslint-disable-next-line no-unused-vars
// var Iframe = createReactClass({
//   render: function() {
//     return <div></div>;
//   },
// });

const Home = ({ user }) => {
  const { email, oneup_access_token } = user;
  // On ComponentDidMount, if the user exists set their access token and email in localstorage
  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem('email', email);
        localStorage.setItem('oneup_access_token', oneup_access_token);
      } catch (err) {
        console.error('unable to set email and access token');
      }
    } else {
      localStorage.remove('email');
      localStorage.remove('oneup_access_token');
    }
  }, [user, oneup_access_token, email]);

  return (
    <Layout>
      <Header user={user} />
      <div className="text-center">
        <h1>{`Welcome to 1upHealth's Demo App`}</h1>
        <h2 className="text-center">Link your providers</h2>
      </div>
      <iframe
        title="Search"
        className="search-box"
        src={`https://system-search.1up.health/search/?access_token=${oneup_access_token}`}
      />
      <br />
      <div className="text-center">
        <Link href="/dashboard">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <h3>Go to your medical dashboard</h3>
          </a>
        </Link>
      </div>
      <style jsx>{`
        div {
          text-align: center;
        }
        ul {
          list-style: none;
        }
        .search-box {
          border: 0;
          height: 500px;
          width: 100%;
        }
      `}</style>
    </Layout>
  );
};

Home.getInitialProps = async function({ res, req }) {
  // authenticates and returns the user on the server side
  const user = await authenticate(req, res);

  return { user };
};

export default Home;
