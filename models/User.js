const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      require: true,
    },
    user_email: {
      type: String,
      require: true,
    },
    user_password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("users", userSchema);
module.exports = users;
