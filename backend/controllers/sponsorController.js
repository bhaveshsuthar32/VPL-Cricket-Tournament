const spType = require("../models/sponsor");
const { uploadFile } = require("../middlewares/upload");
const foodSpon = require("../models/addSponsor")

const addSponsorType = async (req, res) => {
    const spdata = req.body;
    try {
        const newSponType = new spType(spdata);
        const saveSpon = await newSponType.save();
        console.log(saveSpon);
        res.status(201).json(saveSpon);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
};


const getSponsorType = async (req, res) => {
    try {
        const spData = await spType.find();
        res.status(200).json(spData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const addFoodSpon = async (req, res) => {

    try {

        const { sponDay, fullName, village, amount } = req.body;
        // Upload image to Cloudinary
        const result = await uploadFile(req.file.path);
        const spImage = result.secure_url

        // Create a new food sponsor entry
        const newFoodSpon = new foodSpon({
            sponDay, fullName, village, amount, spImage
        });

        // Save the new food sponsor to the database
        const savedFoodSpon = await newFoodSpon.save();
        console.log(newFoodSpon)
        res.status(201).json(savedFoodSpon); // Return the saved document
    } catch (error) {
        console.error("Error adding food sponsor:", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addSponsorType,
    getSponsorType,
    addFoodSpon,
};