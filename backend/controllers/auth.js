const User = require("../models/user");

const signupUser = async (req, res) => {
  res.json({ mssg: "Signup User" });
};

module.exports = { signupUser };
