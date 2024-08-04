const Comment = require("../models/Comment");

const createComment = async (request, response) => {
  const { comment, user, topic_id } = request.body;

  if (!comment) {
    return response
      .status(201)
      .json({ code: 400, message: "Comment is missing." });
  } else if (!user) {
    return response
      .status(201)
      .json({ code: 400, message: "User name is missing." });
  } else {
    const topic = await Comment.create({
      comment: comment,
      user_name: user,
      topic_id: topic_id,
    });
    return response
      .status(201)
      .json({ code: 200, message: "Thank you for your feedback.", topic });
  }
};

const getCommentLists = async (request, response) => {
  const topicId = request.params.id;
  const commentList = await Comment.find({ topic_id: topicId });
  return response.status(201).json({ code: 200, commentList });
};

module.exports = { createComment, getCommentLists };
