'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'

//AXIOS, REDUX, STORE
import axios from 'axios'
import store from './store'
import { receiveCampuses, receiveCampus, receiveStudents, receiveStudent } from './action-creators'

//REACT COMPONENTS
import App from './components/App'
import Home from './components/Home'
import CampusContainer from './containers/CampusContainer'
import StudentsContainer from './containers/StudentsContainer'
import AdminContainer from './containers/AdminContainer'
import EditContainer from './containers/EditContainer'
import SingleCampusContainer from './containers/SingleCampusContainer'
import SingleStudentContainer from './containers/SingleStudentContainer'

const loadData = () => {
  const fetchCampuses = axios.get('/api/campuses')
  const fetchStudents = axios.get('/api/students')

  Promise.all([fetchCampuses, fetchStudents])
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses.data))
      store.dispatch(receiveStudents(students.data))
    })
    .catch(console.error)
}

const loadSingleCampus = (nextState, replace, done) => {
  axios.get(`/api/campus/${nextState.params.id}`)
      .then(campus => store.dispatch(receiveCampus(campus.data)))
      .then(() => done())
      .catch(console.error)
}

const loadSingleStudent = (nextState, replace, done) => {
  axios.get(`/api/student/${nextState.params.id}`)
      .then(student => store.dispatch(receiveStudent(student.data)))
      .then(() => done())
      .catch(console.error)
}

const loadSingleEdit = (nextState, replace, done) => {
  axios.get(`/api/${nextState.params.type}/${nextState.params.id}`)
      .then(found => {
        let action = nextState.params.type === "campus" ? receiveCampus : receiveStudent;
        store.dispatch(action(found.data))
      })
      .then(() => done())
      .catch(console.error)
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} onEnter={loadData}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        <Route path='campuses' component={CampusContainer} />
        <Route path='campus/:id' component={SingleCampusContainer} onEnter={loadSingleCampus} />
        <Route path='students' component={StudentsContainer} />
        <Route path='student/:id' component={SingleStudentContainer} onEnter={loadSingleStudent} />
        <Route path='admin/:type' component={AdminContainer} />
        <Route path='edit/:type/:id' component={EditContainer} onEnter={loadSingleEdit} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
