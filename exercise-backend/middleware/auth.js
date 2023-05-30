const jwt = require('jsonwebtoken');


const  verify= async(req, res, next)=>{ 
    const token = req.headers.authorization;

    
    
    try{
        
        if(token){
            let token1 = token.split(" ")[1];
            const decoded = await jwt.verify(token1, process.env.Secret);
            console.log(decoded);
            req.userId = decoded.id;

            
        }
        else{
            return res.status(401).json({error: "Unauthorized"});
        }
           
        next();
        
  
    }
catch(e){
    console.log(e);
    res.status(401).json({error: 'Invalid Token'  });
}

};

module.exports = {
    verify
}

