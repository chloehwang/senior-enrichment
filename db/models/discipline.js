'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('discipline', {
  name: Sequelize.STRING
}, {
  scopes: {
    populated: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('campus')
      }]
    })
  }
})
