const Post = require("../models/Post");

exports.getPost = async (req, res) => {
    
    try {

        const allPosts = await Post.find({});

        res.status(200)
            .json({
                success: true,
                data: allPosts,
                message: "All posts are fetched"
        })
        
    } catch (err) {
        console.log(err);
        console.error(err);
        res.status(500)
            .json({
                Success: false,
                Message: "Failed to fetch the posts",
                Error: err.message
            });
        
    }
}

