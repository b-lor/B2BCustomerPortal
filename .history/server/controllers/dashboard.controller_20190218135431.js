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

exports.getRecentChanges = function (res, status) {
    var monthstats = new Date();
    var fromDate = new Date(monthstats.getFullYear(), monthstats.getMonth(), 1);
    var toDate = new Date(monthstats.getFullYear(), monthstats.getMonth(), 31);

    Ticket.find()
        .where('status').equals(status)
        .where('dateSubmitted').gte(fromDate).lte(toDate)
        .exec(function(err, docs) {
            if (err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
            console.log('docs');
            console.log(docs);

        });

}