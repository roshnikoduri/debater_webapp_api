const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    topic_name: {
      type: String,
      require: true,
    },
    topic_description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const topics = mongoose.model("topics", topicSchema);
module.exports = topics;
