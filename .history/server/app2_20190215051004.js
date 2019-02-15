const User = require('./models/user.model');

app.post('/api/filterUser', (req, res) => {
    data = req.body;
    let userCount;
       // Checking is the searched text is Not A Number
       if(isNaN(+data.searchText)) {

        // console.log(data.searchText);

        User.countDocuments({}).then((count) => {
            userCount = count;
            User.find({$or: [{'customerNumber': {$regex: '.*' + data.searchText + '.*', $options: 'i'}}, {'userType': {$regex: '.*' + data.searchText + '.*', $options: 'i'}}, {'email': {$regex: '.*' + data.searchText + '.*', $options: 'i'}}]}).sort(data.sortOptions).skip(data.offset).limit(data.rowCount).populate('profile').exec().then((result) => {
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
