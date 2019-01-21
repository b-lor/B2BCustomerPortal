var express = require('express');
var router = express.Router();

Profile = require('../models/user.profile.js');


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

// Update Profile
router.put('/:id', function (req, res) {

	console.log('profile update put method');

	var id = req.params.id;
	var profile = req.body;
	Profile.updateProfile(id, profile, {}, function (err, profile) {
		if (err) {
			res.send(err);
		}
		res.json(profile);
	});
});

// Delete Profile
router.delete('/:id', function (req, res) {
	var id = req.params.id;
	Profile.removeProfile(id, function (err, profile) {
		if (err) {
			res.send(err);
		}
		res.json(profile);
	});
});

module.exports = router;