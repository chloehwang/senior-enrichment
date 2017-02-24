'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cityNum: Sequelize.STRING(3),
  planet: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    defaultValue: '/img/planet.png'
  },
  about: Sequelize.TEXT,
  specialties: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }
})
