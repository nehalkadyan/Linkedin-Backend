const Comment = require("../models/Comment.model");

const createComment = async (req, res) => {
  try {
    const { textComment, userId, postId } = req.body;

    // create comment

    const comment = new Comment({
      textComment,
      userId,
      postId,
    });

    // save comment

    await comment.save();

    return res
      .status(201)
      .json({ message: "Comment added successfully", comment });
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { createComment };
