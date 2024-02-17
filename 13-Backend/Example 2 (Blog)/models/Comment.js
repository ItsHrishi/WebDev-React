const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true, 
        },
        comment: [
            {
                user: {
                    type: String,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,             
                },
                commentedAt: {
                    type: Date,
                    default: Date.now()
                }
            }
        ]
    }
); 
module.exports = mongoose.model("Comment", commentSchema);