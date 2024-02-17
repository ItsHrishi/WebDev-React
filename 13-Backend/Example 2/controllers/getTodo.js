// import the model
const Todo = require("../models/TodoNew");


//define route handler

exports.getTodo = async (req, res) => {

    try {
        //find all the items
        const todos = await Todo.find({});

        //response 
        res.status(200)
            .json({
                success: true,
                data: todos,
                message:"Entire Todo Data is fetched"
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


exports.getTodById = async (req, res) => {

    try {
        // extract todo based in id
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data found with given ID"
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`
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
