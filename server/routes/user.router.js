var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

User = require('../models/user.model.js');

// // Get All Users
// router.get('/', function (req, res) {
// 	User.getUsers(function (err, users) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(users);
// 	});
// });
 
// Get All Users
router.get('/', function (req, res, next) {
	User.find(function (err, users) {
		if (err) {
			return next(err);
		}
		res.json(users);
	});
});


// Get Single User
router.get('/:id', function (req, res) {
	User.getUserById(req.params.id, function (err, user) {
		if (err) {
			res.send(err);
		}
		res.json(user);
	});
});

// Add User
// router.post('/', function (req, res) {
// 	var user = req.body;
// 	User.addUser(user, function (err, user) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(user);
// 	});
// });

router.post('/', (req, res) => {
    var emp = new User({
        roleId: req.body.roleId,
        userType: req.body.userType,
        customerNumber: req.body.customerNumber,
		email: req.body.email,
		password: req.body.password
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// // Update User
// router.put('/:id', function (req, res) {

// 	console.log('user update put method');

// 	var id = req.params.id;
// 	var user = req.body;
// 	User.updateUser(id, user, {}, function (err, user) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(user);
// 	});
// });


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
		profile: req.body.profile,
        roleId: req.body.roleId,
		userType: req.body.userType,
		salesCode: req.body.salesCode,
		customerNumber: req.body.customerNumber,
		email: req.body.email
    };
    User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in user Update :' + JSON.stringify(err, undefined, 2)); }
    });
});


// // Delete User
// router.delete('/:id', function (req, res) {
// 	var id = req.params.id;
// 	User.removeUser(id, function (err, user) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(user);
// 	});
// });

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

		User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;