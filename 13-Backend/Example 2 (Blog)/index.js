const express = require("express");
const app = express();

//load the env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middle ware to process
app.use(express.json());

const postRoutes = require("./routes/postRoutes");

app.use("/api/v1", postRoutes);

app.listen(PORT, () => {
    console.log(`server started successfully at route ${PORT}`);
})

//database connection

const dbConnect = require("./config/database");
dbConnect();


//default route
app.get("/", (req, res) => {
    res.send(`<h1>This is home page </h1>`);
});