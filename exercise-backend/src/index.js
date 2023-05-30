const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const exerciseRoute = require('../routes/exerciseRouter');
const userRoute = require('../routes/userRoutes');



dotenv.config();
app.use(express.json());
app.use(cors());


app.use('/',exerciseRoute);
app.use('/',userRoute);
    

const connection = async ()=> {
try {
    await  mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,
        useUnifiedTopology: true})
    console.log("connected to db")
}
catch (error) {
    console.log(error)   
}
}
connection();





app.listen(4000, ()=> console.log("app is listening on 4000"));