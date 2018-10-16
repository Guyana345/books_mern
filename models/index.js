const mongoose = require('mongoose');
const URI = require('../config/index');

//connection
mongoose.connect(process.env.MONGODB_URI || URI);

//when connection is successful
mongoose.connection.on('connected', () => {
    console.log('Established Mongoose Default Connection');
});

// when connection throws and error
mongoose.connection.on('error', (err) => {
    console.log('Mongoose Default Connection Error : ' + err);
});