const mongoose = require('mongoose');

const Sender = require('../models/sender');
const Parcel = require('../models/parcel');

module.exports = {
    newSender: function (req, res) {
        let newSenderDetails = req.body;
    
        let sender = new Sender(newSenderDetails);
        sender.save(function (err) {
            console.log('Done');
            res.json(sender);
        });
    },

    deleteSender: function (req, res) {
        Sender.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) return res.status(400).json(err);
    
            res.json();
        });
    },

    updateSender: function (req, res) {
        Sender.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, sender) {
            if (err) return res.status(400).json(err);
            if (!actor) return res.status(404).json();
    
            res.json(sender);
        });
    },
};