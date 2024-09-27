const advertiser = require("../models/advertiser") 
const { uploadFile, deleteFile } = require("../utils/cloudinary");


const addAdvertise = async (req, res) => {
    try {
        const { shopName, ownerName, village, amount } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: 'No image file uploaded.' });
        }
        // Upload image to Cloudinary
        const result = await uploadFile(req.file);
        console.log("Cloudinary Upload Result:", result); // This log is important

        const shopLogo = result;

        // Create a new advertiser instance
        const newAdvertise = new advertiser({
            shopName, 
            ownerName, 
            village, 
            amount, 
            shopLogo
        });

        const saveAd = await newAdvertise.save();
        console.log("New Advertiser added", saveAd);
        res.status(201).json(saveAd); 
    } catch (error) {
        console.error("Error adding Advertiser:", error);
        res.status(500).json({ error: error.message });
    }
};


const getAdvertiser = async (req,res)=>{
    try {
        const adverData = await advertiser.find();
        console.log(adverData)
        res.status(202).json(adverData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const getAdvertiserById = async (req, res) => {
    try {
        // extracting the ID from the request parameters
        const { id } = req.params;

        // finding the advertiser by ID
        const adverData = await advertiser.findById(id);

        // check if advertiser was found
        if (!adverData) {
            return res.status(404).json({ message: "Advertiser not found" });
        }

        console.log(adverData);
        res.status(200).json(adverData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const deleteAdvertiser = async (req, res) => {
    try {
        const { id } = req.params;

        const sponsor = await advertiser.findById(id);

        if (!sponsor) {
            return res.status(404).json({ message: "Advertiser not found" });
        }

        const publicId = sponsor.shopLogo.split('/').pop().split('.')[0];
        const cloudinaryResult = await deleteFile(publicId);

        if (cloudinaryResult.result !== 'ok') {
            throw new Error('Failed to delete image from Cloudinary');
        }
        await advertiser.findByIdAndDelete(id);

        res.status(200).json({ message: "Advertiser and associated image deleted successfully" });
    } catch (error) {
        console.error("Error deleting advertiser:", error);
        res.status(500).json({ error: error.message });
    }
};

const editAdvertiser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        // find the existing advertiser
        const existingAdvertiser = await advertiser.findById(id);
        if (!existingAdvertiser) {
            return res.status(404).json({ message: "Advertiser not found" });
        }

        // handle file upload if a new image is provided
        if (req.file) {
            // Delete old image from Cloudinary
            if (existingAdvertiser.shopLogo) {
                await deleteFile(existingAdvertiser.shopLogo);
            }
            
            // Upload new image
            const result = await uploadFile(req.file);
            updates.shopLogo = result;
        }

        // Update only the fields that are provided in the request
        Object.keys(updates).forEach((update) => {
            existingAdvertiser[update] = updates[update];
        });

        // Save the updated advertiser
        const updatedAdvertiser = await existingAdvertiser.save();

        res.status(200).json(updatedAdvertiser);
    } catch (error) {
        console.error("Error updating advertiser:", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addAdvertise,
    getAdvertiser,
    getAdvertiserById, 
    deleteAdvertiser,
    editAdvertiser,
};