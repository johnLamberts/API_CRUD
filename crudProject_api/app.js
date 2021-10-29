// import express
const express = require('express');

// import colors

const colors = require('colors');

// import mongoose
const mongoose = require('mongoose');

// import cors
const cors = require('cors');

//execute express
const app = express();

app.use(express.json());

//importing dotenv
require('dotenv/config');


// Import ROUTES 

const postsRoute = require('./routes/crud');

var corsOption = {
    origin: 'http://localhost:3000',
    optionSucessStatus: 200
}

app.use(cors(corsOption));
app.use('/posts', postsRoute); //middlewares

// Routes 
app.get('/', (req, res) => {
    res.send('Your home');
})

// Connect to DB    
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB : '.blue.underline.bold);
});

//Start listening from the server
app.listen(3000);


// -----------------------------------------------------------------