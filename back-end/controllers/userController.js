// Login Controller
const loginUser = async (req, res) => {
  res.json({ message: "Login User" });
};
// Signup Controller
const signupUser = async (req, res) => {
  res.json({ message: "Signup User" });
};

module.export = {
  loginUser,
  signupUser,
};
