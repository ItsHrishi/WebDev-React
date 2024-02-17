const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("************Server started at port number 3000************");
});

app.get('/', (req, res) => {
    res.send("Hey this is hrishi");
});

app.get('/hello', (request, response) => {
    response.send("this is hello ");
});

app.post('/api/car', (request, response) => {
    const { name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully");
});

const mongoose = require('mongoose');
// if database is not there new database is created or it will connect with the given database :              
mongoose.connect('mongodb://localhost:27017/hrishiDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => { console.log("connection successful!") })
    .catch((e) => { console.log(e,"There is an error!!") });
