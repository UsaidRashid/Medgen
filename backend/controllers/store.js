const Store = require("../models/stores");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

module.exports.registerStore = async (req, res) => {
  try {
    const { gst_No, name, latitude, longitude, pincode, address, token } =
      req.body;

    if (!token)
      return res.status(400).json({
        message:
          "Seems Like you are not logged in... Please Login for registering your store!",
      });
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!gst_No || !name || !pincode || !address)
      return res.status(400).json({
        message:
          "Some required information is missing... Please fill in all the fields!",
      });

    const storePic = req.file ? req.file.filename : null;

    const store = new Store({
      gst_No,
      name,
      latitude,
      longitude,
      pincode,
      address,
      storePic,
      owner: decodedToken.user._id,
      storePic,
    });

    if (storePic) {
      const cloudinaryUrl = cloudinary.url(storePic, {
        secure: true,
      });
      store.storePic = cloudinaryUrl;
    }

    const newStore = await store.save();

    newStore.populate("owner");

    const user = await User.findOneAndUpdate(
      { _id: decodedToken.user._id },
      { store: newStore._id },
      { new: true, populate: "store" }
    );

    const newToken = jwt.sign({ user }, process.env.JWT_SECRET, {
      algorithm: "HS256",
    });
    res
      .status(200)
      .json({ message: "Your Store Successfully Added...", token: newToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.updateStore = async (req, res) => {
  try {
    const {
      gst_No,
      name,
      pincode,
      latitude,
      longitude,
      address,
      token,
      approved,
    } = req.body;
    const storePic = req.file ? req.file.filename : null;

    if (!token)
      return res
        .status(400)
        .json({ message: "Something went wrong! Are you logged in?" });

    if (!gst_No || !name || !pincode || !address)
      return res.status(400).json({
        message:
          "Some required information is missing... Please fill in all the fields!",
      });
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const updatedProfile = {
      gst_No,
      name,
      latitude,
      longitude,
      pincode,
      address,
      owner: decodedToken.user._id,
      storePic,
      approved,
    };

    if (storePic) {
      const cloudinaryUrl = cloudinary.url(storePic, {
        secure: true,
      });
      updatedProfile.storePic = cloudinaryUrl;
    }

    const store = await Store.findOneAndUpdate({ gst_No }, updatedProfile, {
      new: true,
      runValidators: true,
    });

    const updatedUser = await User.findOne({
      username: decodedToken.user.username,
    }).populate("store");

    const newToken = jwt.sign({ user: updatedUser }, process.env.JWT_SECRET, {
      algorithm: "HS256",
    });

    if (!store) return res.status(400).json({ message: "Store not found" });
    res.status(200).json({
      message: "Store Details Updated Successfully...",
      token: newToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.deleteStore = async (req, res) => {
  try {
    const { _id } = req.body;
    const store = await Store.findOneAndDelete({ _id });
    const user = await User.findOne({ _id: store.owner }).populate("store");
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      algorithm: "HS256",
    });
    if (!store) return res.status(201).json({ message: "Store not found" });
    res.status(200).json({ message: "Store deleted successfully...", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.fetchStores = async (req, res) => {
  try {
    const { _id, pincode } = req.body;
    if (_id === undefined && pincode === undefined) {
      const stores = await Store.find({ approved: true }).populate("owner");
      res
        .status(200)
        .json({ message: "Here we can see the data of all Stores...", stores });
    } else if (_id !== undefined) {
      const store = await Store.findOne({ _id }).populate("owner");
      if (!store) return res.status(201).json({ message: "Store not found" });
      res
        .status(200)
        .json({ message: "Your Requested Store Details...", store });
    } else {
      const stores = await Store.find({ pincode, approved: true }).populate(
        "owner"
      );
      res.status(200).json({
        message: "Here are all the stores at the requested pincode...",
        stores,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.fetchUnapprovedStores = async (req, res) => {
  try {
    const stores = await Store.find({ approved: false });
    return res.status(200).json({
      message: "The Lists of unapproved Stores fetched successfully",
      stores,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.acceptStore = async (req, res) => {
  try {
    const { _id } = req.body;
    await Store.findOneAndUpdate(
      { _id },
      { approved: true },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json({ message: "Store Approved Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
