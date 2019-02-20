var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');


User = require('../models/user.model.js');
Transaction = require('../models/transaction.model.js');

const ctrlTransactions = require('../controllers/transaction.controller');

router.get('/customer/:customer_id', function (req, res) {
    var customer_id = req.params.customer_id;
    Transaction.getCustomerTransactions(customer_id, function (err, transaction) {
        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});

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

router.get('/customer/balance/', function (req, res) {

    var query = [{
        $match: {
            customerNo: customerNo,
            status: "Completed"
        }
    }, {
                        $group: {
                            _id: "$customerNo",  
                            total: {$sum: "$extAmount"}
                        }
    }];

    Transactions.aggregate(query).toArray(function (err, docs) {
        if (err) {
            assert.equal(null);
        } else {
            console.log(docs);
            res.json(docs);
        }
    });
})



// const Transactions = mongoose.model('Transaction');

router.get('/customer/balance/:customerId', function(req, res) {

    // var customerId = 10020;
    var customerId = req.params.customerNo;

    var balanceTotal = function(customerId, callback){  
        Transactions.aggregate([
                    { $match: { 
                        customerNo: customerId,
                        status: "Completed"
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

    balanceTotal(customerId, function(err, results) {
        if (err) {
            res.send(err);
        } 
        res.json(results);
    }); 
});



module.exports = router;