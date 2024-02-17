// import the model
const Todo = require("../models/TodoNew");


//define route handler

exports.deleteTodo = async (req, res) => {

    try {
        // destructuring
        const {id} = req.params;
        
        await Todo.findByIdAndDelete(id);
        
        res.status(200).json({
            success: true,
            message: `Todo deleted successfully`
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
