const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true }, // email must be unique
  password: { type: String, required: true },
});

//static signup method
userSchema.static.signup = async function (email, password) {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }
};

module.exports = mongoose.model("User", userSchema);
