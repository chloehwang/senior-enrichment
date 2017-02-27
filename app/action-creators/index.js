import axios from 'axios'
import { browserHistory } from 'react-router'

//DISCIPLINE
export const receiveDisciplines = (disciplines) => {
  return {
    type: "RECEIVE_DISCIPLINES",
    disciplines
  }
}

export const receiveDiscipline = (discipline) => {
  return {
    type: "RECEIVE_DISCIPLINE",
    discipline
  }
}

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

export const removeCampus = (id) => {
  return {
    type: "REMOVE_CAMPUS",
    id
  }
}

export const updateCampuses = (id) => {
  return {
    type: "UPDATE_CAMPUSES",
    id
  }
}

export const removeCampusStudent = (id) => {
  return {
    type: "REMOVE_CAMPUS_STUDENT",
    id
  }
}

export const addCampusStudent = (student) => {
  return {
    type: "ADD_CAMPUS_STUDENT",
    student
  }
}

export const getAllCampuses = () => {
  return (dispatch) => {
    axios.get('/api/campuses')
         .then(campuses => dispatch(receiveCampuses(campuses.data)))
         .then(() => {
            const path = `/admin/campus`;
            browserHistory.push(path);
         })
         .catch(console.error)
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

export const deleteCampus = (id) => {
  return (dispatch) => {
    axios.delete(`/api/campus/${id}`)
         .then(() => {
           dispatch(removeCampus(id));
           dispatch(fetchStudents())
          })
         .catch(console.error)
    }
}

export const updateCampus = (body, id) => {
  return (dispatch) => {
    axios.put(`/api/campus/${id}`, body)
         .then(() => dispatch(getAllCampuses()))
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

export const receiveStudent = (student) => {
  return {
    type: "RECEIVE_STUDENT",
    student
  }
}

export const addStudent = (student) => {
  return {
    type: "ADD_STUDENT",
    student
  }
}

export const removeStudent = (id) => {
  return {
    type: "REMOVE_STUDENT",
    id
  }
}

export const fetchStudents = () => {
  return (dispatch) => {
    axios.get('/api/students')
         .then(students => dispatch(receiveStudents(students.data)))
         .catch(console.error)
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

export const deleteStudent = (id) => {
  return (dispatch) => {
    axios.delete(`/api/student/${id}`)
         .then(() => dispatch(removeStudent(id)))
         .catch(console.error)
    }
}

export const updateStudent = (body, id) => {
  return (dispatch) => {
    axios.put(`/api/student/${id}`, body)
         .then(() => dispatch(getAllStudents()))
         .catch(console.error)
    }
}

export const changeStudentSchool = (body, id) => {
  return (dispatch) => {
    const updateSchool = axios.put(`/api/student/${id}`, body);
    const findStudent = axios.get(`/api/student/${id}`);

    Promise.all([updateSchool, findStudent])
      .then(([_, student]) => dispatch(addCampusStudent(student.data)))
      .catch(console.error)
    }
}
