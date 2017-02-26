'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
var { createDisciplines, updateDisciplines } = require('../createDisciplines')

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
    set: function(str){
      this.setDataValue('specialties', str.split(", "))
    }
  }
}, {
  hooks: {
    beforeCreate: (campus) => {
      let num = Math.floor(Math.random() * 10) + 1;
      campus.image = `/img/${num}.png`;
    },
    afterCreate: (campus) => {
      createDisciplines(campus).catch(console.error)
    },
    afterUpdate: (campus) => {
      updateDisciplines(campus, 'campus').catch(console.error)
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
