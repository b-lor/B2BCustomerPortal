var mongoose = require('mongoose');

// Ticket Schema
var ticketSchema = mongoose.Schema({
    user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User', 
		// required: true
    }, 
    ticketId: {
		type: String,
		unique: true
	},
	issue: {
		type: String
	},
	description: {
		type: String
	},
	submittedBy: {
		type: String
	},
	resolution: {
		type: String,
		default: 'Open'
	},
	priority: {
		type: String
	},
	status: {
		type: String,
		default: 'New',
	},
	text: {
		type: String
	},
	dateSubmitted: {
		type: Date,
		default: Date.now
	},
	dateUpdate: {
		type: Date,
		default: Date.now
	},
});

var Ticket = module.exports = mongoose.model('Ticket', ticketSchema);

// Get Tickets
module.exports.getTickets = function (callback, limit) {
	Ticket.find(callback).limit(limit).populate('user');
}

// Get Single Ticket
module.exports.getTicketById = function (id, callback) {
	var query = { _id: id };
	Ticket.findOne(query, callback).populate('user');
}

// Add Ticket
module.exports.addTicket = function (ticket, callback) {
	var add = {
		user: ticket.user,
		ticketId: ticket.ticketId,
		issue: ticket.issue,
		description: ticket.description,
		submittedBy: ticket.submittedBy,
		resolution: ticket.resolution,
		priority: ticket.priority,
		status: ticket.status,
		text: ticket.text
	}
	Ticket.create(add, callback);
}

// Remove Ticket
module.exports.removeTicket = function (id, callback) {
	var query = { _id: id };
	Ticket.remove(query, callback);
}

// Update Ticket
module.exports.updateTicket = function (id, ticket, options, callback) {
	var query = { _id: id };
	var update = {
		ticketId: ticket.ticketId,
		issue: ticket.issue,
		description: ticket.description,
		submittedBy: ticket.submittedBy,
		resolution: ticket.resolution,
		priority: ticket.priority,
		status: ticket.status,
		text: ticket.text
	}
	Ticket.findOneAndUpdate(query, update, options, callback);
}