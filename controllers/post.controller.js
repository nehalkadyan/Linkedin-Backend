const Post = require("../models/Post.model");

// create post controller

const createPost = async(req, res) => {
    try{
      // req.body
      const {content, author} = req.body;

      // create post

      const post = new Post({
        content, author
      })

      // save post

      await post.save();

      return res.status(201).json({message : "post created successfully", post})

    }catch(err){
        console.log("err", err.message)
    }
}

// controller to get all posts

const getAllPosts = async(req, res) => {
  try{
    const posts = await Post.find().populate("author", "username email")
    return res.status(200).json({message : "Posts fetched successfully!",posts})
  }catch(err){
    console.log("err", err.message)
  }
}

module.exports = {createPost, getAllPosts}