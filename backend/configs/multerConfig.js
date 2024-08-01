const multer = require("multer");
// const path = require('path');
// const fs = require('fs');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dnys9p4ar",
  api_key: "168144747537394",
  api_secret: "4FcS_4EsC7Ban9cOgxcT-31SKYQ",
});

// const uploadDir = path.join(__dirname, 'uploads');

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Medgen",
    allowedFormats: ["png", "jpg", "jpeg"],
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
