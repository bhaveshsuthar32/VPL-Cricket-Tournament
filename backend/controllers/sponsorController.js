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


const getSponsorType = async (req,res) => {
    try {
        const spData = await spType.find();  
        res.status(200).json(spData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {
    addSponsorType,
    getSponsorType,
};