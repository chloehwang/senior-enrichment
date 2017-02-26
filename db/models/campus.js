'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const createCampusDisciplines = (campus) => {
  let createDiscPromises = campus.specialties.map(spec =>
    db.model('discipline').findOrCreate({where: {name: spec}}));

  return Promise.all(createDiscPromises)
    .then(createdDiscs => {
      let discs = createdDiscs.map(([disc, _]) => disc);
      return [campus.addDisciplines(discs), discs]
    })
}


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
    },
    afterCreate: (campus) => {
      createCampusDisciplines(campus).catch(console.error)
    },
    afterUpdate: (campus) => {
      createCampusDisciplines(campus)
        .then(([_, added]) => {
          let findAssociated = db.model('campus_discipline').findAll({where: {campusId: campus.id}});
          return Promise.all([added, findAssociated]);
        })
        .then(([addedDiscs, assocDiscs]) => {
          let added =  addedDiscs.map(disc => disc.id);
          let associated = assocDiscs.map(disc => disc.disciplineId);
          let toBeDestroyed = associated.filter(assoc => added.indexOf(assoc) === -1);
          return db.model('campus_discipline').destroy({
            where: {
              disciplineId: toBeDestroyed,
              campusId: campus.id
            }})
        })
        .catch(console.error)
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
