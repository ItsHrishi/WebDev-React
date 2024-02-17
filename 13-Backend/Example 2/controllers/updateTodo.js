// import the model
const Todo = require("../models/TodoNew");


//define route handler

exports.updateTodo = async (req, res) => {

    try {
        // destructuring
        const {id} = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            {title,description,updatedAt:Date.now()},
        )
        
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo updated successfully`
        })

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: 'Internal server error',
                Error: err.message,
            });  
    }
    
    
}
