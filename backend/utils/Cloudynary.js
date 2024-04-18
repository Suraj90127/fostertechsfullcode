const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "djrmit6qf",
  api_key: "316457833885636",
  api_secret: "BHDQBcw3HSWJEor741LNMIcsAZg",
});

const cloudinaryUploadImg = async (fileToUploads) => {
  try {
    const result = await cloudinary.uploader.upload(fileToUploads);
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

// const cloudinaryDeleteImg = async (fileToDelete) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.destroy(fileToDelete, (result) => {
//       resolve(
//         {
//           url: result.secure_url,
//           asset_id: result.asset_id,
//           public_id: result.public_id,
//         },
//         {
//           resource_type: "auto",
//         }
//       );
//     });
//   });
// };

module.exports = { cloudinaryUploadImg };
