const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

Role = require('../models/role.model.js');

// Get All roles
router.get('/', function (req, res) {
	Role.getRoles(function (err, roles) {
		if (err) {
			res.send(err);
		}
		res.json(roles);
	});
});

// // Get All Roles
// router.get('/', function (req, res, next) {
// 	User.find(function (err, roles) {
// 		if (err) {
// 			return next(err);
// 		}
// 		res.json(roles);
// 	});
// });

// Get Single Profile
router.get('/:id', function (req, res) {
	Role.getRoleById(req.params.id, function (err, role) {
		if (err) {
			res.send(err);
		}
		res.json(role);
	});
});

// // Add profile
// router.post('/', function (req, res) {
// 	var role = req.body;
// 	Role.addRole(role, function (err, role) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(role);
// 	});
// });

router.post('/', (req, res) => {
    var emp = new Role({
        roleId: req.body.roleId,
        role: req.body.role,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Role Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


// // Update Profile
// router.put('/:id', function (req, res) {

// 	console.log('profile update put method');

// 	var id = req.params.id;
// 	var role = req.body;
// 	Role.updateRole(id, role, {}, function (err, role) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(role);
// 	});
// });

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        roleId: req.body.roleId,
		role: req.body.role
	};
    Role.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Role Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// // Delete Profile
// router.delete('/:id', function (req, res) {
// 	var id = req.params.id;
// 	Role.removeRole(id, function (err, role) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(role);
// 	});
// });

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

		Role.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Role Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
