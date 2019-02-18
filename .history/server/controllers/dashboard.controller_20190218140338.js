const mongoose = require('mongoose');

const Ticket = mongoose.model('Ticket');

exports.getLatestGeneral = function (req, res) {
    Ticket.find()
        .sort({
            dateSubmitted: '-1'
        })
        .where('issue').equals('General')
        .select('ticketId description dateSubmitted')
        .limit(5)
        .where('status').equals('New')
        .exec(function (err, docs) {
            if (err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        });
}
exports.getLatestBilling = function (req, res) {
    Ticket.find()
        .sort({
            dateSubmitted: '-1'
        })
        .where('issue').equals('Billing')
        .select('ticketId description dateSubmitted')
        .limit(5)
        .where('status').equals('New')
        .exec(function (err, docs) {
            if (err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        });
}

exports.getLatestShipping = function (req, res) {
    Ticket.find()
        .sort({
            dateSubmitted: '-1'
        })
        .where('issue').equals('Shipping')
        .select('ticketId description dateSubmitted')
        .limit(5)
        .where('status').equals('New')
        .exec(function (err, docs) {
            if (err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        });
}

exports.getLatestOnline = function (req, res) {
    Ticket.find()
        .sort({
            dateSubmitted: '-1'
        })
        .where('issue').equals('Online')
        .select('ticketId description dateSubmitted')
        .limit(5)
        .where('status').equals('New')
        .exec(function (err, docs) {
            if (err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        });
}
exports.getLatestOther = function (req, res) {
    Ticket.find()
        .sort({
            dateSubmitted: '-1'
        })
        .where('issue').equals('Other')
        .select('ticketId description dateSubmitted')
        .limit(5)
        .where('status').equals('New')
        .exec(function (err, docs) {
            if (err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        });
}

exports.getRecentChanges = function (res, issue) {
    var dateobj = new Date();
   var  fromDate = new Date(dateobj.getFullYear(), dateobj.getMonth(), 1);
    var toDate = new Date(dateobj.getFullYear(), dateobj.getMonth(), 31);


    Ticket.find()
        .where('issue').equals(issue)
        .where('dateUpdate').gte(fromDate).lte(toDate)
        console.log('dateUpdate');
        .exec(function(err, docs){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        }
    );
}