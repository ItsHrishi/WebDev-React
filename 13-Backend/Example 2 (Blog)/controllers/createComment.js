const Comment = require("../models/Comment");

exports.createComment = async (req, res) => {
    
    try {
        const { postId, user, comment } = req.body;
        
        //create a like object 
        const newComment = {
            user: user,
            comment:comment,
            commentedAt: new Date()
        };

        //find the like document for the given postId
        let commentDocument = await Comment.findOne({ postId });

        if (!commentDocument) {
            // if no like document exists
            commentDocument = await Comment.create({
                postId: postId,
                comment: [newComment]
            });
        }
        else {
            // if a like document already exists 
            commentDocument.comment.push(newComment);
            await commentDocument.save();
        }

        res.status(201).json({
            success: true,
            data: commentDocument,
            message: "Like created successfully"
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            Error: err.message
        });
        
    }
    
}