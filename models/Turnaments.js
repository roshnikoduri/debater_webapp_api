const mongoose = require("mongoose");

const turnamentSchema = new mongoose.Schema({
  Tournament: {
    type: String,
    require: true,
  },
  Dates: {
    type: String,
    require: true,
  },
  City: {
    type: String,
    require: true,
  },
});

const turnament = mongoose.model("tournaments", turnamentSchema);
module.exports = turnament;
