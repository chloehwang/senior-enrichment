'use strict'
const api = require('express').Router()
const db = require('../db') //syncing db
const { Student, Campus } = require('../db/models')


api.get('/campuses', function(req, res, next) {
	Campus.findAll()
				.then(campuses => res.send(campuses))
				.catch(next)
})

api.get('/campus/:id', function(req, res, next) {
	Campus.scope('populated').findById(req.params.id)
		.then(campus => res.send(campus))
		.catch(next)
})

api.delete('/campus/:id', function(req, res, next) {
	Campus.destroy({where: { id: req.params.id }})
		.then(() => res.send())
		.catch(next)
})

api.put('/campus/:id', function(req, res, next) {
	Campus.update(req.body, {
		where: {id: req.params.id},
		individualHooks: true
	})
		.then(() => res.send())
		.catch(next)
})

api.post('/campus', function(req, res, next) {
	Campus.create(req.body)
		.then(campus => res.send(campus))
		.catch(next)
})

api.get('/students', function(req, res, next) {
	Student.findAll()
				.then(students => res.send(students))
				.catch(next)
})

api.post('/student', function(req, res, next) {
	Student.create(req.body)
		.then(student => res.send(student))
		.catch(next)
})

api.get('/student/:id', function(req, res, next) {
	//looking for scope named 'populated' on the Student model. 'Populated 'scope includes all student's info + their campus's info
	Student.scope('populated').findById(req.params.id)
		.then(student => res.send(student))
		.catch(next)
})

api.delete('/student/:id', function(req, res, next) {
	Student.destroy({where: { id: req.params.id }})
		.then(() => res.send())
		.catch(next)
})

api.put('/student/:id', function(req, res, next) {
	Student.update(req.body, {
		where: {id: req.params.id},
		individualHooks: true
	})
		.then(() => res.send())
		.catch(next)
})

module.exports = api
