const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username cannot be blank"],
  },
  hashPassword: {
    type: String,
    required: [true, "Password cannot be blank"],
  },
});

userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, foundUser.hashPassword);
  return isValid ? foundUser : false;
};

userSchema.pre("save", async function (next) {
  this.hashPassword = await bcrypt.hash(this.hashPassword, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
