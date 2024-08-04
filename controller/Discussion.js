const Discussion = require("../models/Discussion");

const createTopic = async (request, response) => {
  const { topic_name, topic_description } = request.body;

  if (!topic_name) {
    return response
      .status(201)
      .json({ code: 400, message: "Topic name is missing." });
  } else if (!topic_description) {
    return response
      .status(201)
      .json({ code: 400, message: "Topic description is missing." });
  } else {
    const topic = await Discussion.create({
      topic_name: topic_name,
      topic_description: topic_description,
    });

    return response
      .status(201)
      .json({ code: 200, message: "Thank you for creating topic.", topic });
  }
};

const getTopicLists = async (request, response) => {
    const topicList = await Discussion.find({});
    return response.status(201).json({ code: 200, topicList });
  };

module.exports = { createTopic, getTopicLists };
