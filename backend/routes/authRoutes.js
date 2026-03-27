const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password || !req.body.role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res
        .status(200)
        .json({ message: "You are already registered, please login" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: req.body.role
    });

    await newUser.save();

    return res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found, please register first" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, "secret", {
      expiresIn: "1d"
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      role: user.role,
      userId: user._id,
      name: user.name
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
