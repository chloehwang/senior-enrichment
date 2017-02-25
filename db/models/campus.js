'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: Sequelize.STRING(3),
  planet: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    defaultValue: '/img/planet.png'
  },
  descript: Sequelize.TEXT,
  specialties: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
