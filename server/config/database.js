const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/devsOnDeck");
mongoose.connection.on('connected', function() {
    console.log('mongoose connected on mongodb://localhost/devsOnDeck');
});
mongoose.connection.on('error', function(error) {
    console.log('***** mongoose connection error *****', error);
});