const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "./uploads";
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, path.resolve(uploadPath));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;
