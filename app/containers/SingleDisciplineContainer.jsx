import { connect } from 'react-redux'
import SingleDiscipline from '../components/SingleDiscipline'

export default connect(
  (state) => {
    return {
      selected: state.discipline.selected
    }
  }
)(SingleDiscipline)


