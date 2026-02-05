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

module.exports = {createPost}