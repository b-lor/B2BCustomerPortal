var express = require('express');
var router = express.Router();

const ctrTotal = require('../controllers/total.controller');


router.get('/getbalance', ctrTotal.getBalance);



module.exports = router;