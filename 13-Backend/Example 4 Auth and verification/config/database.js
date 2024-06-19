const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(() => { console.log("database connection successful") })
        .catch((err) => {
            console.log("DB connection issues");
            console.error(err);
            process.exit(1);
    })
}