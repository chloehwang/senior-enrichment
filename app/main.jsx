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
import StudentContainer from './containers/StudentContainer'
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
  axios.get(`/api/campus/${nextState.params.campusId}`)
      .then(campus => store.dispatch(receiveCampus(campus.data)))
      .then(() => done())
      .catch(console.error)
}

const loadSingleStudent = (nextState, replace, done) => {
  axios.get(`/api/student/${nextState.params.studentId}`)
      .then(student => store.dispatch(receiveStudent(student.data)))
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
        <Route path='campus/:campusId' component={SingleCampusContainer} onEnter={loadSingleCampus} />
        <Route path='students' component={StudentContainer} />
        <Route path='student/:studentId' component={SingleStudentContainer} onEnter={loadSingleStudent} />
        <Route path='admin/:type' component={AdminContainer} />
        <Route path='edit/campus/:campusId' component={EditContainer} onEnter={loadSingleCampus}/>
        <Route path='edit/student/:studentId' component={EditContainer} onEnter={loadSingleStudent}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
