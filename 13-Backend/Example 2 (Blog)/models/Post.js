const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        user:{
            type: String,           
            required: true,
            maxLength: 50, 
        },
        content: {
            type: String,
            requited: true,
            maxLength: 150,
        },
        postedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        } 

    }
); 
module.exports= mongoose.model("Post",postSchema)