import React, { useState } from 'react';
import 'isomorphic-fetch';
import Header from '../components/Header.js';
import Layout from '../components/layouts/Layout';

const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  // On submit, set submitted to true and sends a post request to send the user an email to login
  const onSubmit = e => {
    e.preventDefault();
    setSubmitted(true);

    fetch('/sendtoken', {
      method: 'POST',
      body: JSON.stringify({ user: email }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  };

  const onEmailChange = e => setEmail(e.target.value);

  return (
    <Layout>
      <Header />
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="container">
            <div className="jumbotron bg-light">
              <h1>
                Welcome to the <a href="https://1up.health">1upHealth</a> Demo
                App.
              </h1>
              <p>
                You can sign in, connect your health systems, and view your
                medical record. Learn more about the tech behind this app in the{' '}
                <a href="https://github.com/1uphealth/1upwebapp">git repo</a>.
              </p>
            </div>
          </div>
          <div className="container  text-center">
            {submitted ? (
              <h1>
                Check your email. <br />
                We sent a magic link to log into your account :)
              </h1>
            ) : (
              <form onSubmit={onSubmit}>
                <h3>Login using your email</h3>
                <input
                  onChange={onEmailChange}
                  value={email}
                  type="email"
                  className="form-control col-sm-4 login-email-input"
                  required
                  placeholder="email@domain.org"
                  autoFocus
                />
                <br />
                <input
                  type="submit"
                  className="btn btn-primary col-sm-4 mt-2"
                  value="Login"
                />
              </form>
            )}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <style jsx>{`
        .login-email-input {
          display: unset;
        }
      `}</style>
    </Layout>
  );
};

export default Login;
