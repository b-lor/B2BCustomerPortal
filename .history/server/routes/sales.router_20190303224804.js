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
        Transactions.aggregate([{
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

    var sales = function (customer_id, callback) {
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

    sales(customer_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

//invoice balance per customer
router.get('/customer/invoice-balance/:customerNo', function (req, res) {

    var customer_id = parseInt(req.params.customerNo);

    var balance = function (customer_id, callback) {
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

    balance(customer_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// inovices paid per customer
router.get('/customer/invoice-paid/:customerNo', function (req, res) {

    var customer_id = parseInt(req.params.customerNo);

    var paid = function (customer_id, callback) {
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

    paid(customer_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// open sales amount per customer
router.get('/customer/open-sales/:customerNo', function (req, res) {

    var customer_id = parseInt(req.params.customerNo);

    var sales = function (customer_id, callback) {
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

    sales(customer_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

////// invoiced per date range
router.get('/date/invoice', function (req, res) {

    var fromDate = new Date(req.body.fromDate);
    var toDate = new Date(req.body.toDate);

    var status = "Completed";

    var invoiceDate = function (status, callback) {
        Transactions.aggregate([{
                    $match: {
                        shippedDate: {
                            $gte: fromDate,
                            $lte: toDate
                        },
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

    invoiceDate(status, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });

});

////// sales per month
router.get('/month', function (req, res) {

    var status = "Completed";

    var monthlySales = function (status, callback) {
        Transactions.aggregate([{
                    $project: {
                        month: {
                            $month: "$shippedDate"
                        },
                        year: {
                            $year: "$shippedDate"
                        },
                        extAmount: 1
                    }
                },
                {
                    $group: {
                        _id: {
                            month: "$month",
                            year: "$year"
                        },
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

    monthlySales(status, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });

});

////// sales per week
router.get('/week', function (req, res) {

    var fromDate = new Date(req.body.fromDate);
    var toDate = new Date(req.body.toDate);

    var status = "Completed";

    var perWeek = function (status, callback) {
        Transactions.aggregate([{
                    $project: {
                        week: {
                            $week: "$shippedDate"
                        },
                        month: {
                            $month: "$shippedDate"
                        },
                        year: {
                            $year: "$shippedDate"
                        },
                        extAmount: 1
                    }
                },
                {
                    $group: {
                        _id: {
                            week: "$week",
                            month: "$month",
                            year: "$year"
                        },
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

    perWeek(status, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });

});

// invoices by region by week
router.get('/region/week/:region_id', function (req, res) {

    var region_id = req.params.region_id;

    var region = function (region_id, callback) {
        Transactions.aggregate([{
                    $lookup: {
                        from: "profiles",
                        localField: "user",
                        foreignField: "user",
                        as: "profile"
                    }
                },
                {
                    $match: {
                        "profile.state": region_id
                    }
                },
                {
                    $project: {
                        week: {
                            $week: "$shippedDate"
                        },
                        month: {
                            $month: "$shippedDate"
                        },
                        year: {
                            $year: "$shippedDate"
                        },
                        customerNo: 1,
                        extAmount: 1
                    }
                },
                {
                    $group: {
                        _id: {
                            customerNo: "$customerNo",
                            week: "$week",
                            month: "$month",
                            year: "$year"
                        },
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

    region(region_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

// invoices by region by month
router.get('/region/month/:region_id', function (req, res) {

    var region_id = req.params.region_id;

    var region = function (region_id, callback) {
        Transactions.aggregate([{
                    $lookup: {
                        from: "profiles",
                        localField: "user",
                        foreignField: "user",
                        as: "profile"
                    }
                },
                {
                    $match: {
                        "profile.state": region_id
                    }
                },
                {
                    $project: {
                        month: {
                            $month: "$shippedDate"
                        },
                        year: {
                            $year: "$shippedDate"
                        },
                        customerNo: 1,
                        extAmount: 1
                    }
                },
                {
                    $group: {
                        _id: {
                            customerNo: "$customerNo",
                            month: "$month",
                            year: "$year"
                        },
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

    region(region_id, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
});

////// sales per month by product line
router.get('/month/:productLine', function (req, res) {

    var productLineId = req.params.productLine;

    var monthlySales = function (productLine, callback) {
        Transactions.aggregate([           
            {
                $match: {
                    productLine: productLineId,
                    status: "Completed"
                }
            },

              {
                $project: {
                    month: {
                        $month: "$shippedDate"
                    },
                    year: {
                        $year: "$shippedDate"
                    },
                    extAmount: 1
                }
            },

            {
                $group: {
                    _id: {
                        month: "$month",
                        year: "$year"
                    },
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

    monthlySales(productLineId, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });

});

////// sales per week by product line
router.get('/week/:productLine', function (req, res) {

    var status = "Completed";
    var productLineId = req.params.productLine;

    var perWeek = function (status, callback) {
        Transactions.aggregate([
            {
                $match: {
                    productLine: productLineId,
                    status: "Completed"
                }
            },
            {
                    $project: {
                        week: {
                            $week: "$shippedDate"
                        },
                        month: {
                            $month: "$shippedDate"
                        },
                        year: {
                            $year: "$shippedDate"
                        },
                        extAmount: 1
                    }
                },
                {
                    $group: {
                        _id: {
                            week: "$week",
                            month: "$month",
                            year: "$year"
                        },
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

    perWeek(productLineId, function (err, results) {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });

});

module.exports = router;