module.exports = function(req, res, next) {
    if (req.user.roleId != 20) return res.status(403).send("Access Denied");
    next();
  };