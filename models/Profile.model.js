// mongoose
const mongoose = require("mongoose");
// schema
const profileSchema = new mongoose.Schema({
    // fields

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    headline : {
        type : String,
    },
    summary : {
        type : String,
    },

    experiences : [{
        companyName : String,
        joiningDate : String, 
        lastDate : String,
        description : String
    }],
    
    skills : {
        type : [String]// ["react", "node", "docker"]
    },
    /*
    education : 
     {
      schoolname : ,
      passedOutYear: ,
      joiningDate
     }
    */

    education : [{
        schoolName : String,
        session: String,
    }]
},
// timestamps -> will tell the time user was stored and 
// also them time user was last updated
{
    timestamps : true
})
// model
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
