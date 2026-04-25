// controllers/auth.controllers.js

const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
function register(req, res) {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, function(err, hashedPassword) {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword
    });

    newUser.save(function(err, savedUser) {
      if (err) {
        return res.status(500).json({ message: "Error saving user" });
      }

      res.status(201).json({
        message: "User registered successfully",
        user: savedUser
      });
    });
  });
}

// LOGIN
function login(req, res) {
  const { email, password } = req.body;

  User.findOne({ email: email }, function(err, user) {
    if (err || !user) {
      return res.status(400).json({ message: "User not found" });
    }

    bcrypt.compare(password, user.password, function(err, isMatch) {
      if (err || !isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user._id },
        "secretkey",
        { expiresIn: "1h" }
      );

      res.json({
        message: "Login successful",
        token: token
      });
    });
  });
}

module.exports = {
  register: register,
  login: login
};