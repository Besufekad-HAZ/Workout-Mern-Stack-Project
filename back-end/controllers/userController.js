const User = require("../models/User");

// Login Controller
const loginUser = async (req, res) => {
  res.json({ message: "Login User" });
};
// Signup Controller
const signupUser = async (req, res) => {
  res.json({ message: "Signup User" });
};

module.exports = {
  loginUser,
  signupUser,
};
