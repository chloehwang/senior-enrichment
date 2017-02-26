import React from 'react'
import { connect } from 'react-redux'
import { updateCampus, updateStudent, deleteStudent, removeCampusStudent, changeStudentSchool, addCampusStudent } from '../action-creators'
import EditPage from '../components/EditPage'
import handleInput from '../handleInput'

export default connect(
  (state, ownProps) => {
    let selected = ownProps.params.type === "campus"
                 ? state.campus.selectedCampus
                 : state.student.selectedStudent;

    return {
      selected,
      type: ownProps.params.type,
      campusStudents: selected.students,  //needs to be part of store or else won't rerender when we delete student from campus
      campuses: state.campus.campuses,
      students: state.student.students
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
        dispatch(deleteStudent(e.target.value))
        dispatch(removeCampusStudent(e.target.value))
      },
      handleAdd: function(e) {
        e.preventDefault();
        dispatch(changeStudentSchool({campusId: id}, e.target.item.value))
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

    render () {
      let campusStudents = this.props.campusStudents;
      let enrolledStudentNames = campusStudents && campusStudents.map(student => student.name);
      let students = enrolledStudentNames && this.props.students.filter(student =>
        enrolledStudentNames.indexOf(student.name) === -1);

      return (
        <div className="body">
          <EditPage
            handleInput={this.handleInput}
            handleDelete={this.props.handleDelete}
            handleAdd={this.props.handleAdd}
            selectedName={this.state.name}
            inputCheck={this.state}
            type={this.props.type}
            campuses={this.props.campuses}
            campusStudents={campusStudents}
            students={students}
          />
        </div>
        )
    }
})




