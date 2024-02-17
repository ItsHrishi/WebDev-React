const mongoose = require("mongoose");

require("dotenv").config();


//connection establishment
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("DB connection is successful!!"))
        .catch((error) => {
            console.log("issue in db connection");
            console.log(error.message);
            //find out the eaning of the below line
            process.exit(1);
        });
}

//this is the export syntax
module.exports = dbConnect;