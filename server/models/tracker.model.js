var mongoose = require('mongoose');

// Tracker Schema
var trackerSchema = mongoose.Schema({
    ticket: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Ticket', 
		// required: true
    }, 
    user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User', 
		// required: true
    }, 
    responseId: {
		type: String
	},
	comment: {
		type: String
	},
	other: {
		type: String
    },
	dateUpdated: {
		type: Date,
		default: Date.now
	},
});

var Tracker = module.exports = mongoose.model('Tracker', trackerSchema);

// Get Trackers
module.exports.getTrackers = function (callback, limit) {
	Tracker.find(callback).limit(limit).populate('ticket').populate('user');
}

// Get Single Tracker
module.exports.getTrackerById = function (id, callback) {
	var query = { _id: id };
	Tracker.findOne(query, callback).populate('ticket').populate('user');
}

// Add Tracker
module.exports.addTracker = function (tracker, callback) {
	var add = {
		ticket: tracker.ticket,
        user: tracker.user,
        responseId: tracker.responseId,
		comment: tracker.comment,
		other: tracker.other,
		dateUpdated: tracker.dateUpdated
	}
	Ticket.create(add, callback);
}

// Remove Ticket
module.exports.removeTicket = function (id, callback) {
	var query = { _id: id };
	Tracker.remove(query, callback);
}

// Update Ticket
module.exports.updateTicket = function (id, tracker, options, callback) {
	var query = { _id: id };
	var update = {
		ticket: tracker.ticket,
        user: tracker.user,
        responseId: tracker.responseId,
		comment: tracker.comment,
		other: tracker.other,
		dateUpdated: tracker.dateUpdated
	}
	Tracker.findOneAndUpdate(query, update, options, callback);
}

// Get Customer Tickets
module.exports.getCustomerTrackers = function (ticket_id, callback, limit) {
	var query = { ticket: ticket_id };

	console.log('model: ' + ticket_id);

	Tracker.find(query, callback).limit(limit).populate('ticket').populate('user').sort([['_id', 'ascending']]);
}