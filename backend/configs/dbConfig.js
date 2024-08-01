const mongoose = require("mongoose");

// const mongoUrl = "mongodb://127.0.0.1:27017/Medgen";
const mongoUrl = "mongodb+srv://usaidrashid0:JnNOJqWTQQix4GaG@cluster0.q1osc9o.mongodb.net/Medgen?retryWrites=true&w=majority&appName=Cluster0"


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