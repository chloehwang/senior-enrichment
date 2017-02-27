import { connect } from 'react-redux'
import AllDisciplines from '../components/AllDisciplines'

export default connect(
  (state) => {
    return {
      disciplines: state.discipline.disciplines
    }
  }
)(AllDisciplines)


