const mongoose  = require('mongoose');


const exerciseSignUp  = new mongoose.Schema({
    username :{type: String,  required: true},
    email :{type: String, requried: true},
    password: {type: String, required: true }
})


module.exports =  new mongoose.model("signUpModel", exerciseSignUp);

// module.exports=
//     signUpModel
