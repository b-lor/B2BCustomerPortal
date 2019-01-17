const express = require('express');
const router = express.Router();
const cfgRole = require('../config/role');

const ctrlUser = require('../controllers/user.controller');
const ctrlRole = require('../controllers/role.controller');
const ctrlTransaction = require('../controllers/transaction.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/roles', ctrlRole.roles);

router.post('/transaction', ctrlTransaction.addTransaction);

module.exports = router;


