const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  gst_No: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  pincode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  storePic: {
    type: String, 
  },
  approved : {
    type:Boolean,
    default : false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Store", storeSchema);
