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
	Campus.findById(req.params.id)
		.then(campus => res.send(campus))
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
	console.log(req.body)
	Student.create(req.body)
		.then(student => res.send(student))
		.catch(next)
})

module.exports = api
