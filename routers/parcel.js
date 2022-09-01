const mongoose = require('mongoose');

const Sender = require('../models/sender');
const Parcel = require('../models/parcel');

module.exports = {
    getAll: function (req, res) {
        Parcel.find(function (err, parcels) {
            if (err) {
                return res.json(err);
            } else {
                res.json(parcels);
            }
        });
    },

    newSender: function (req, res) {
        let newSenderDetails = req.body;
    
        let sender = new Sender(newSenderDetails);
        sender.save(function (err) {
            console.log('Done');
            res.json(sender);
        });
    },
};