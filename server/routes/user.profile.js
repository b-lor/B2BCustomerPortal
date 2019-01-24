var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

Profile = require('../models/user.profile.js');
const jwtHelper = require('../config/jwtHelper');

// Get All Profiles
router.get('/', function (req, res) {
	Profile.getProfiles(function (err, profiles) {
		if (err) {
			res.send(err);
		}
		res.json(profiles);
	});
});

// Get Single Profile
router.get('/:id', function (req, res) {
	Profile.getProfileById(req.params.id, function (err, profile) {
		if (err) {
			res.send(err);
		}
		res.json(profile);
	});
});

// Add profile
router.post('/add', function (req, res) {
	var profile = req.body;
	Profile.addProfile(profile, function (err, profile) {
		if (err) {
			res.send(err);
		}
		res.json(profile);
	});
});

// // Update Profile
// router.put('/:id', function (req, res) {

// 	console.log('profile update put method');

// 	var id = req.params.id;
// 	var profile = req.body;
// 	Profile.updateProfile(id, profile, {}, function (err, profile) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(profile);
// 	});
// });

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
		user: req.body.user,
        customerNumber: req.body.customerNumber,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		company: req.body.company,
		email: req.body.email,
		phone: req.body.phone,
		street: req.body.street,
		city: req.body.city,
		state: req.body.state,
		zip: req.body.zip
    };
    Profile.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Update :' + JSON.stringify(err, undefined, 2)); }
    });
});



// // Delete Profile
// router.delete('/:id', function (req, res) {
// 	var id = req.params.id;
// 	Profile.removeProfile(id, function (err, profile) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(profile);
// 	});
// });

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Profile.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Profile Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/userProfile',jwtHelper.verifyJwtToken, Profile.getProfiled);


module.exports = router;