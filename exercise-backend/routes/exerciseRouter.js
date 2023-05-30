const express = require('express');
const router = express.Router();
const { getAll, saveData, updatePost,  deletingePost, findPostById, getAllData} = require("../controller/exerciseController");
const  requestLogger  = require('../middleware/exerciseMiddleware');
const { verify } = require('../middleware/auth')




router.use(requestLogger);
router.get('/getAll',  getAllData);
router.get('/', verify, getAll);
router.post('/', verify, saveData);
router.put('/:id', verify, updatePost);
router.delete('/:id', verify, deletingePost);
router.get('/api/:id', verify, findPostById);


module.exports=
 router