const User = require("../models/users");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

module.exports.signup = async (req, res) => {
  try {
    let { username, name, email, contact, password } = req.body;

    const profilePic = req.file ? req.file.path : null;

    if (!username || !name || !email || !contact || !password)
      return res
        .status(400)
        .json({ message: "All the fields are required for registration!" });

    const existingEmail = await User.findOne({ email });

    if (existingEmail)
      return res
        .status(400)
        .json({ message: "The given email is already registered!" });

    const newUser = new User({
      name,
      email,
      username,
      contact,
      profilePic,
    });

    const registeredUser = await User.register(newUser, req.body.password);

    if (profilePic) {
      const cloudinaryUrl = cloudinary.url(profilePic, {
        secure: true,
      });
      registeredUser.profilePic = cloudinaryUrl;
    }

    req.login(registeredUser, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error saving the user", err });
      }
      const token = jwt.sign({ user: registeredUser }, process.env.JWT_SECRET, {
        algorithm: "HS256",
      });

      return res
        .status(200)
        .json({ message: "User Registered Successfully!", token });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).populate(
      "store"
    );
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      algorithm: "HS256",
    });
    return res
      .status(200)
      .json({ message: "User Logged in successfully", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.logout = async (req, res) => {
  try {
    req.logout((err) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Error while logging out ", err });
      else return res.status(200).json({ message: "Logged out successfully" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.updateDetails = async (req, res) => {
  try {
    const { name, email, contact, token } = req.body;
    const profilePic = req.file ? req.file.filename : null;

    if (!name || !email)
      return res
        .status(400)
        .json({ message: "Required Fields shouldn't be ignored!" });

    if (!token)
      return res
        .status(400)
        .json({ message: "Something went wrong! Are you logged in?" });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const username = decodedToken.user.username;

    const updatedProfile = {
      name,
      email,
      contact,
      profilePic,
    };

    if (profilePic) {
      const cloudinaryUrl = cloudinary.url(profilePic, {
        secure: true,
      });
      updatedProfile.profilePic = cloudinaryUrl;
    }

    const updatedUser = await User.findOneAndUpdate(
      { username },
      updatedProfile,
      { new: true, runValidators: true }
    ).populate("store");

    const newToken = jwt.sign({ user: updatedUser }, process.env.JWT_SECRET, {
      algorithm: "HS256",
    });

    if (!updatedUser)
      return res.status(400).json({
        message: "Couldn't find user profile ! Please try logging in again",
      });

    return res
      .status(200)
      .json({ message: "User Updated successfully", token: newToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.fetchToken = async (req, res) => {
  try {
    const { _id } = req.body;
    const user = await User.findOne({ _id }).populate("store");
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      algorithm: "HS256",
    });
    return res
      .status(200)
      .json({ message: "Fetched Token Successfully", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports.signupGoogle = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
