import React from 'react'
import { connect } from 'react-redux'
import { createCampus, createStudent, deleteCampus, deleteStudent } from '../action-creators'
import AdminHome from '../components/AdminHome'

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
      this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
      e.preventDefault()
      const type = this.props.type;
      const name = e.target.name.value;
      const specialties = e.target.specialties.value;
      const city = e.target.city.value;
      const planet = e.target.planet.value;
      const descript = e.target.descript.value;
      const email = e.target.email;
      const campus = e.target.campus;
      const body = {name, city, planet, descript, specialties};
      let invalid = false;

      if (!name || !specialties) {
        if (!name) this.setState({invalidName: "error"})
        if (!specialties) this.setState({invalidSpecs: "error"})
        invalid = true;
      }

      if (email && !email.value) {
        this.setState({invalidEmail: "error"});
        invalid = true;
      }

      if (type === "campus" && !invalid) this.props.handleSubmit(body, type)
      else if (type === "student" && !invalid) {
        this.props.handleSubmit(Object.assign(body, {email: email.value, campusId: campus.value}), type)
      }
    }

    render() {

      return (
        <div className="body">
          <AdminHome
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




