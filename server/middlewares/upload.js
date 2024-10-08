// const cloudinary = require("cloudinary").v2;
// const dotenv = require('dotenv');
// dotenv.config();

// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET 
// });

// const uploadFile = async (filePath) => {
//     try {
//         const result = await cloudinary.uploader.upload(filePath);
//         console.log(result);
//         return result;
//     } catch (error) {
//         console.log(error.message);
//         throw error; 
//     }
// }

// const deleteFile = async (publicId) => {
//   try {
//     const result = await cloudinary.uploader.destroy(publicId);
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// };


// module.exports = {
//     uploadFile,
// deleteFile
// };




const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage({}),
  limits: { fileSize: 500000 },
});

module.exports = upload;
