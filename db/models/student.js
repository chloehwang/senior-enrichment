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
  image: {
    type: Sequelize.STRING,
    defaultValue: '/img/student.png'
  },
  descript: Sequelize.TEXT,
  specialties: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
