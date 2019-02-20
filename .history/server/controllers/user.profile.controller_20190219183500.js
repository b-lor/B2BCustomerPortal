const mongoose = require('mongoose');

const Profile = mongoose.model('Profile');


// user profile
module.exports.getProfile = (req, res, next) => {
    Profile.findOne({
            _id: req.user
        },
        (err, profile) => {
            if (!profile)
                return res.status(404).json({
                    status: false,
                    message: 'User record not found.'
                });
            else
                return res.status(200).json({
                    status: true,
                    profile: _.pick(profile, ['customerNumber', 'firstName', 'lastName', 'company', 'email', 'phone', 'street', 'city', 'state', 'zip'])
                });
        }
    );
}

modules.exports.getProfileCount = function(req, res) {
    
}