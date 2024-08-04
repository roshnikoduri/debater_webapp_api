var validator = require("validator");
const User = require("../models/User");

const createUser = async (request, response) => {
  const { name, userEmail, userPassword } = request.body;

  if (!name) {
    return response
      .status(201)
      .json({ code: 400, message: "Name is missing." });
  }
  if (validator.isEmpty(userEmail)) {
    return response
      .status(201)
      .json({ code: 400, message: "Email is missing." });
  } else if (!validator.isEmail(userEmail)) {
    return response
      .status(201)
      .json({ code: 400, message: "Invalid email address." });
  } else if (!userPassword) {
    return response
      .status(201)
      .json({ code: 400, message: "Password is missing." });
  } else {
    const user = await User.create({
      name: name,
      user_email: userEmail,
      user_password: userPassword,
    });

    return response
      .status(201)
      .json({ code: 200, message: "Thank you for creating account.", user });
  }
};

const validateUser = async (request, response) => {
  const { userEmail, userPassword } = request.body;
  const user = await User.find({
    user_email: userEmail,
    user_password: userPassword,
  });
  if (!user || user.length == 0) {
    return response
      .status(201)
      .json({ code: 404, message: "Invalid Details." });
  } else {
    return response
      .status(201)
      .json({ code: 200, message: "Login successfully.", user });
  }
};

module.exports = { createUser, validateUser };
