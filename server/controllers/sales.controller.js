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






/////////////////// new test


// module.exports.searchTicketByDateRange = function (req, res) {

//     var fromDate = req.body.fromDate;
//     fromDate = fromDate + " 00:00:00";
//     var toDate = req.body.toDate;
//     toDate = toDate + " 23:59:59";
//     Ticket.find()
//         .where('dateSubmitted')
//         .gte(fromDate)
//         .lte(toDate)
//         .populate('user')
//         .exec(function (err, result) {
//             if (err) return res.status(500).json("Internal Server Error");
//             res.status(200).json(result);
//         });
// }

module.exports.customerInvoiceBalance = function (req, res) {

	var customerNo = req.body.customerNo;
	console.log(customerNo);
        Transaction.aggregate([
                    { $match: {
                        customerNo: customerNo,
                        status: "Completed"

                     }},
                    {
                        $group: {
                            _id: "$customerNo",  
                            total: {$sum: "$balance"}
                        }
                    }

                ],
        function (err, result) {
            if (err) return res.status(500).json("Internal Server Error");
            res.status(200).json(result);
                })

};
