var express = require('express');
var router = express.Router();

const ctrlDashboard= require('../controllers/dashboard.controller');


router.get('/general', function (req, res) {
    ctrlDashboard.getLatestGeneral(req, res);
});

router.get('/billing', function (req, res) {
    ctrlDashboard.getLatestBilling(req, res);
});

router.get('/online', function (req, res) {
    ctrlDashboard.getLatestOnline(req, res);
});

router.get('/other', function (req, res) {
    ctrlDashboard.getLatestOther(req, res);
});

router.get('/general', function (req, res) {
    ctrlDashboard.getLatestGeneral(req, res);
});

router.get('/recent-changes', function(req, res) {
    ctrlDashboard.getRecentChanges(res, 'Recent Changes');
})
module.exports = router;