const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');
const Profile = mongoose.model('Profile');

//export index router js to register
module.exports.register = (req, res, next) => {
    var user = new User();
    user.roleId = 10;
    user.userType = 'customer';
    user.salesCode = req.body.salesCode;
    user.customerNumber = req.body.customerNumber;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

// user details

// module.exports.userProfile = (req, res, next) =>{
//     User.findOne({ _id: req._id },
//         (err, user) => {
//             if (!user)
//                 return res.status(404).json({ status: false, message: 'User record not found.' });
//             else
//                 return res.status(200).json({ status: true, user : _.pick(user,['roleId','userType','salesCode','customerNumber','email','password']) });
//         }
//     );

// }

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id }).populate('profile')
        .exec((err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
            return res.status(200).json({ status: true, user : _.pick(user,
                [
                'email',
                'customerNumber',
                'profile.company',
                'profile.phone',
                'profile.firstName',
                'profile.lastName',
                'profile.street',
                'profile.city',
                'profile.state',
                'profile.zip']) });
        }
    );

}
