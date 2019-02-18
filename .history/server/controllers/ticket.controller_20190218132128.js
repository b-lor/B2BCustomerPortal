const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Ticket = mongoose.model('Ticket');

module.exports.getTickets = (req, res, next) => {

    Ticket.find({}).populate('user').exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getTicketIssues = (req, res, next) => {

    Ticket.find({}).populate('user').exec(function (err, result) {
        // Ticket.find({issue:'Service'}).populate('user').exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getOpenTickets = (req, res, next) => {

    Ticket.find({}).where('status').nin(['Closed', 'Resolved']).populate('user').exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getShippingTickets = (req, res, next) => {

    Ticket.find({}).where('issue').eq(['Shipping']).where('status').nin(['Closed', 'Resolved']).populate('user').exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getClosedTickets = (req, res, next) => {

    Ticket.find({}).where('status').eq(['Closed']).populate('user').exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getTicketById = (req, res, next) => {

    var query = {
        _id: req.params.id
    };
    Ticket.findOne(query).populate('user').exec((err, result) => {
        console.log(result);
        return res.status(200).json(result);
    });
}

module.exports.addTicket = (req, res, next) => {

    var ticketID = generateID();

    var ticket = new Ticket();
    ticket.user = req.body.user;
    ticket.ticketId = ticketID;
    ticket.issue = req.body.issue;
    ticket.description = req.body.description;
    ticket.submittedBy = req.body.submittedBy;
    // ticket.resolution= req.body.resolution;
    ticket.priority = req.body.priority;
    // ticket.status= req.body.status;
    ticket.text = req.body.text;
    console.log(ticket);

    ticket.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate ticket found.']);
            else
                return next(err);
        }
    });

}

// Update Ticket
module.exports.updateTicket = function (id, ticket, options, callback) {
    var query = {
        _id: id
    };
    var update = {
        user: ticket.user,
        ticketId: ticket.ticketId,
        issue: ticket.issue,
        description: ticket.description,
        submittedBy: ticket.submittedBy,
        resolution: ticket.resolution,
        priority: ticket.priority,
        status: ticket.status,
        text: ticket.text,
        dateUpdate: ticket.dateUpdate
    }
    Ticket.findOneAndUpdate(query, update, options, callback);
}

// Remove Ticket
module.exports.removeTicket = function (id, callback) {
    var query = {
        _id: id
    };
    Ticket.remove(query, callback);
}

var generateID = function () {
    var date = new Date();
    var newId = date.getFullYear().toString() + date.getDate().toString() + (date.getMonth() + 1).toString() + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

    return newId;

}

module.exports.userTicket = (req, res, next) => {
    Ticket.findOne({
            _id: req._id
        },
        (err, ticket) => {
            if (!ticket)
                return res.status(404).json({
                    status: false,
                    message: 'User record not found.'
                });
            else
                return res.status(200).json({
                    status: true,
                    ticket: _.pick(ticket, ['user', 'ticketId', 'description', 'priority', 'status', 'text'])
                });
        }
    );

}