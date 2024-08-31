const advertiser = require("../models/advertiser") 
const { uploadFile } = require("../middlewares/upload");


const addAdvertise = async (req, res) => {

    try {

        const { shopName, ownerName, village, amount } = req.body;

        // Upload image to Cloudinary
        const result = await uploadFile(req.file.path);
        const shopLogo = result.secure_url

        const newAdvertise = new advertiser({
            shopName, ownerName, village, amount, shopLogo
        });

        const saveAd = await newAdvertise.save();
        console.log(newAdvertise)
        res.status(201).json(saveAd); 
    } catch (error) {
        console.error("Error adding food sponsor:", error);
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

module.exports = {
    addAdvertise,
    getAdvertiser,
};