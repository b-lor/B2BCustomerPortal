const mongoose = require('mongoose');

const Transaction = mongoose.model('Transaction');

module.exports.getTransactions = (req, res, next) => {

    Transaction.find({}).populate('user').sort([['salesOrder', 'ascending']]).exec(function (err, result) {
        return res.status(200).json(result);
    });
}

module.exports.getTransactionById = (req, res, next) => {

    var query = { _id: req.params.id };
    Transaction.findOne(query).populate('user').exec((err, result) => {
        console.log(result);
        return res.status(200).json(result);
    });
}

module.exports.updateTransaction = (req, res, next) => {

    console.log('update transaction');

    var update = {
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
        shippedDate: req.body.shippedDate
    }
    console.log('////////////////////from request//////////////////');
    console.log(update);

    Transaction.findOne({ _id: req.body._id }, (err, transaction) => {
        transaction.invoiceNumber= req.body.invoiceNumber,
        transaction.salesOrder= req.body.salesOrder,
        transaction.itemNumber= req.body.itemNumber,
        transaction.itemDescription= req.body.itemDescription,
        transaction.productLine= req.body.productLine,
        transaction.unitPrice= req.body.unitPrice, 
        transaction.extAmount= req.body.extAmount, 
        transaction.qtyOrdered= req.body.qtyOrdered, 
        transaction.qtyShipped= req.body.qtyShipped,  
        transaction.status= req.body.status, 
        transaction.customerNo= req.body.customerNo,
        transaction.salespersonNo= req.body.salespersonNo,
        transaction.orderedDate= req.body.orderedDate,
        transaction.shippedDate= req.body.shippedDate,

        transaction.save((err, doc) => {
            if (!err)
                res.send(doc);
            else {
                if (err.code == 11000)
                    res.status(422).send(['Duplicate email address found.']);
                else
                    return next(err);
            }

        });
    });

}

module.exports.addTransaction = (req, res, next) => {

    console.log('transaction saved to db');

    var transaction = new Transaction();
    transaction.user= req.body.user,
    transaction.invoiceNumber= req.body.invoiceNumber;
    transaction.salesOrder= req.body.salesOrder;
    transaction.itemNumber= req.body.itemNumber,
    transaction.itemDescription= req.body.itemDescription;
    transaction.productLine= req.body.productLine;
    transaction.unitPrice= req.body.unitPrice;
    transaction.extAmount= req.body.extAmount;
    transaction.qtyOrdered= req.body.qtyOrdered; 
    transaction.qtyShipped= req.body.qtyShipped;  
    transaction.status= req.body.status; 
    transaction.customerNo= req.body.customerNo;
    transaction.salespersonNo= req.body.salespersonNo,
    transaction.orderedDate= req.body.orderedDate;  
    transaction.shippedDate= req.body.shippedDate;

    console.log(transaction);

    transaction.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address found.']);
            else
                return next(err);
        }
    });

    //////////////////////////////////////

}