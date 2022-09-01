const mongoose = require('mongoose');

const Sender = require('../models/sender');
const Parcel = require('../models/parcel');

module.exports = {
    getAllParcels: function (req, res) {
        Parcel.find(function (err, parcels) {
            if (err) {
                return res.json(err);
            } else {
                res.json(parcels);
            }
        });
    },

    addParcel: function (req, res) {

    },

    

    

    

    
};