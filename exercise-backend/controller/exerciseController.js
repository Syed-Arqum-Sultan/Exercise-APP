

const { fetchData, postData, update, deletePost, fetchDataById, fetchAllData  } = require('../services/exerciseService');

const saveData = async(req,res,next)=>{

  try{
 // const { userId } = req.userId;//
 console.log(req.body.description);
 console.log(req.body);
  const {description, activityType, duration, date  } = req.body;
 
 // console.log(req.userId);
  const newPost = await postData( description, activityType, duration, date, req.userId);
  res.status(201).json(newPost);
  }
  catch(e){
    console.error(e);
    res.status(500).json({e : "An error occured while creating the post"});
  }
};



const getAll = async (req, res, next) => { 
  console.log(req.userId);
    try {
           const data = await fetchData(req.userId);
           res.json(data); 
      }
    catch (error) {
        res.status(500).json({message : "internal Server Error"});
      next(error);
    }
  };

  const getAllData = async (req, res, next) => { 
    // console.log(req.userId);
      try {
             const data = await fetchAllData();
             res.json(data); 
        }
      catch (error) {
          res.status(500).json({message : "internal Server Error"});
        next(error);
      }
    };
  


const updatePost = async(req, res, next) => {
  try{
  const { id } = req.params;
  const { description, activityType, duration, date } = req.body;


  const newData = {
    description,
    activityType,
    duration,
    date
  }
  const updatePost = await update(id, newData);
  res.status(200).json(updatePost);
     }
     catch(e){
      console.error(e);
      res.status(500).json({error: "An error occured"});
     
     };
    };

const deletingePost = async(req, res, next) =>{
  try{
  const { id } = req.params;
  const deletedPost = await deletePost(id);
  res.status(200).json(deletedPost);
  }
  catch(e){
    console.error(e);
    res.status(500).json({error: "error occured while deleting the post:" })
  }
};

const findPostById = async(req, res, next) =>{
  try{
    // console.log(req.body);
    const { id } = req.params;
    console.log(id);
  const post = await fetchDataById(id);

  if(!post){
    res.status(500).json({message:"no post found"});
 }res.status(200).json(post);
  }catch(e){
    console.log(e);
    res.status(500).json({error : "no post found"});
  }

}

  module.exports = {
    getAll,
    saveData,
    updatePost,
    deletingePost,
    findPostById,
    getAllData
  }