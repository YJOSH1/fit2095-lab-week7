const express = require('express');
const mongoose = require('mongoose');

const parcel = require('./routers/parcel');
const sender = require('./routers/sender');

const app = express();

app.listen(8080);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/poms', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');

});

//Endpoints
//Parcel

//Sender
app.post('/sender', sender.newSender);