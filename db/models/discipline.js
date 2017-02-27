'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('discipline', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
}, {
  hooks: {
    beforeCreate: (disc) => {
      let num = Math.floor(Math.random() * 10) + 1;
      disc.image = `/img/${num}-d.png`;
    }
  },
  scopes: {
    populated: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('campus')
      }]
    })
  }
})
