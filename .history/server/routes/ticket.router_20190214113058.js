var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const jwtHelper = require('../config/jwtHelper');

Ticket = require('../models/ticket.model.js');
const ctrlTicket = require('../controllers/ticket.controller');

router.get('/customer/:customer_id', function (req, res) {
    console.log('server ticket/customer/' + req.params.customer_id);

    var customer_id = req.params.customer_id;
    Ticket.getCustomerTickets(customer_id, function (err, ticket) {

        if (err) {
            res.send(err);
        }
        res.json(ticket);
    });
});



// get all ticket
router.get('/', ctrlTicket.getTickets);

// get all ticket
router.get('/issue/', ctrlTicket.getTicketIssues);

// get all ticket not closed
router.get('/open/', ctrlTicket.getOpenTickets);

// get single ticket
router.get('/:id', ctrlTicket.getTicketById);

// add single ticket
router.post('/', ctrlTicket.addTicket);



router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

		Ticket.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Ticket Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

// update ticket
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        var updatedDate = updateDate();
    var emp = {
		user: req.body.user,
        ticketId: req.body.ticketId,
        issue: req.body.issue,
        description: req.body.description,
        submittedBy: req.body.submittedBy,
        resolution: req.body.resolution,
		priority: req.body.priority,
		status: req.body.status,
        text: req.body.text,
        dateUpdate: updatedDate,
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