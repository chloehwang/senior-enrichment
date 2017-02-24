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
  cityNum: Sequelize.STRING(3),
  planet: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    defaultValue: '/img/student.png'
  },
  bio: Sequelize.TEXT,
  interests: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }
})
