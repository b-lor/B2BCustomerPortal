var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');


const Transactions = mongoose.model('Transaction');
const ctrlSales = require('../controllers/sales.controller');


/// sales test

router.get('/invoices', function(req, res){
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
    

    router.get('/sales', function(req, res){
        var cStatus = "Active";
    
        var sales = function(cStatus, callback) {
            Transactions.aggregate([
                { $match: { 
                    status: cStatus 
                } },
                { $group: { 
                    _id: { 
                        date: { $dateToString: { format: "%m-%d-%Y", date: "$orderedDate" }}, 
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




module.exports = router;