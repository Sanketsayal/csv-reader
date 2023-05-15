const mongoose = require('mongoose');

require('dotenv').config()



mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;