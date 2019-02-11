const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Ticket = mongoose.model('Ticket');
const Tracker = mongoose.model('Tracker');


module.exports.getTicketById = (req, res, next) => {

    var query = { _id: req.params.id };
    Ticket.findOne(query)
    .populate('user')
    .exec((err, result) => {
        return res.status(200).json(result);
    });
}

exports.searchTicketByDateRange = function(req, res){

    var fromDate = req.body.fromDate;
    fromDate = fromDate+" 00:00:00";
    var toDate = req.body.toDate;
    toDate = toDate+" 23:59:59";
    Ticket.find()
    .where('dateSubmitted')
    .gte(fromDate)
    .lte(toDate)
    .populate('user')
    .exec(function(err, result){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(result);
        }
    );
}


exports.searchByPriority = function(req, res){

    var priority = req.body.priority;
    Ticket.find().where('priority')
    .equals(priority)
    .sort({ dateSubmitted : '-1'})
    .populate('user')
    .exec(function(err, result){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(result);
        }
    );
}


exports.searchByStatus = function(req, res){

    var status = req.body.status;
    Ticket.find()
        .where('status').equals(status)
        .sort({ dateSubmitted : '-1'})
        .populate('user')
        .exec(function(err, result){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(result);
        }
    );
}


exports.searchByIssue = function(req, res){

    var issue = req.body.issue;
    Ticket.find()
        .where('issue').equals(issue)
        .sort({ dateSubmitted : '-1'})
        .populate('user')
        .exec(function(err, result){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(result);
        }
    );
}

module.exports.getTrackerById = (req, res, next) => {

    var query = { _id: req.params.id };
    Tracker.findOne(query)
    .populate('ticket')
    .populate('user')
    .exec((err, result) => {
        console.log(result);
        return res.status(200).json(result);
    });
}

exports.searchTrackerByDateRange = function(req, res){

    var fromDate = req.body.fromDate;
    fromDate = fromDate+" 00:00:00";
    var toDate = req.body.toDate;
    toDate = toDate+" 23:59:59";
    Ticket.find()
        .where('dateUpdated')
        .gte(fromDate).lte(toDate)
        .populate('user')
        .exec(function(err, result){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(result);
        }
    );
}
