const mongoose = require('mongoose');

const Role = mongoose.model('Role');

//export index router js to register
module.exports.roles = (req, res, next) => {
    var role =  new Role();
    role.roleId = req.body.roleId;
    role.role = req.body.role;
    role.save((err, doc) => {
        if (!err)
        res.send(doc);
    });
}
 // Role Ids
//  10 = customer
//  20 = employee
//  30 = manager
//  99 = admin