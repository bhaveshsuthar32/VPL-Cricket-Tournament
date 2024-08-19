const signSchema = require("../model/signModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
      res.status(201).json(newUser);
    } catch (error) {
      res.status(409).json({ error: error.message });
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
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id, username: user.username, email : user.email }, JWT_SECRET, {
        expiresIn: "1h",
      });
      user.token = token;
      await user.save();
      console.log("login successfully");
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };                       
  

  module.exports = {
    signUser,
    loginUser,
  }