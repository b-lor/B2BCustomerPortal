const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {  
    try {
    const token = token = req.headers['authorization'].split(' ')[1];
    const decodedToken =  jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded._id;
    req.profile = decoded.profile;
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};

