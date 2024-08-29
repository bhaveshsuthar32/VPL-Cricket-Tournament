const spType = require("../models/sponsor"); 

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

module.exports = {
    addSponsorType,
};