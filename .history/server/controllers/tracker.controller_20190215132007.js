const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Tracker = mongoose.model('Tracker');

// module.exports.getTrackers = (req, res, next) => {

//     Tracker.find({}).populate('ticket').populate('user').exec(function (err, result) {
//         return res.status(200).json(result);
//     });
// }

module.exports.getTrackers = (req, res, next) => {

    Tracker.find({}).exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getTrackerById = (req, res, next) => {

    var query = { _id: req.params.id };
    Tracker.findOne(query).populate('ticket').populate('user').exec((err, result) => {
        console.log(result);
        return res.status(200).json(result);
    });
}



// module.exports.addTracker = (req, res, next) => {

//     var trackerID = generateID();

//     var tracker = new Tracker();
//     tracker.ticket= req.body.ticket;
//     tracker.user= req.body.user;
//     tracker.responseId = trackerID;
//     tracker.comment= req.body.comment;
//     tracker.other= req.body.other;

//     tracker.save((err, doc) => {
//         if (!err)
//             res.send(doc);
//         else {
//             if (err.code == 11000)
//                 res.status(422).send(['Duplicate tracker found.']);
//             else
//                 return next(err);
//         }
//     });

// }

// comment after importing
module.exports.addTracker = (req, res, next) => {

    var tracker = new Tracker();
    tracker.ticket= req.body.ticket;
    tracker.user= req.body.user;
    tracker.responseId = req.body.responseId;
    tracker.comment= req.body.comment;
    tracker.dateUpdated= req.body.dateUpdated;

    tracker.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate tracker found.']);
            else
                return next(err);
        }
    });

}

// Update Tracker
module.exports.updateTracker = function (id, tracker, options, callback) {
	var query = { _id: id };
	var update = {
		ticket: tracker.ticket,
        user: tracker.user,
        comment: tracker.comment,
        other: tracker.other,
        dateUpdated: tracker.dateUpdated
	}
	Tracker.findOneAndUpdate(query, update, options, callback);
}

// Remove Tracker
module.exports.removeTracker = function (id, callback) {
	var query = { _id: id };
	Tracker.remove(query, callback);
}

var generateID = function (){
    var date = new Date();
    var newId = date.getFullYear().toString() + date.getDate().toString() + (date.getMonth()+1).toString() +  date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

    return newId;

}

// module.exports.userTracker = (req, res, next) =>{
//     Tracker.findOne({ _id: req._id },
//         (err, tracker) => {
//             if (!tracker)
//                 return res.status(404).json({ status: false, message: 'User record not found.' });
//             else
//                 return res.status(200).json({ status: true, tracker : _.pick(tracker,['user','trackerId','description','priority','status','text']) });
//         }
//     );

// }