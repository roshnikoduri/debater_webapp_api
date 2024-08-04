const Turnament = require("../models/Turnaments");

const getTurnamentList = async (request, response) => {
  const turnamentList = await Turnament.find({});
  return response.status(201).json({ code: 200, turnamentList });
};

module.exports = { getTurnamentList };
