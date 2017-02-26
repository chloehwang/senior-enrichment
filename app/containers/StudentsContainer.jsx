import { connect } from 'react-redux'
import AllStudents from '../components/AllStudents'

export default connect(
  (state) => {
    return {
      students: state.student.students
    }
  }
)(AllStudents)


