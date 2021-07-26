//importing modules

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const route = require('./routes/route');

//Connect to database
mongoose.connect('mongodb://localhost:27017/contactlist');

//Successful connection
mongoose.connection.on('connected', ()=>{
    console.log('MongoDB connection established');
});

//Connection Error
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('connection error',err);        
    }
});

//port no
const port = 3000;

//Adding middleware - cors
app.use(cors());

//bodyParser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

//testing server
app.get('/',(req, res)=>{
    res.send('Hello world');
});

app.listen(port,()=>{
    console.log(`server started at ${port}`);
});