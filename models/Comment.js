const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
     user_name: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    topic_id:{
      type: Object,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

const comment = mongoose.model("comments", commentSchema);
module.exports = comment;
