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
app.get('/parcel', parcel.getParcelsByAddress);
app.put('/parcel/address', parcel.updateParcelAddress);
app.put('/parcel/cost', parcel.updateParcelIncCost);
app.put('/sender/parcel', parcel.addParcel);
app.delete('/parcel', parcel.deleteParcel);


//Sender
app.post('/sender', sender.newSender);
app.get('/sender/:name', sender.getSenderName);
app.delete('/sender', sender.deleteSender)
app.put('/sender', sender.updateSenderName);
