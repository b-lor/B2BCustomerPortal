const mongoose = require('mongoose');

const Transaction = mongoose.model('Transaction');


module.exports.getBalance = (req, req) => {
        AccountModel.aggregate([
            { $group: {
                _id: "$user",
                total: { $sum: "$extAmount"  }
            }}
        ], function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
}




