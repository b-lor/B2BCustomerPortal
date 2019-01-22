var express = require('express');
var router = express.Router();

User = require('../models/user.model.js');
Transaction = require('../models/transaction.model.js');

const ctrlTransactions = require('../controllers/transaction.controller');

// get all transaction
router.get('/', ctrlTransactions.getTransactions);

// get single transaction
router.get('/detail/:id', ctrlTransactions.getTransactionById);

// add single transaction
router.post('/', ctrlTransactions.addTransaction);

// update single transaction
// router.put('/update/:id', ctrlTransactions.updateTransaction);
router.put('/update/:id',  function (req, res) {
    
	console.log('transaction update put method');

	var id = req.params.id;
	var transaction = req.body;
	Transaction.updateTransaction(id, transaction, {}, function (err, transaction) {
		if (err) {
			res.send(err);
		}
		res.json(transaction);
	});
});


// Delete transaction
router.delete('/:id', function (req, res) {
    var id = req.params.id;
    Transaction.removeTransaction(id, function (err, transaction) {
        if (err) {
            res.send(err);
        }
        res.json(transaction);
    });
});

module.exports = router;