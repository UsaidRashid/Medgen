const session = require("express-session");

const sessionOptions = {
  secret: "my-session-secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, 
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true, 
  },
};

module.exports = session(sessionOptions);
