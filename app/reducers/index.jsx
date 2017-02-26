import { combineReducers } from 'redux'

//CAMPUS REDUCER
const campusInitialState = {
  campuses: [],
  selectedCampus: {}
}

const campusReducer = (state = campusInitialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case "RECEIVE_CAMPUSES":
      newState.campuses = action.campuses;
      break;

    case "RECEIVE_CAMPUS":
      newState.selectedCampus = action.campus;
      break;

    case "ADD_CAMPUS":
      newState.campuses = [...newState.campuses, action.campus];
      break;

    case "REMOVE_CAMPUS":
      newState.campuses = newState.campuses.filter(campus => campus.id !== +action.id);
      break;

    case "REMOVE_CAMPUS_STUDENT":
      newState.selectedCampus.students = newState.selectedCampus.students.filter(student => student.id !== +action.id);
      break;

    case "ADD_CAMPUS_STUDENT":
      newState.selectedCampus.students = [...newState.selectedCampus.students, action.student];
      break;

    default: return state
  }

  return newState
};

//STUDENT REDUCER
const studentInitialState = {
  students: [],
  selectedStudent: {}
}

const studentReducer = (state = studentInitialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case "RECEIVE_STUDENTS":
      newState.students = action.students;
      break;

    case "RECEIVE_STUDENT":
      newState.selectedStudent = action.student;
      break;

    case "ADD_STUDENT":
      newState.students = [...newState.students, action.student];
      break;

    case "REMOVE_STUDENT":
      newState.students = newState.students.filter(student => student.id !== +action.id)
      break;

    default: return state
  }

  return newState
};

export default combineReducers({
  campus: campusReducer,
  student: studentReducer
})
