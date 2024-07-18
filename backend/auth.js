const passport = require('passport');

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     "641497103081-urqk46akuc8hj809f4iljk9503m53mbc.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
