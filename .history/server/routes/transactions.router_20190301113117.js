var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');


User = require('../models/user.model.js');
Transaction = require('../models/transaction.model.js');

const ctrlTransactions = require('../controllers/transaction.controller');


// get all transaction
router.get('/', ctrlTransactions.getTransactions);

// get single transaction
router.get('/:id', ctrlTransactions.getTransactionById);

// add single transaction
router.post('/', ctrlTransactions.addTransaction);


// Delete transaction
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Transaction.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Transaction Delete :' + JSON.stringify(err, undefined, 2));
        }
    });
});

// update single transaction
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        user: req.body.user,
        invoiceNumber: req.body.invoiceNumber,
        salesOrder: req.body.salesOrder,
        itemNumber: req.body.itemNumber,
        itemDescription: req.body.itemDescription,
        productLine: req.body.productLine,
        unitPrice: req.body.unitPrice,
        extAmount: req.body.extAmount,
        qtyOrdered: req.body.qtyOrdered,
        qtyShipped: req.body.qtyShipped,
        status: req.body.status,
        customerNo: req.body.customerNo,
        salespersonNo: req.body.salespersonNo,
        orderedDate: req.body.orderedDate,
        shippedDate: req.body.shippedDate,
        balance: req.body.balance,
        description: req.body.description
    };
    Transaction.findByIdAndUpdate(req.params.id, {
        $set: emp
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Transaction Update :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/customer/invoice/:customer_id', function (req, res) {



    var customer_id = req.params.customer_id;
    Transaction.getCustomerInvoiceTotal(customer_id, function (err, transaction) {

        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});

router.get('/customer/sales/:customer_id', function (req, res) {

    var customer_id = req.params.customer_id;
    Transaction.getCustomerSalesTotal(customer_id, function (err, transaction) {

        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});

//// test balance

////////////////////////////////////////////////////


const Transactions = mongoose.model('Transaction');

////// get customer transactions

router.get('/customer/:customer_id', function (req, res) {
    var customer_id = req.params.customer_id;
    Transaction.getCustomerTransactions(customer_id, function (err, transaction) {
        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});


router.get('/customer/paid/:customer_id', function (req, res) {

    var customer_id = req.params.customer_id;
    Transaction.getCustomerPaid(customer_id, function (err, transaction) {
        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});

router.get('/customer/unpaid/:customer_id', function (req, res) {
    var customer_id = req.params.customer_id;
    Transaction.getCustomerUnpaid(customer_id, function (err, transaction) {
        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});

router.get('/customer/open/:customer_id', function (req, res) {
    var customer_id = req.params.customer_id;
    Transaction.getOpenOrders(customer_id, function (err, transaction) {
        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});



////////////////// Test below

router.get('/customer/invoice-balance/:customer_id', function(req, res) {

    var customer_id = 10001;
    // var customer_id = req.params.customer_id;

    var balanceTotal = function(customer_id, callback){  
        Transactions.aggregate([
                    { $match: { 
                        customerNo: customer_id,
                        status: "Completed"

                     }},
                    {
                        $group: {
                            _id: "$customerNo",  
                            total: {$sum: "$balance"}
                        }
                    }

                ],
                function(err, results){
                    console.log("this is the result: ", results); 
                    callback(err, results); 
                });
    };

    balanceTotal(customer_id, function(err, results) {
        if (err) {
            res.send(err);
        } 
        res.json(results);
    }); 
});


router.get('/customer/open-sales/:customer_id', function(req, res) {

    // var customerId = 10001;
    var customer_id = req.params.customer_id;

    var orderTotal = function(customer_id, callback){  
        Transactions.aggregate([
                    { $match: { 
                        customerNo: customer_id,
                        status: "Active"
                        // status: "Completed"

                     }},
                    {
                        $group: {
                            _id: "$customerNo",  
                            total: {$sum: "$extAmount"}
                        }
                    }

                ],
                function(err, results){
                    console.log("this is the result: ", results); 
                    callback(err, results); 
                });
    };

    orderTotal(customer_id, function(err, results) {
        if (err) {
            res.send(err);
        } 
        res.json(results);
    }); 
});


/// sales test

router.get('/customer/sales/day')
db.transactions.aggregate([
	{ $match: { 'status': "Completed" } },
	{ $group: { _id: { date: { $dateToString: { format: "%Y-%m-%d", date: "$shippedDate" }}, customer: "$customerNo",  total: {$sum: "$extAmount"}}}}
], function (err, result) {
    if (err) {
        next(err);
    } else {
        res.json(result);
    }
});




module.exports = router;