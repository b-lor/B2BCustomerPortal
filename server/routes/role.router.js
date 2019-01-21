const express = require('express');
const router = express.Router();

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

// Get Single Profile
router.get('/:id', function (req, res) {
	Role.getRoleById(req.params.id, function (err, role) {
		if (err) {
			res.send(err);
		}
		res.json(role);
	});
});

// Add profile
router.post('/add', function (req, res) {
	var role = req.body;
	Role.addRole(role, function (err, role) {
		if (err) {
			res.send(err);
		}
		res.json(role);
	});
});

// Update Profile
router.put('/:id', function (req, res) {

	console.log('profile update put method');

	var id = req.params.id;
	var role = req.body;
	Role.updateRole(id, role, {}, function (err, role) {
		if (err) {
			res.send(err);
		}
		res.json(role);
	});
});

// Delete Profile
router.delete('/:id', function (req, res) {
	var id = req.params.id;
	Role.removeRole(id, function (err, role) {
		if (err) {
			res.send(err);
		}
		res.json(role);
	});
});

module.exports = router;
