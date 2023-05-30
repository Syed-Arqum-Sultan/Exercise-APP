const express = require('express');
const { signUp, logIn } = require('../controller/userController')

const  router1 = express.Router();


router1.post('/signUp',signUp );

router1.post('/login', logIn);


module.exports = router1;