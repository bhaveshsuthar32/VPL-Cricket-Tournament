const signSchema = require("../models/signUp");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../utils/nodemailer');
const Team = require("../models/addTeam");
const { uploadFile, deleteFile } = require("../utils/cloudinary");
const JWT_SECRET = process.env.JWT_SECRET;

const signUser = async (req, res) => {
    const user = req.body;
    try {
        const existingUser = await signSchema.findOne({ email: user.email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" }); 
        }

        const hashPassword = await bcrypt.hash(user.password, 10);
        const newUser = new signSchema({
            ...user,
            password: hashPassword,
        });
        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
            expiresIn: "1h",
        });
        newUser.token = token;
        await newUser.save();

        // send email using Nodemailer
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: newUser.email,
            subject: 'Welcome to VPL Tournament!',
            text: 'Congratulations, you have successfully signed up for the VPL tournament!'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Internal server error" }); 
    }
};




// edit user captain status
const editUserCaptain = async (req, res) => {
  const { userId, captainStatus } = req.body;

  try {
      const user = await signSchema.findByIdAndUpdate(
          userId,
          { captain: captainStatus }, // update the captain 
          { new: true } // return the updated document
      );

      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json(user); // Return the updated user
  } catch (error) {
      console.error('Error during database update:', error); 
      res.status(500).json({ error: "Internal server error" });
  }
};



    const loginUser = async (req, res) => {
      const { email, password } = req.body;
      try {
        const user = await signSchema.findOne({ email });
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ error: "Invalid password" });
        }
    
        // generate token
        const token = jwt.sign({ userId: user._id, username: user.username, email : user.email }, JWT_SECRET, {
          expiresIn: "30M",
        });
        user.token = token;
        await user.save();
        // console.log("login successfully");
        res.status(200).json({ token, isAdmin: user.isAdmin });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };              
    
  const getUser = async (req, res) => {

    try {
      let userData = await signSchema.find();
  
      if (userData.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(userData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const getUserProfie = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1]; // Extract the token

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
        const user = await signSchema.findById(decoded.userId); // Find the user by ID

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user); // Send the user data
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};


  const logoutUser = async (req, res) => {
    try {
      const userId = req.user.userId;
      await signSchema.findByIdAndUpdate(userId, { token: null });
  
      res.status(200).json({ message: "Logout successful, token removed." });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

  
const addTeam = async (req, res) => {
  try {
    const teamData = req.body;
    const players = [];

    // upload logo to Cloudinary
    let logoUrl = null;
    if (req.files.logo) {
      logoUrl = await uploadFile(req.files.logo[0]);
    }

    // process player data
    for (let i = 1; i <= 14; i++) {
      const playerData = JSON.parse(teamData[`player${i}`]);
      let playerImageUrl = null;

      if (req.files[`player${i}Image`]) {
        playerImageUrl = await uploadFile(req.files[`player${i}Image`][0]);
      }

      players.push({
        ...playerData,
        image: playerImageUrl,
      });
    }

    // create new team
    const newTeam = new Team({
      ...teamData,
      logo: logoUrl,
      players: players,
    });

    await newTeam.save();

    res
      .status(201)
      .json({ message: "Team created successfully", team: newTeam });
  } catch (error) {
    console.error("Error creating team:", error);
    res
      .status(500)
      .json({ message: "Failed to create team", error: error.message });
  }
};

const getTeam = async (req,res)=>{
  try {
      const teamData = await Team.find();
      console.log(teamData)
      res.status(202).json(teamData);
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
  }
}

const deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.id;

    // Find the team
    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    // Delete logo from Cloudinary if it exists
    if (team.logo) {
      const publicId = team.logo.split('/').pop().split('.')[0];
      await deleteFile(publicId);
    }

    // Delete player images from Cloudinary
    for (const player of team.players) {
      if (player.image) {
        const publicId = player.image.split('/').pop().split('.')[0];
        await deleteFile(publicId);
      }
    }

    // Delete team from MongoDB
    await Team.findByIdAndDelete(teamId);

    res.status(200).json({ message: "Team and associated images deleted successfully" });
  } catch (error) {
    console.error("Error deleting team:", error);
    res.status(500).json({ message: "Failed to delete team", error: error.message });
  }
};


  module.exports = {
    signUser,
    loginUser,
    getUser,
    editUserCaptain,
    logoutUser,
    getUserProfie,
    addTeam,
    getTeam,
    deleteTeam,
  }