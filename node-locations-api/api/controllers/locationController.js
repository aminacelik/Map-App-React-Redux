'use strict';


var mongoose = require('mongoose'),
  Location = mongoose.model('Location');


exports.list_all = function(req, res) {
  Location.find({}, function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.create = function(req, res) {
  var new_location = new Location(req.body);
  new_location.save(function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};
