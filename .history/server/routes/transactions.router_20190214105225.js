var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


User = require('../models/user.model.js');
Transaction = require('../models/transaction.model.js');

const ctrlTransactions = require('../controllers/transaction.controller');

router.get('/customer/:customer_id', function (req, res) {
    console.log('server invoice/customer/' + req.params.customer_id);

    var customer_id = req.params.customer_id;
    Transaction.getCustomerTransactions(customer_id, function (err, transaction) {
        console.log('customer_id');
        console.log(customer_id);

        // console.log('transaction');
        // console.log(transaction);

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
        if (!err) { res.send(doc); }
        else { console.log('Error in Transaction Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



// update single transaction
// router.put('/update/:id', ctrlTransactions.updateTransaction);
// router.put('/update/:id',  function (req, res) {
    
// 	console.log('transaction update put method');

// 	var id = req.params.id;
// 	var transaction = req.body;
// 	Transaction.updateTransaction(id, transaction, {}, function (err, transaction) {
// 		if (err) {
// 			res.send(err);
// 		}
// 		res.json(transaction);
// 	});
// });


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
    Transaction.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Transaction Update :' + JSON.stringify(err, undefined, 2)); }
    });
});


// // Delete transaction
// router.delete('/:id', function (req, res) {
//     var id = req.params.id;
//     Transaction.removeTransaction(id, function (err, transaction) {
//         if (err) {
//             res.send(err);
//         }
//         res.json(transaction);
//     });
// });


module.exports = router;