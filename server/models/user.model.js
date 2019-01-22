const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    profile: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Profile'
    },
    roleId: {
        type: Number
    },
    userType: {
        type: String
    },
    salesCode: {
        type: Number
    },
    customerNumber: {
        type: Number
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Password must be at least 4 character long']
    },
    saltSecret: String
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id, roleId: this.roleId},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


// mongoose.model('User', userSchema);


/** ///////////////////////////////////// */

var User = module.exports = mongoose.model('User', userSchema);

// Get users
module.exports.getUsers = function (callback, limit) {
	User.find(callback).limit(limit).sort([['customerNumber', 'ascending']]);
}

// Get user
module.exports.getUserById = function (id, callback) {
	User.findById(id, callback);
}

// Add User
module.exports.addUser = function (user, callback) {
	var add = {
		roleId: user.roleId,
		userType: user.userType,
		salesCode: user.salesCode,
		customerNumber: user.customerNumber,
		email: user.email
	}
	User.create(add, callback);
}

// Update User
module.exports.updateUser = function (id, user, options, callback) {
	var query = { _id: id };
	var update = {
		roleId: user.roleId,
		userType: user.userType,
		salesCode: user.salesCode,
		customerNumber: user.customerNumber,
		email: user.email
	}
	User.findOneAndUpdate(query, update, options, callback);
}


// Remove User
module.exports.removeUser = function (id, callback) {
	var query = { _id: id };
	User.remove(query, callback);
}


