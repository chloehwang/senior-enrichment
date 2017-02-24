import { connect } from 'react-redux'
import AllCampus from '../components/AllCampus'

export default connect(
  (state) => {
    return {
      campuses: state.campus.campuses
    }
  }
)(AllCampus)


