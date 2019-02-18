const mongoose = require('mongoose');

const Ticket = mongoose.model('Ticket');

exports.getLatestGeneral = function(req, res){
    Ticket.find()
        .sort({ dateSubmitted : '-1'})
        .where('issue').equals('General')
        .select('ticketId description dateSubmitted')
        .limit(5)
        .where('status').equals('New')
        .exec(function(err, docs){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        }
    );
}