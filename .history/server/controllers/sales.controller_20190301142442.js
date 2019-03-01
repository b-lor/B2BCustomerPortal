var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');


const Transaction = mongoose.model('Transaction');

// Get Customer Transactions
module.exports.getCustomerTransactions = function (customer_id, callback, limit) {
	var query = {
		user: customer_id
	};

	Transaction.find(query, callback).populate('user').sort([
		['salesOrder', 'ascending']
	]);
}

module.exports.getCustomerPaid = function (customer_id, callback, limit) {
	var query = {
		user: customer_id
	};
	Transaction.find(query)
	.where('status').equals('Completed')
	.where('balance').equals(0)
	.populate('user').sort([
		['salesOrder', 'ascending']
	])
	.exec(callback);
}

module.exports.getCustomerUnpaid = function (customer_id, callback, limit) {
	var query = {
		user: customer_id
	};

	Transaction.find(query)
	.where('status').equals('Completed')
	.where('balance').gt(0)
	.populate('user').sort([
		['salesOrder', 'ascending']
	])
	.exec(callback);
}

module.exports.getOpenOrders = function (customer_id, callback, limit) {
	var query = {
		user: customer_id
	};

	Transaction.find(query)
	.where('status').equals('Active')
	.populate('user').sort([
		['salesOrder', 'ascending']
	])
	.exec(callback);
}
////////

// Get Customer Summary
module.exports.getCustomerInvoiceTotal = function (customer_id, callback, limit) {
	var query = {
		user: customer_id
	};
	Transaction.find(query, callback);
}

