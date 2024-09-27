const hallOfFame = require("../models/hallOfFame") 
const { uploadFile, deleteFile } = require("../utils/cloudinary");


const addHallOfFame = async (req, res) => {
    try {
        const { role, name, village, team, score } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: 'No image file uploaded.' });
        }
        // Upload image to Cloudinary
        const result = await uploadFile(req.file);
        console.log("Cloudinary Upload Result:", result); // This log is important

        const hofImage = result;

        // Create a new hall fo fame instance
        const newHallOfFame = new hallOfFame({
            role, 
            name, 
            village, 
            team, 
            score,
            hofImage
        });

        const saveAd = await newHallOfFame.save();
        console.log("New Hall Of Fame added", saveAd);
        res.status(201).json(saveAd); 
    } catch (error) {
        console.error("Error adding Hall Of Fame:", error);
        res.status(500).json({ error: error.message });
    }
};


const getHallOfFame = async (req,res)=>{
    try {
        const hofData = await hallOfFame.find();
        console.log(hofData)
        res.status(202).json(hofData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const getHallOfFameById = async (req, res) => {
    try {
        // extracting the ID from the request parameters
        const { id } = req.params;

        // finding the hall fo fame by ID
        const hofData = await hallOfFame.findById(id);

        // check if hall of fame was found
        if (!hofData) {
            return res.status(404).json({ message: "Hall Of Fame not found" });
        }

        console.log(hofData);
        res.status(200).json(hofData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}

const deleteHallOfFame = async (req, res) => {
    try {
        const { id } = req.params;

        const hof = await hallOfFame.findById(id);

        if (!hof) {
            return res.status(404).json({ message: "Hall Of Fame not found" });
        }

        const publicId = hof.hofImage.split('/').pop().split('.')[0];
        const cloudinaryResult = await deleteFile(publicId);

        if (cloudinaryResult.result !== 'ok') {
            throw new Error('Failed to delete image from Cloudinary');
        }
        await hallOfFame.findByIdAndDelete(id);

        res.status(200).json({ message: "Hall Of Fame and associated image deleted successfully" });
    } catch (error) {
        console.error("Error deleting hall of fame:", error);
        res.status(500).json({ error: error.message });
    }
};

const editHallOfFame = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        // find the existing hall of fame
        const existingHOF = await hallOfFame.findById(id);
        if (!existingHOF) {
            return res.status(404).json({ message: "Hall Of Fame not found" });
        }

        // handle file upload if a new image is provided
        if (req.file) {
            // Delete old image from Cloudinary
            if (existingHOF.hofImage) {
                await deleteFile(existingHOF.hofImage);
            }
            
            // Upload new image
            const result = await uploadFile(req.file);
            updates.hofImage = result;
        }

        // Update only the fields that are provided in the request
        Object.keys(updates).forEach((update) => {
            existingHOF[update] = updates[update];
        });

        // Save the updated hall of fame
        const updatedHOF = await existingHOF.save();

        res.status(200).json(updatedHOF);
    } catch (error) {
        console.error("Error updating hall of fame:", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addHallOfFame,
    getHallOfFame,
    getHallOfFameById, 
    deleteHallOfFame,
    editHallOfFame,
};