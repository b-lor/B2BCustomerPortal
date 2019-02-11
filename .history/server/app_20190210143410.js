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