const mongoose = require('mongoose');

const Ticket = mongoose.model('Ticket');

exports.getLatestGeneral = function (req, res) {
    Ticket.find()
        .sort({
            dateSubmitted: '-1'
        })
        .where('issue').equals('General')
        .select('_id ticketId description dateSubmitted')
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
        .select('_id ticketId description dateSubmitted')
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
        .select('_id ticketId description dateSubmitted')
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
        .select('_id ticketId description dateSubmitted')
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
        .select('_id ticketId description dateSubmitted')
        .limit(5)
        .where('status').equals('New')
        .exec(function (err, docs) {
            if (err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        });
}


exports.getRecentChanges = function (res, status) {
    var dateobj = new Date();
   var  fromDate = new Date(dateobj.getFullYear(), dateobj.getMonth(), 1);
    var toDate = new Date(dateobj.getFullYear(), dateobj.getMonth(), 31);


    Ticket.find()
        .where('status').nin('New')
        .where('dateUpdate').gte(fromDate).lte(toDate)
        .exec(function(err, docs){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        }
    );
}