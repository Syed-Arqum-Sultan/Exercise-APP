// middleware.js
// const requestLogger = (req, res, next) => {
//     console.log(`Received ${req.method} request for ${req.url}`);
//     next();
//   };
  
//   module.exports = {
//     requestLogger,
//   };
  
const requestLogger = (req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url} `);
  next();
};

module.exports = requestLogger;