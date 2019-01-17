const mongoose = require('mongoose');

var roleSchema = new mongoose.Schema({
    roleId: {
        type: Number
    },
    role: {
        type: String
    },
});

module.exports = mongoose.model('Role', roleSchema); 

 // Role Ids
//  10 = customer
//  20 = employee
//  30 = manager
//  99 = admin