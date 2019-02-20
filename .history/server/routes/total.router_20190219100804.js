var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


const ctrTotal = require('../controllers/total.controller');


router.get('/getbalance', ctrTotal.getBalance);


module.exports = router;