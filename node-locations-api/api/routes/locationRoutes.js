'use strict';
module.exports = function(app) {
  var location = require('../controllers/locationController');

  app.route('/locations')
    .get(location.list_all)
    .post(location.create);
};
