var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');


const Transactions = mongoose.model('Transaction');

/// sales test

router.get('/data', function(req, res){
    var cStatus = "Completed";

    var sales = function(cStatus, callback) {
        Transactions.aggregate([
            { $match: { 
                status: cStatus 
            } },
            { $group: { 
                _id: { 
                    date: { $dateToString: { format: "%m-%d-%Y", date: "$shippedDate" }}, 
                    // date: { $dateToString: { format: "%Y-%m-%d", date: "$shippedDate" }}, 
                    customer: "$customerNo",  
                    total: {$sum: "$extAmount"}
                }}}
        ], 
        function(err, results){
            console.log("this is the result: ", results); 
            callback(err, results); 
        });
        };
    
        sales(cStatus, function(err, results) {
            if (err) {
                res.send(err);
            } 
            res.json(results);
        }); 
    });
    


module.exports = router;