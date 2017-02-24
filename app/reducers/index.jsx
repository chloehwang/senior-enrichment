import { combineReducers } from 'redux'

//CAMPUS REDUCER
const campusInitialState = {
  campuses: []
}

const campusReducer = (state = campusInitialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case "RECEIVE_CAMPUSES":
      newState.campuses = action.campuses;
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

    default: return state
  }

  return newState
};

export default combineReducers({
  campus: campusReducer,
  student: studentReducer
})
