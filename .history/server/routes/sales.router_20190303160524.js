var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose');


const Transactions = mongoose.model('Transaction');
const ctrlSales = require('../controllers/sales.controller');


// sales per day by customer
router.get('/invoices/customer', function (req, res) {
    var status = "Completed";

    var invoices = function (status, callback) {
        Transactions.aggregate([{
                    $match: {
                        status: "Completed"
                    }
                },
                {
                    $group: {
                        _id: {
                            date: {
                                $dateToString: {
                                    format: "%m-%d-%Y",
                                    date: "$shippedDate"
                                }
                            },
                            customer: "$customerNo",
                            total: {
                                $sum: "$extAmount"
                            }
                        }
                    }
                },
                {
                    $sort: {
                        "_id.date": 1
                    }
                }
            ],
            function (err, results) {
                console.log("this is the result: ", results);
                callback(err, results);
            });
    };

    invoices(status, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// sales per day by all customers
router.get('/invoices', function (req, res) {
    var status = "Completed";

    var invoices = function (status, callback) {
        Transactions.aggregate([
            {
                    $match: {
                        status: "Completed"
                    }
                },
                {
                    $group: {
                        _id: "$shippedDate",
                            total: {
                                $sum: "$extAmount"
                            }
                        
                    }
                }
            ],
            function (err, results) {
                console.log("this is the result: ", results);
                callback(err, results);
            });
    };

    invoices(status, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// orders per day by customer
router.get('/orders/customer', function (req, res) {
    var status = "Active";

    var sales = function (status, callback) {
        Transactions.aggregate([{
                    $match: {
                        status: "Active"
                    }
                },
                {
                    $group: {
                        _id: {
                            date: {
                                $dateToString: {
                                    format: "%m-%d-%Y",
                                    date: "$orderedDate"
                                }
                            },
                            customer: "$customerNo",
                            total: {
                                $sum: "$extAmount"
                            }
                        }
                    }
                },
                {
                    $sort: {
                        "_id.date": 1
                    }
                }
            ],
            function (err, results) {
                console.log("this is the result: ", results);
                callback(err, results);
            });
    };

    sales(status, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// orders per day by customer
router.get('/orders', function (req, res) {
    var status = "Active";

    var sales = function (status, callback) {
        Transactions.aggregate([{
                    $match: {
                        status: "Active"
                    }
                },
                {
                    $group: {
                        _id: "$orderedDate"
                            
                            ,
                            total: {
                                $sum: "$extAmount"
                            }
                        
                    }
                },
                {
                    $sort: {
                        "_id.date": 1
                    }
                }
            ],
            function (err, results) {
                console.log("this is the result: ", results);
                callback(err, results);
            });
    };

    sales(status, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// invoices by customer
router.get('/customer/invoice-sales/:customerNo', function (req, res) {

    var customer_id = parseInt(req.params.customerNo);

    var balanceTotal = function (customer_id, callback) {
        Transactions.aggregate([{
                    $match: {
                        customerNo: customer_id,
                        status: "Completed"
                    }
                },
                {
                    $group: {
                        _id: {
                            date: {
                                $dateToString: {
                                    format: "%m-%d-%Y",
                                    date: "$shippedDate"
                                }
                            },
                            customer: "$customerNo",
                            total: {
                                $sum: "$extAmount"
                            }
                        }
                    }
                },
                {
                    $sort: {
                        "_id.date": 1
                    }
                }

            ],
            function (err, results) {
                console.log("this is the result: ", results);
                callback(err, results);
            });
    };

    balanceTotal(customer_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

//invoice balance per customer
router.get('/customer/invoice-balance/:customerNo', function (req, res) {

    var customer_id = parseInt(req.params.customerNo);

    var balanceTotal = function (customer_id, callback) {
        Transactions.aggregate([{
                    $match: {
                        customerNo: customer_id,
                        status: "Completed",
                        balance: {
                            $gt: 0
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            date: {
                                $dateToString: {
                                    format: "%m-%d-%Y",
                                    date: "$shippedDate"
                                }
                            },
                            customer: "$customerNo",
                            total: {
                                $sum: "$extAmount"
                            }
                        }
                    }
                },
                {
                    $sort: {
                        "_id.date": 1
                    }
                }

            ],
            function (err, results) {
                console.log("this is the result: ", results);
                callback(err, results);
            });
    };

    balanceTotal(customer_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// inovices paid per customer
router.get('/customer/invoice-paid/:customerNo', function (req, res) {

    var customer_id = parseInt(req.params.customerNo);

    var balanceTotal = function (customer_id, callback) {
        Transactions.aggregate([{
                    $match: {
                        customerNo: customer_id,
                        status: "Completed",
                        balance: {
                            $eq: 0
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            date: {
                                $dateToString: {
                                    format: "%m-%d-%Y",
                                    date: "$shippedDate"
                                }
                            },
                            customer: "$customerNo",
                            total: {
                                $sum: "$extAmount"
                            }
                        }
                    }
                },
                {
                    $sort: {
                        "_id.date": 1
                    }
                }

            ],
            function (err, results) {
                console.log("this is the result: ", results);
                callback(err, results);
            });
    };

    balanceTotal(customer_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// open sales amount per customer
router.get('/customer/open-sales/:customerNo', function (req, res) {

    var customer_id = parseInt(req.params.customerNo);

    var balanceTotal = function (customer_id, callback) {
        Transactions.aggregate([{
                    $match: {
                        customerNo: customer_id,
                        status: "Active"
                    }
                },
                {
                    $group: {
                        _id: {
                            date: {
                                $dateToString: {
                                    format: "%m-%d-%Y",
                                    date: "$orderedDate"
                                }
                            },
                            customer: "$customerNo",
                            total: {
                                $sum: "$extAmount"
                            }
                        }
                    }
                },
                {
                    $sort: {
                        "_id.date": 1
                    }
                }

            ],
            function (err, results) {
                console.log("this is the result: ", results);
                callback(err, results);
            });
    };

    balanceTotal(customer_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

////// new test
router.get('/date', function (req, res) {

var fromDate = req.body.fromDate;
var toDate = req.body.toDate;

// var fromDate = new Date(fromDateString.toISOString());
// var toDate = new Date(toDateString.toISOString());

// var fromDate = new Date("2018-01-01");
// var toDate = new Date("2018-01-31");


var status = "Completed";
console.log(fromDate);
console.log(typeof fromDate);
console.log(toDate);
console.log(typeof toDate);

var balanceTotal = function (status, callback) {
    Transactions.aggregate([{
                $match: {
                    dateRange: { $gte: new ISODate("2018-10-01"), $lte: new ISODate("2018-10-31")},
                    status: "Completed"
                }
            },
            {
                $group: {
                    _id: {
                        date: {
                            $dateToString: {
                                format: "%m-%d-%Y",
                                date: "$orderedDate"
                            }
                        },
                        customer: "$customerNo",
                        total: {
                            $sum: "$extAmount"
                        }
                    }
                }
            },
            {
                $sort: {
                    "_id.date": 1
                }
            }

        ],
        function (err, results) {
            console.log("this is the result: ", results);
            callback(err, results);
        });
};

balanceTotal(status, function (err, results) {
    if (err) {
        res.send(err);
    }
    res.json(results);
});

});

module.exports = router;