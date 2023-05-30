const  exerciseModel  = require('../Model/exerciseDb');

//get request
const fetchData = async(userId) => {
   try{
    // return {message: "you have fetched data succesfully"};
   const fetch = await exerciseModel.find({userId});
   return fetch;
}
   catch(e){
    console.log(e);
    throw new Error ("error while fetching data");
   }
{}    
};
const fetchAllData = async(userId) => {
    try{
     // return {message: "you have fetched data succesfully"};
    const fetch = await exerciseModel.find();
    return fetch;
 }
    catch(e){
     console.log(e);
     throw new Error ("error while fetching data");
    }
 {}    
 };


//post request
const postData = async( description, activityType, duration, date, userId)=>{
    try{
    const post =await new exerciseModel({ description, activityType, duration, date, userId });

    return post.save();   
}
catch(e){
    throw new Error("an error occured while creating the post");    
} 
};

//edit request
const update = async(id, newData) => {
    try {
        const updatedPost = await exerciseModel.findByIdAndUpdate(id ,newData,{new:true });
        return updatedPost;
    }
    catch(e){
        console.error(e);
        throw new Error("Can not update data");
    }
}
//delete request
const deletePost = async(id)=>{
    try{
    const deletedPost = await exerciseModel.findByIdAndDelete(id);
    return deletedPost;

    }
    catch(e){
        console.error(e);
        throw new Error ("error while deleting post")
    }
}

//fetch data by ID
const fetchDataById = async(id)=>{
    try{
    console.log(id)
        
    const res = await exerciseModel.find({userId:id}).populate("userId").exec()
    console.log(res)
    return res;


}catch(e){
    console.error(e);
    throw new Error("Error finding Element");
}  

}



module.exports = {
    fetchData,
    postData,
    update,
    deletePost,
    fetchDataById,
    fetchAllData
}   
