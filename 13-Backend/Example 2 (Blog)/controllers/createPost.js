// import the model
const Post = require("../models/Post")

//define the route handler

exports.createPost = async (req, res) => {
    try {
        const { user, content } = req.body;
        const response = await Post.create({ user, content });

        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Post created Successfully"
            }
        );       
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "Internal server failure",
                message: err.message,
        })

        
    }
}
