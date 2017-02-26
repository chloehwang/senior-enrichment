'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('user') OR Sequelize.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

const Student = require('./student')
const Campus = require('./campus')
const Discipline = require('./discipline')

Student.belongsTo(Campus, {
  foreignKey: {
    field: 'campusId',
    allowNull: false
  },
  onDelete: 'cascade'
})
Campus.hasMany(Student)
Campus.belongsToMany(Discipline, {through: 'campus_program'})
Discipline.belongsToMany(Campus, {through: 'campus_program'})

module.exports = {Student, Campus, Discipline}
