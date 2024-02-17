const mongoose = require("mongoose");   

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 50,
        },
        createdAt: {
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
//all the folder names in the mongoose depend on the given below "todo" string mongoose ads the 's' at the end :

module.exports = mongoose.model("Todo", todoSchema);