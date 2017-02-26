'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true
  },
  city: Sequelize.STRING(3),
  planet: Sequelize.STRING,
  image: Sequelize.STRING,
  descript: Sequelize.TEXT,
  specialties: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate: (student) => {
      let num = Math.floor(Math.random() * 10) + 1;
      student.image = `/img/${num}-girl.png`
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
