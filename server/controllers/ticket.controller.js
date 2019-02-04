const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Ticket = mongoose.model('Ticket');
var express = require('express');
var loggedIn = require("../config/loggedIn.js");

module.exports.getTickets = (req, res, next) => {

    Ticket.find({}).populate('user').exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getTicketById = (req, res, next) => {

    var query = { _id: req.params.id };
    Ticket.findOne(query).populate('user').exec((err, result) => {
        console.log(result);
        return res.status(200).json(result);
    });
}



module.exports.addTicket = (req, res, next) => {

    console.log('ticket saved to db');
    console.log(loggedIn._id);
    var ticketID = generateID();

    var ticket = new Ticket();

    ticket.user= req.body.user;
    ticket.ticketId= ticketID;
    ticket.description= req.body.description;
    ticket.submittedBy= req.body.submittedBy;
    // ticket.resolution= req.body.resolution;
    ticket.priority= req.body.priority;
    // ticket.status= req.body.status;
    ticket.text= req.body.text;
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
	var query = { _id: id };
	var update = {
		user: ticket.user,
		ticketId: ticket.ticketId,
		description: ticket.description,
		priority: ticket.priority,
		status: ticket.status,
        text: ticket.text
	}
	Ticket.findOneAndUpdate(query, update, options, callback);
}

// Remove Ticket
module.exports.removeTicket = function (id, callback) {
	var query = { _id: id };
	Ticket.remove(query, callback);
}

var generateID = function (){
    var date = new Date();
    var newId = date.getFullYear().toString() + date.getDate().toString() + (date.getMonth()+1).toString() +  date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

    return newId;

}

module.exports.userTicket = (req, res, next) =>{
    Ticket.findOne({ _id: req._id },
        (err, ticket) => {
            if (!ticket)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, ticket : _.pick(ticket,['user','ticketId','description','priority','status','text']) });
        }
    );

}


//////////////////////////////////////





////////////////////////////////////////


// exports.createIncident = function(req, res){

//     var incidentBody = req.body;

//         incidentBody.incidentID = generateIncId();
//       //  incidentBody.reportedDate = generateDate('reported');
//       Ticket.create(incidentBody, function(err, data) {
//         if(err) {
//             if(err.toString().indexOf('E11000') > -1) {
//                 err = new Error('Duplicate Incident');
//             }
//             res.status(400);
//             return res.json({reason:err.toString()});
//         }
//        res.status(200);
//         res.json(data);
//     });
// }

// var generateIncId = function (){
//     var date = new Date();
//     var incId = "IM"+date.getFullYear().toString() + date.getDate().toString() + (date.getMonth()+1).toString() +  date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();

//     return incId;

// }

// exports.getIncidentById = function(incId, res){
//    // console.log(incId);
//    Ticket.find({incidentID : incId}, function(err, details) {

//         if (err){
//             console.log("error");

//             return res.status(500).json("Internal Database error");
//         };

//         res.status(200).json(details[0]);
//     });

// }

// exports.updateIncident = function(payLoad, res){

//     Ticket.findOneAndUpdate({'incidentID' : payLoad.incidentID}, payLoad, {upsert:true}, function(err, doc){
//         if (err) return res.status(500).json(err);
//         console.log(doc);
//          res.status(200).json(doc);
//     });
// }