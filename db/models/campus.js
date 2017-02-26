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
  image: Sequelize.STRING,
  descript: Sequelize.TEXT,
  specialties: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    defaultValue: [],
    set: function(tagStr){
      this.setDataValue('specialties', tagStr.split(", "))
    }
  }
}, {
  hooks: {
    beforeCreate: (campus) => {
      let num = Math.floor(Math.random() * 10) + 1;
      campus.image = `/img/${num}.png`
    }
  },

  scopes: {
    populated: () => ({ // function form lets us use to-be-defined models
      include: [{
        model: db.model('student')
      }]
    })
  }
})
