//sever instantiate here
const express = require("express");
const app = express();

//load config file from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json body

app.use(express.json());

//import routes for todo api
const todoRoutes = require("./routes/todos");

//mount the todo apis route 
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})

//connect database
const dbConnect = require("./config/database");
dbConnect();

//default route 
app.get("/", (req, res) => {
    res.send(`<h1>This is home page darling </h1>`);
})
