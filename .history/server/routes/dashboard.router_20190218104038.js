var express = require('express');
var router = express.Router();

const ctrlDashboard= require('../controllers/dashboard.controller');


router.get('/general', function (req, res) {

    ctrlDashboard.getLatestGeneral(req, res);

});

module.exports = router;