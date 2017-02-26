import React from 'react'
import { connect } from 'react-redux'
import { updateCampus, updateStudent, deleteStudent, removeCampusStudent } from '../action-creators'
import AdminEditForm from '../components/AdminEditForm'
import List from '../components/List'
import handleInput from '../handleInput'

export default connect(
  (state, ownProps) => {
    let isCampus = ownProps.location.pathname.includes('campus');
    let selected = isCampus ? state.campus.selectedCampus : state.student.selectedStudent;
    let type = isCampus ? "campus" : "student"

    return {
      selected,
      type,
      students: selected.students,  //needs to be part of store or else won't rerender when we delete student from campus
      campuses: state.campus.campuses
    }
  },
  (dispatch, ownProps) => {
    const id = ownProps.params.id;

    return {
      handleSubmit: function(body, type) {
        if (type === "campus") dispatch(updateCampus(body, id))
        else {dispatch(updateStudent(body, id))}
      },
      handleDelete: function (e) {
        e.preventDefault();
        dispatch(removeCampusStudent(e.target.value))
        dispatch(deleteStudent(e.target.value))
      }
    }
  }
)(class extends React.Component {
    constructor (props) {
      super()
      this.state = {
        name: props.selected.name,
        email: props.selected.email,
        campus: props.selected.campus,
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
              type={this.props.type}
              campuses={this.props.campuses}
            />
          </div>

          { this.props.type === "campus" &&
            <div>
              <h2>Edit Students</h2>
              <List
                listItems={this.props.students}
                isAdmin={true}
                handleDelete={this.props.handleDelete}
                type="student"
              />
            </div>
          }
        </div>
        )
    }
})




