const mongoose = require('mongoose');

const Transaction = mongoose.model('Transaction');


module.exports.getBalance = (req, req, next) => {
    Transaction.aggregate(
        [{$match: {status: "Active"}}]
    );
}




