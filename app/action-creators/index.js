export const receiveCampuses = (campuses) => {
  return {
    type: "RECEIVE_CAMPUSES",
    campuses
  }
}

export const receiveStudents = (students) => {
  return {
    type: "RECEIVE_STUDENTS",
    students
  }
}
