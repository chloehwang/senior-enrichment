import { connect } from 'react-redux'
import AllDisciplines from '../components/AllDisciplines'

export default connect(
  (state) => {
    return {
      students: state.student.students
    }
  }
)(AllDisciplines)


