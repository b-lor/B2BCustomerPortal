const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Tracker = mongoose.model('Tracker');

module.exports.getTrackers = (req, res, next) => {

    Tracker.find({}).populate('ticket').populate('user').exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getTrackerById = (req, res, next) => {

    var query = {
        _id: req.params.id
    };
    Tracker.findOne(query).populate('ticket').populate('user').sort([
		['dateUpdated', 'descending']
	]).exec((err, result) => {
        return res.status(200).json(result);
    });
}

// comment after importing
module.exports.addTracker = (req, res, next) => {
    var trackerID = generateID();
    var tracker = new Tracker();
    tracker.ticket = req.body.ticket;
    tracker.user = req.body.user;
    tracker.responseId = trackerID;
    tracker.comment = req.body.comment;

    tracker.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate tracker found.']);
            else
                return next(err);
        }
        console.log(doc);
        console.log('doc');
    });

}

// Update Tracker
module.exports.updateTracker = function (id, tracker, options, callback) {
    var query = {
        _id: id
    };
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
    var query = {
        _id: id
    };
    Tracker.remove(query, callback);
}

var generateID = function () {
    var date = new Date();
    var newId = date.getFullYear().toString() + date.getDate().toString() + (date.getMonth() + 1).toString() + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

    return newId;
}

// var getDateWithTime = function () {
//     var result="";
//     var d = new Date();

//     result +=(d.getMonth()+1)+"/"+d.getDate()+"/"+ d.getFullYear()+
//               " "+ d.getHours()+":"+d.getMinutes()+":"+
//               d.getSeconds()+" "+d.getMilliseconds();
//     return result;
// }
