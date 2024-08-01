require('dotenv').config();

const express = require("express");
const app = express();
const port = 6969;
const cors = require("cors");
const path = require('path');

require('./configs/dbConfig');
// require('./auth');
require('./configs/multerConfig');
const sessionConfig = require("./configs/sessionConfig");
const passport = require("./configs/passportConfig");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, './configs/uploads')));
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());

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
