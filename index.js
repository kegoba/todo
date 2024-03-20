

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const path = require('path');
const PORT = process.env.PORT

require("dotenv").config();






// self declaration
const config = require("./model/dbconnect.js")
const todoRoute = require("./route/route.js");





//App setup
mongoose.Promise = global.Promise;
app.use(cors({
    origin :"*"
}))
app.use(bodyParser.json());

//


// using mongoose to connect to db
mongoose.connect(config.DB, { useNewUrlParser:true}).then(
() => {console.log("database connected")},
 err =>{console.log("not connected" +  err)}
)


// app listening to 8080 local host
app.listen(8000, function () {
    console.log("the server is runing at port 8000");
});





app.use("/", todoRoute)







