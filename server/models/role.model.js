const mongoose = require('mongoose');

var roleSchema = new mongoose.Schema({
    roleId: {
        type: Number
    },
    role: {
        type: String
    },
});


var Role = module.exports = mongoose.model('Role', roleSchema); 

module.exports.addRole = (req, res, next) => {
    var role =  new Role();
    role.roleId = req.body.roleId;
    role.role = req.body.role;
    role.save((err, doc) => {
        if (!err)
        res.send(doc);
    });
}

// Get roles
module.exports.getRoles = function (callback, limit) {
	Role.find(callback).limit(limit).sort([['roleId', 'ascending']]);
}

// Get role
module.exports.getRoleById = function (id, callback) {
	Role.findById(id, callback);
}

// Update role
module.exports.updateRole = function (id, role, options, callback) {
	var query = { _id: id };
	var update = {
		roleId: role.roleId,
		role: role.role
	}
	Role.findOneAndUpdate(query, update, options, callback);
}


// Remove User
module.exports.removeRole = function (id, callback) {
	var query = { _id: id };
	Role.remove(query, callback);
}

 // Role Ids
//  10 = customer
//  20 = employee
//  30 = manager
//  99 = admin