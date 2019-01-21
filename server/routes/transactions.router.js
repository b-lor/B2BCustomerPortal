var express = require('express');
var router = express.Router();

User = require('../models/user.model.js');
Transaction = require('../models/transaction.model.js');

const ctrlTransactions = require('../controllers/transaction.controller');

// get all transaction
router.get('/', ctrlTransactions.getTransactions);

// get single transaction
router.get('/invoice/:id', ctrlTransactions.getTransactionById);

// add single transaction
router.post('/add', ctrlTransactions.addTransaction);

// update single transaction
router.put('/update', ctrlTransactions.updateTransaction);

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