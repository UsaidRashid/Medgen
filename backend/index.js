const express = require("express");
const app = express();
const port = 6969;
const cors = require("cors");
const mongoose = require("mongoose");

const mongoUrl = "mongodb://127.0.0.1:27017/Medgen";

main()
  .then(() => {
    console.log("Medgen Database connected successfully");
  })
  .catch((error) => {
    console.log("Error connecting to database ", error);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const User = require("./models/users");

// require('./auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const passport = require("passport");
const session = require("express-session");
const localStrategy = require("passport-local").Strategy;

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

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((err, req, res, next) => {
  console.error(err);

  if (err.status) res.status(err.status).json({ message: err.message });
  else res.status(500).json({ message: "Internal Server Error" });
});

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

const userRouter = require("./routes/users");
const storeRouter = require("./routes/store");
const mediloRouter = require("./routes/medilo");
const adminRouter = require("./routes/admin");

app.use("/users", userRouter);
app.use("/medilo", mediloRouter);
app.use("/store", storeRouter);
app.use("/admin", adminRouter);

app.listen(port, (req, res) => {
  console.log(`Server listening to port ${port}`);
});
