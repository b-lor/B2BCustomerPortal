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


router.get('/customer/balance/', ctrlTransactions.getCustomerBalance);


const Transactions = mongoose.model('Transaction');


// router.get('/customer/balance/', function (req, res) {
//     Transactions.aggregate([
//         { 
//             $match: {
//                 shippedDate: {
//                 $gte: ISODate("2018-01-01T00:00:00.000Z"),
//                 $lt: ISODate("2019-01-31T23:59:59.000Z")
//               }    
//             }
//           }, 
//         {
//             $group: {
//                 _id: { customerNo: "$customerNo"},
//                 total: { $sum: "$extAmount"} 
//         }

//         }
//     ], function (err, results) {
//         console.log(err, results);
//         var totals = results.map(function (result) {
//             return { [result._id]: results.total};
//         });
//         console.log('totals');
//         console.log(totals);
//         console.log('total');
//         console.log(total);

//     }
//     )
// });



////////////////// working here

router.get('/customer/balance/:customerId', function(req, res) {

    var customerId = 10001;
    // var customerId = req.params.customerNo;

    var balanceTotal = function(customerId, callback){  
        Transactions.aggregate([
                    { $match: { 
                        customerNo: customerId,
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

    balanceTotal(customerId, function(err, results) {
        if (err) {
            res.send(err);
        } 
        res.json(results);
    }); 
});

router.get('/customer/openorders/:customerId', function(req, res) {

    var customerId = 10001;
    // var customerId = req.params.customerNo;

    var balanceTotal = function(customerId, callback){  
        Transactions.aggregate([
                    { $match: { 
                        customerNo: customerId,
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

    balanceTotal(customerId, function(err, results) {
        if (err) {
            res.send(err);
        } 
        res.json(results);
    }); 
});

module.exports = router;