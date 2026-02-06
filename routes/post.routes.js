const express = require("express");
const {createPost, getAllPosts} = require("../controllers/post.controller")
const router = express.Router();

router.post("/create-post", createPost)
router.get("/get-posts", getAllPosts)

module.exports = router