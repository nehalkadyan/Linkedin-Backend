// mongoose
const mongoose = require("mongoose");
// schema
const postSchema = new mongoose.Schema({
    // fields
    content : {
        type : String,
        required : true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    // storing users that liked this post
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }],
    
    numberOfComments : {
        type: Number,
        default : 0
    }
},
// timestamps -> will tell the time user was stored and 
// also them time user was last updated
{
    timestamps : true
})
// model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
