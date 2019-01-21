var mongoose = require('mongoose');

// Profile Schema
var profileSchema = mongoose.Schema({
    user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
    },
    customerNumber: {
		type: Number
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	company: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String
	},
	street: {
		type: String
	},
	city: {
		type: String
	},
	state: {
		type: String
	},
	zip: {
		type: String
	}
});

var Profile = module.exports = mongoose.model('Profile', profileSchema);


// Get profiles
module.exports.getProfiles = function (callback, limit) {
	Profile.find(callback).limit(limit).populate('user').sort([['customerNumber', 'ascending']]);
}

// Get profile
module.exports.getProfileById = function (id, callback) {
	var query = { _id: id };
	Profile.findOne(query, callback).populate('user');
}

// Add profile
module.exports.addProfile = function (profile, callback) {
	var add = {
		user: profile.user,
        customerNumber: profile.customerNumber,
		firstName: profile.firstName,
		lastName: profile.lastName,
		company: profile.company,
		email: profile.email,
		phone: profile.phone,
		street: profile.street,
		city: profile.city,
		state: profile.state,
		zip: profile.zip

	}
	Profile.create(add, callback);
}

// Update profile
module.exports.updateprofile = function (id, profile, options, callback) {
	var query = { _id: id };
	var update = {
        customerNumber: profile.customerNumber,
		firstName: profile.firstName,
		lastName: profile.lastName,
		company: profile.company,
		logoUrl: profile.logoUrl,
		email: profile.email,
		phone: profile.phone,
		street: profile.street,
		city: profile.city,
		state: profile.state,
		zip: profile.zip

	}
	Profile.findOneAndUpdate(query, update, options, callback);
}


// Remove profile
module.exports.removeprofile = function (id, callback) {
	var query = { _id: id };
	Profile.remove(query, callback);
}

