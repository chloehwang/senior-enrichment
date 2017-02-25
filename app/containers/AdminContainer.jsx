import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';
import AdminEditInput from '../components/AdminEditInput'
import List from '../components/List'
import { createCampus, createStudent, deleteCampus, deleteStudent } from '../action-creators'

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
        invalidSpecialties: null,
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
        if (!specialties) this.setState({invalidSpecialties: "error"})
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
      const type = this.props.type;
      const title = type.slice(0,1).toUpperCase() + type.slice(1);
      const listItems = type === "campus" ? this.props.campuses : this.props.students;

      return (
        <div className="body">
          { this.props.children && React.cloneElement(this.props.children, this.props) }
        </div>
        )
    }
})




