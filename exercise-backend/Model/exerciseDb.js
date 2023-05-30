const mongoose = require('mongoose');


const exerciseSchema = new mongoose.Schema( {
    
    description : { type : String , required : true },
    activityType: {type : String, requried: true},
    duration: {type: String, requried: true},
    date: {type:String},
    userId:[{type: mongoose.Schema.Types.ObjectId,  ref: "signUpModel"}]
})


const  exerciseModel = new mongoose.model('exerciseModel', exerciseSchema);
module.exports = exerciseModel;