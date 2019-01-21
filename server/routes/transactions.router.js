var express = require('express');
var router = express.Router();

User = require('../models/user.model.js');
Transaction = require('../models/transaction.model.js');

const ctrlTransactions = require('../controllers/transaction.controller');

router.get('/', ctrlTransactions.getTransactions);
router.get('/invoice/:id', ctrlTransactions.getTransactionById);
router.post('/add', ctrlTransactions.addTransaction);
router.post('/update', ctrlTransactions.updateTransaction);

router.get('/customer/:customer_id', function (req, res) {
    console.log('server transaction/customer/' + req.params.customer_id);

    var customer_id = req.params.customer_id;
    Invoice.getCustomerTransactions(customer_id, function (err, transaction) {

        console.log(transaction);

        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});

// Delete transaction
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    Invoice.removeTransaction(id, function (err, transaction) {
        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});

module.exports = router;