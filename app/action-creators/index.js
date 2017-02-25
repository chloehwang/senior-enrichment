import axios from 'axios'
import { browserHistory } from 'react-router'

//CAMPUS
export const receiveCampuses = (campuses) => {
  return {
    type: "RECEIVE_CAMPUSES",
    campuses
  }
}

export const receiveCampus = (campus) => {
  return {
    type: "RECEIVE_CAMPUS",
    campus
  }
}

export const addCampus = (campus) => {
  return {
    type: "ADD_CAMPUS",
    campus
  }
}


export const createCampus = (body) => {
  return (dispatch) => {
    axios.post('/api/campus', body)
         .then(campus => dispatch(addCampus(campus.data)))
         .then(action => {  //dispatch RETURNS the action object
            const path = `/campus/${action.campus.id}`;
            browserHistory.push(path);
         })
         .catch(console.error)
    }
}


//STUDENTS
export const receiveStudents = (students) => {
  return {
    type: "RECEIVE_STUDENTS",
    students
  }
}

export const addStudent = (student) => {
  return {
    type: "ADD_STUDENT",
    student
  }
}


export const createStudent = (body) => {
  return (dispatch) => {
    axios.post('/api/student', body)
         .then(student => dispatch(addStudent(student.data)))
         .then(action => {  //dispatch RETURNS the action object
            const path = `/student/${action.student.id}`;
            browserHistory.push(path);
         })
         .catch(console.error)
    }
}

