const signSchema = require("../models/signUp");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../utils/nodemailer');
// const { uploadFile, deleteFile } = require("../utils/cloudinary");
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
  

  module.exports = {
    signUser,
    loginUser,
    getUser,
    editUserCaptain,
    logoutUser,
  }