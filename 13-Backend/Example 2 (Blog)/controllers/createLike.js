const Like = require("../models/Like");

exports.createLike = async (req, res) => {
    
    try {
        const { postId, user } = req.body;
        
        //create a like object 
        const like = {
            user: user,
            likedAt: new Date()
        };

        //find the like document for the given postId
        let likeDocument = await Like.findOne({ postId });

        if (!likeDocument) {
            // if no like document exists
            likeDocument = await Like.create({
                postId: postId,
                likes: [like]
            });
        }
        else {
            // if a like document already exists 
            likeDocument.likes.push(like);
            await likeDocument.save();
        }

        res.status(201).json({
            success: true,
            data: likeDocument,
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