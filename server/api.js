'use strict'
const api = require('express').Router()
const db = require('../db') //syncing db
const { Student, Campus } = require('../db/models')


api.get('/campuses', function(req, res, next) {
	Campus.findAll()
				.then(campuses => res.send(campuses))
				.catch(next)
})

api.get('/students', function(req, res, next) {
	Student.findAll()
				.then(students => res.send(students))
				.catch(next)
})

module.exports = api
