// server.js
const express = require('express');
const app = express();

//routes
const routes = require('./routes');


//server port
const PORT = process.env.PORT || 5000;

//db connection
require('./models')

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ADD THIS LINE
app.use(express.static('client/build'));

app.use(routes);

// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});