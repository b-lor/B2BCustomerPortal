var mongoose = require('mongoose');

// Transaction Schema
var transactionSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	invoiceNumber: {
		type: String
	},
	salesOrder: {
		type: String
	},
	itemNumber: {
		type: String
	},
	itemDescription: {
		type: String
	},
	productLine: {
		type: String
	},
	unitPrice: {
		type: Number
	},
	extAmount: {
		type: Number
	},
	qtyOrdered: {
		type: Number
	},
	qtyShipped: {
		type: Number
	},
	status: {
		type: String
	},
	customerNo: {
		type: Number
	},
	salespersonNo: {
		type: Number
	},
	orderedDate: {
		type: Date
	},
	shippedDate: {
		type: Date
	},
	balance: {
		type: Number
	},
	description: {
		type: String
	}
});

////////////////////////////////////

var Transaction = module.exports = mongoose.model('Transaction', transactionSchema);

// Get Transactions
module.exports.getTransactions = function (callback, limit) {
	Transaction.find(callback).limit(limit).populate('user').sort([
		['salesOrder', 'ascending']
	]);
}

// Get Single Transaction
module.exports.getTransactionById = function (id, callback) {
	var query = {
		_id: id
	};
	Transaction.findOne(query, callback).populate('user');
}

// Add Transaction
module.exports.addTransaction = function (transaction, callback) {
	var add = {
		user: transaction.user,
		invoiceNumber: transaction.invoiceNumber,
		salesOrder: transaction.salesOrder,
		itemNumber: transaction.itemNumber,
		itemDescription: transaction.itemDescription,
		productLine: transaction.productLine,
		unitPrice: transaction.unitPrice,
		extAmount: transaction.extAmount,
		qtyOrdered: transaction.qtyOrdered,
		qtyShipped: transaction.qtyShipped,
		status: transaction.status,
		customerNo: transaction.customerNo,
		salespersonNo: transaction.salespersonNo,
		orderedDate: transaction.orderedDate,
		shippedDate: transaction.shippedDate,
		balance: transaction.balance

	}
	Transaction.create(add, callback);
}


// Remove Transaction
module.exports.removeTransaction = function (id, callback) {
	var query = {
		_id: id
	};
	Transaction.remove(query, callback);
}

// Update Transaction
module.exports.updateTransaction = function (id, transaction, options, callback) {
	var query = {
		_id: id
	};
	var update = {
		invoiceNumber: transaction.invoiceNumber,
		salesOrder: transaction.salesOrder,
		itemNumber: transaction.itemNumber,
		itemDescription: transaction.itemDescription,
		productLine: transaction.productLine,
		unitPrice: transaction.unitPrice,
		extAmount: transaction.extAmount,
		qtyOrdered: transaction.qtyOrdered,
		qtyShipped: transaction.qtyShipped,
		status: transaction.status,
		customerNo: transaction.customerNo,
		salespersonNo: transaction.salespersonNo,
		orderedDate: transaction.orderedDate,
		shippedDate: transaction.shippedDate,
		balance: transaction.balance
	}
	Transaction.findOneAndUpdate(query, update, options, callback);
}

// Get Customer Transactions
module.exports.getCustomerTransactions = function (customer_id, callback, limit) {
	var query = {
		user: customer_id
	};

	console.log('model: ' + customer_id);

	Transaction.find(query, callback).limit(limit).populate('user').sort([
		['salesOrder', 'ascending']
	]);
}
////////////////////////


// Get Customer Summary
module.exports.getCustomerInvoiceTotal = function (customer_id, callback, limit) {
	var query = {
		user: customer_id
	};
	Transaction.find(query, callback);
}

module.exports.getCustomerSalesTotal = function (customer_id, callback, limit) {
	var query = {
		user: customer_id
	};
	Transaction.find(query, callback);
}

