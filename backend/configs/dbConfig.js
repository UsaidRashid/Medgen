const mongoose = require("mongoose");

// const mongoUrl = "mongodb://127.0.0.1:27017/Medgen";
const mongoUrl = process.env.DATABASE_URL;


async function connectDB() {
    await mongoose.connect(mongoUrl);
}

connectDB()
  .then(() => {
    console.log("Medgen Database connected successfully");
  })
  .catch((error) => {
    console.log("Error connecting to database ", error);
    process.exit(1); 
  });


module.exports = connectDB;