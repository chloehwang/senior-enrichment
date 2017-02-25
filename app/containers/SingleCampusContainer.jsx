import { connect } from 'react-redux'
import SingleCampus from '../components/SingleCampus'

export default connect(
  (state, ownProps) => {

    return {
      selected: state.campus.selectedCampus
    }
  }
)(SingleCampus)


