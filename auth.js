const passwordless = require('passwordless');
const MemoryStore = require('passwordless-memorystore');
const email = require('emailjs');
const oneup = require('./oneup.js');
const config = require('./config.json');

const smtpServer = email.server.connect(config.emailServer);

// Sends an email to the user with an access token once they submit their email
passwordless.init(new MemoryStore(), { skipForceSessionSave: true });
passwordless.addDelivery((token, uid, recipient, callback) => {
  console.log('recipient', recipient);
  oneup.getOrMakeOneUpUserId(recipient, () => {});
  smtpServer.send(
    {
      text: `Welcome to the 1upHealth Demo! Click this link to login \n\n\n\n${config.baseURL}/?token=${token}&uid=${uid} \n\n`,
      attachment: {
        data: `Welcome to the 1upHealth Demo Click <a href="${config.baseURL}/?token=${token}&uid=${uid}">this link</a> to login`,
        alternative: true,
      },
      from: config.email.sender,
      to: recipient,
      subject: '1upHealth demo login token',
    },
    (err, message) => {
      if (err) {
        console.log(`could not send email, here's the token url`);
        console.log(
          '\ntoken url',
          `${config.baseURL}/?token=${token}&uid=${uid}\n`,
        );
      }
    },
  );
});

// Checks if the user's access token exists in the session or cache and is not expired and lets them continue, 
// otherwise redirects them to the login page.

const authUser = (req, res, next) => {
  if (
    !!req.session &&
    Object.keys(req.session).length > 0 &&
    !!req.session.passwordless &&
    req.session.authorization
  ) {
    let oneup_access_token = oneup.accessTokenCache[req.session.passwordless];

    if (oneup_access_token) {
      req.session.oneup_access_token = oneup_access_token;
      if (!req.headers.authorization) {
        res.redirect('/login');
      } else {
        req.session.oneup_access_token = req.headers.authorization.split(
          ' ',
        )[1];
        next();
      }
    } else {
      next();
    }
  } else {
    res.redirect('/login');
  }
};

exports.passwordless = passwordless;
exports.authUser = authUser;
