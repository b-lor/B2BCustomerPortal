var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const jwtHelper = require('../config/jwtHelper');

Tracker = require('../models/tracker.model.js');

const ctrlTracker = require('../controllers/tracker.controller');

router.get('/ticket/:customer_id', function (req, res) {
    console.log('here are your tracker details' + req.params.customer_id);

    var customer_id = req.params.customer_id;
    Tracker.getCustomerTrackers(customer_id, function (err, tracker) {
        // console.log('customer_id');
        // console.log(customer_id);

        // console.log('transaction');
        // console.log(transaction);

        if (err) {
            res.send(err);
        }
        res.json(tracker);
    });
});



// get all tracker
router.get('/', ctrlTracker.getTrackers);

// get single tracker
router.get('/:id', ctrlTracker.getTrackerById);

// add single tracker
router.post('/', ctrlTracker.addTracker);



router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

		Ticket.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

// update tracker
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        var updatedDate = updateDate();
    var emp = {
		ticket: tracker.ticket,
        user: tracker.user,
        responseId: tracker.responseId,
		comment: tracker.comment,
		other: tracker.other,
		dateUpdated: updatedDate
    };
    
    Ticket.findByIdAndUpdate(req.params.id, { $set: emp }, { upsert: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

var updateDate = function (){
    var date = Date.now();
    return date;

}

module.exports = router;