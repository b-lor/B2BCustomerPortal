require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const rtsIndex = require('./routes/index.router');
const rtsUser = require('./routes/user.router');
const rtsRole = require('./routes/role.router');
const rtsTransaction = require('./routes/transactions.router');
const rtsTicket = require('./routes/ticket.router');
const rtsProfile = require('./routes/user.profile');
const rtsTracker = require('./routes/tracker.router');
const rtsSearch = require('./routes/search.router');
const rtsDashboard = require('./routes/dashboard.router');
const rtsSales = require('./routes/sales.router');


var app = express();
app.use(cookieParser());

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', rtsIndex);
app.use('/api/user', rtsUser);
app.use('/api/transaction', rtsTransaction);
app.use('/api/profile', rtsProfile);
app.use('/api/role', rtsRole);
app.use('/api/ticket', rtsTicket);
app.use('/api/tracker', rtsTracker);
app.use('/api/search', rtsSearch);
app.use('/api/dashboard', rtsDashboard);
app.use('/api/sales', rtsSales);


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
    else{
        console.log(err);
    }
});

app.get('*', function(req, res,next){
    res.locals.user = req.user || null;
    next();
})

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));


const Ticket = require('./models/ticket.model');

app.post('/api/filter', (req, res) => {
    data = req.body;
    let ticketCount;
       // Checking is the searched text is Not A Number
       if(isNaN(+data.searchText)) {

        // console.log(data.searchText);

        Ticket.countDocuments({}).then((count) => {
            ticketCount = count;
            Ticket.find({$or: [{'resolution': {$regex: '.*' + data.searchText + '.*', $options: 'i'}}, {'status': {$regex: '.*' + data.searchText + '.*', $options: 'i'}}]}).sort(data.sortOptions).skip(data.offset).limit(data.rowCount).populate('user').exec().then((result) => {
                res.status(200).json({
                    title: 'Fetched Tickets',
                    obj: result,
                    count: ticketCount
                });
            }).catch((err) => {
                res.status(500).json({
                    title: 'Error fetching tickets',
                    error: err
                });
            });
        }).catch((err) => {
            res.status(500).json({
                title: 'Error fetching tickets',
                error: err
            });
        });

    } else if(+data.searchText > 0) {   // If the searched text is a number
        
        Ticket.countDocuments({}).then((count) => {
            ticketCount = count;
            Ticket.find({ticketId: +data.searchText}).sort(data.sortOptions).skip(data.offset).limit(data.rowCount).populate('user').exec().then((result) => {
                res.status(200).json({
                    title: 'Fetched Tickets 2',
                    obj: result,
                    count: ticketCount
                });
            }).catch((err) => {
                res.status(500).json({
                    title: 'Error fetching tickets',
                    error: err
                });
            });
        }).catch((err) => {
            res.status(500).json({
                title: 'Error fetching tickets',
                error: err
            });
        });

    } else {  // Finding all the records

        Ticket.countDocuments({}).then((count) => {
            ticketCount = count;
            Ticket.find({}).sort(data.sortOptions).skip(data.offset).limit(data.rowCount).populate('user').exec().then((result) => {
                res.status(200).json({
                    title: 'Fetched Tickets 3',
                    obj: result,
                    count: ticketCount
                });
            }).catch((err) => {
                res.status(500).json({
                    title: 'Error fetching tickets',
                    error: err
                });
            });
        }).catch((err) => {
            res.status(500).json({
                title: 'Error fetching tickets',
                error: err
            });
        });
    }

});

const User = require('./models/user.model');

app.post('/api/filteruser', (req, res) => {
    data = req.body;
    let userCount;
       // Checking is the searched text is Not A Number
       if(isNaN(+data.searchText)) {

        // console.log(data.searchText);

        User.countDocuments({}).then((count) => {
            userCount = count;
            User.find({$or: [{'email': {$regex: '.*' + data.searchText + '.*', $options: 'i'}}, {'userType': {$regex: '.*' + data.searchText + '.*', $options: 'i'}}]}).sort(data.sortOptions).skip(data.offset).limit(data.rowCount).populate('profile').exec().then((result) => {
                res.status(200).json({
                    title: 'Fetched User',
                    obj: result,
                    count: userCount
                });
            }).catch((err) => {
                res.status(500).json({
                    title: 'Error fetching User',
                    error: err
                });
            });
        }).catch((err) => {
            res.status(500).json({
                title: 'Error fetching User',
                error: err
            });
        });

    } else if(+data.searchText > 0) {   // If the searched text is a number
        
        User.countDocuments({}).then((count) => {
            userCount = count;
            User.find({customerNumber: +data.searchText}).sort(data.sortOptions).skip(data.offset).limit(data.rowCount).populate('profile').exec().then((result) => {
                res.status(200).json({
                    title: 'Fetched users 2',
                    obj: result,
                    count: userCount
                });
            }).catch((err) => {
                res.status(500).json({
                    title: 'Error fetching users',
                    error: err
                });
            });
        }).catch((err) => {
            res.status(500).json({
                title: 'Error fetching users',
                error: err
            });
        });

    } else {  // Finding all the records

        User.countDocuments({}).then((count) => {
            userCount = count;
            User.find({}).sort(data.sortOptions).skip(data.offset).limit(data.rowCount).populate('profile').exec().then((result) => {
                res.status(200).json({
                    title: 'Fetched users 3',
                    obj: result,
                    count: userCount
                });
            }).catch((err) => {
                res.status(500).json({
                    title: 'Error fetching users',
                    error: err
                });
            });
        }).catch((err) => {
            res.status(500).json({
                title: 'Error fetching users',
                error: err
            });
        });
    }

});
