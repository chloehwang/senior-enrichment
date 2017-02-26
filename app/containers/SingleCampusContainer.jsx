import { connect } from 'react-redux'
import SingleCampus from '../components/SingleCampus'

export default connect(
  (state) => {
    return {
      selected: state.campus.selectedCampus,
      enrolledStudents: state.campus.selectedCampus.students
    }
  }
)(SingleCampus)


