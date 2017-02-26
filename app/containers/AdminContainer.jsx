import React from 'react'
import { connect } from 'react-redux'
import { createCampus, createStudent, deleteCampus, deleteStudent } from '../action-creators'
import AdminPage from '../components/AdminPage'
import handleInput from '../handleInput'

export default connect(
  (state, ownProps) => {
    return {
      campuses: state.campus.campuses,
      students: state.student.students,
      type: ownProps.params.type
    }
  },
  (dispatch) => {
    return {
      handleSubmit: function(body, type) {
        if (type === "campus") dispatch(createCampus(body))
        else {dispatch(createStudent(body))}
      },
      handleDelete: function (e, type) {
        e.preventDefault();
        if (type === "campus") dispatch(deleteCampus(e.target.value))
        else {dispatch(deleteStudent(e.target.value))}
      }
    }
  }
)(class extends React.Component {
    constructor () {
      super()
      this.state = {
        invalidName: null,
        invalidSpecs: null,
        invalidEmail: null
      }
      this.handleInput = handleInput.bind(this);
    }

    render() {
      return (
        <div className="body">
          <AdminPage
            type={this.props.type}
            campuses={this.props.campuses}
            students={this.props.students}
            handleInput={this.handleInput}
            handleDelete={this.props.handleDelete}
            inputCheck={this.state}
          />
        </div>
        )
    }
})




