const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
});

const uploadFile = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error.message);
        throw error; // Ensure errors are thrown so they can be handled in the controller
    }
}

module.exports = {
    uploadFile
};
