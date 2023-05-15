const express = require('express');
const PORT = 4000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const { url } = require('inspector');

app.use(expressLayouts);

// app.use(express.urlencoded);
app.use(express.static('./assets'))

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





//routes
app.use('/', require('./routes/csvRoutes'));

//server listening
app.listen(PORT, (err) => {
    if(err) console.log("error listening on", PORT);

    console.log('listening on port', PORT);
})
