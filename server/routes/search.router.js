var express = require('express');
var router = express.Router();

const ctrlSearch = require('../controllers/search.controller');


router.post('/ticket', function(req, res){

    ctrlSearch.getTicketById(req, res);

});

router.post('/ticket-date-range', function(req, res){

    ctrlSearch.searchTicketByDateRange(req, res);

});


router.post('/issue', function(req, res){

    ctrlSearch.searchByIssue(req, res);

});

router.post('/priority', function(req, res){

    ctrlSearch.searchByPriority(req, res);

});

router.post('/status', function(req, res){

    ctrlSearch.searchByStatus(req, res);

});

router.post('/tracker', function(req, res){

    ctrlSearch.getTrackerById(req, res);

});

router.post('/tracker-date-range', function(req, res){

    ctrlSearch.searchTrackerByDateRange(req, res);

});


module.exports = router;