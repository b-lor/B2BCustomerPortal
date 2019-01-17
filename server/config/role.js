
module.exports = function (req, res, next) {
    // req.user
  
    if (!req.user.roleId == 99) return res.status(403).send('Access denied.');

    next();
  }