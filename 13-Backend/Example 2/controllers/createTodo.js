// import the model
const todo = require("../models/TodoNew");

//define route handler

exports.createTodo = async (req, res) => {

    try {
        //extract title and description from request body
        const { title, description } = req.body;
        //create a new Todo object and insert into Database
        const response = await todo.create({ title, description });
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry created Successfully'
            }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: 'Internal server error',
                message: err.message,
        })
    }
    
    
}

