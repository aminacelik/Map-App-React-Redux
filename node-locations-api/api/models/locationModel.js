'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  name: {
    type: String,
    required: 'Location name is required field.'
  },
  latitude: {
    type: String,
    required: 'Location latitude is required field.'
  },
  longitude: {
    type: String,
    required: 'Location longitude is required field.'
  },
  category: {
    type: String,
    enum: ['POI', 'hotels', 'shopping_malls'],
    deafult: ['POI']
  }
});

module.exports = mongoose.model('Location', LocationSchema);
