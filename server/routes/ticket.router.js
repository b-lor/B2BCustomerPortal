var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


User = require('../models/user.model.js');
Ticket = require('../models/ticket.model.js');

const ctrlTicket = require('../controllers/ticket.controller');

// get all transaction
router.get('/', ctrlTicket.getTickets);

// get single transaction
router.get('/detail/:id', ctrlTicket.getTicketById);

// add single transaction
router.post('/', ctrlTicket.addTicket);

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
		user: req.body.user,
		ticketId: req.body.ticketId,
		description: req.body.description,
		priority: req.body.priority,
		status: req.body.status,
		text: req.body.text
    };
    Ticket.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Update :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

		Ticket.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;