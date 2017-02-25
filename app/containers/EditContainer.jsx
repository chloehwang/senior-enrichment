import React from 'react'
import { connect } from 'react-redux'
import { createCampus, createStudent, deleteCampus, deleteStudent } from '../action-creators'
import AdminEditForm from '../components/AdminEditForm'
import handleInput from '../handleInput'

export default connect(
  (state, ownProps) => {
    let selected = ownProps.location.pathname.includes('campus')
                 ? state.campus.selectedCampus
                 : state.student.selectedStudent

    return {
      selected: selected
    }
  },
  (dispatch) => {
    return {
      handleSubmit: function(body, type) {
        if (type === "campus") dispatch(createCampus(body))
        else {dispatch(createStudent(body))}
      }
    }
  }
)(class extends React.Component {
    constructor (props) {
      super()
      this.state = {
        name: props.selected.name,
        city: props.selected.city,
        planet: props.selected.planet,
        descript: props.selected.descript,
        specialties: props.selected.specialties,
        invalidName: null,
        invalidSpecs: null,
        invalidEmail: null
      }
      this.handleInput = handleInput.bind(this);
    }

    render() {
      return (
        <div className="body">
          <h2>Edit {this.props.selected.name}</h2>
          <div className="body">
            <AdminEditForm
              handleInput={this.handleInput}
              inputCheck={this.state}
            />
          </div>
        </div>
        )
    }
})




