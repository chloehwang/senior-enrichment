import { connect } from 'react-redux'
import SingleStudent from '../components/SingleStudent'

export default connect(
  (state) => {
    return {
      selected: state.student.selectedStudent
    }
  }
)(SingleStudent)


