const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo")
const {deleteTodo} = require("../controllers/deleteTodo")

//define api : their endpoint names
router.post("/createTodo", createTodo);
router.get("/getAllTodos", getTodo);
router.get("/getTodo/:id", getTodById); 
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);       

module.exports  = router;