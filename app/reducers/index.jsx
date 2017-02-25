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

    case "ADD_CAMPUS":
      newState.campuses = [...newState.campuses, action.campus];
      break;

    case "RECEIVE_CAMPUS":
      newState.selectedCampus = action.campus;
      break;

    default: return state
  }

  return newState
};

//STUDENT REDUCER
const studentInitialState = {
  students: []
}

const studentReducer = (state = studentInitialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case "RECEIVE_STUDENTS":
      newState.students = action.students;
      break;

    case "ADD_STUDENT":
      newState.students = [...newState.students, action.student];
      break;

    default: return state
  }

  return newState
};

export default combineReducers({
  campus: campusReducer,
  student: studentReducer
})
