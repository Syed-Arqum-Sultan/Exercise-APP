const userModel = require('../Model/exerciseSignUp');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');

const signUp = async(req,res)=>{
    const {username, email, password}  = req.body.username;
    try{
        const existingUser = await userModel.findOne({email: email});
        if(existingUser){
        return res.status(400).json({message: "user already exist"});
    }
    const hashedPassword = await bcrypt.hash(password, 10 );
    const result = await userModel.create({
        email: email,
        password: hashedPassword,
        username: username
    });
    const token = jwt.sign({email: result.email, id: result._id}, process.env.Secret);
    res.status(201).json({user: result, token: token});

    }catch(e){
        console.error(e);
        res.status(500).json({message: " error while creating user"});
    }
}

const logIn = async(req, res)=>{
    const { email, password }= req.body.username;
    try{
        const existingUser = await userModel.findOne({ email: email });
        if(!existingUser){
            return  res.status(404).json({error: "user not found"});

        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if(!matchPassword){
            
            return res.status(400).json({message: " Invalid Credentials"});


        }
        const token = jwt.sign({email: existingUser.email, id: existingUser._id, }, process.env.Secret);
        res.status(201).json({user: existingUser, token: token}); 
 

    }
    catch(e){
        console.error(e); 
        res.status(500).json({message: " Something Went Wrong"});
    }
}
module.exports = {
    signUp,
    logIn
}