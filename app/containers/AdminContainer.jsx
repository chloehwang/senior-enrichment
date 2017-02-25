import React from 'react'
import EditInput from '../components/EditInput'
import { connect } from 'react-redux'
import { createCampus, createStudent } from '../action-creators'


export default connect(
  (state, ownProps) => {
    return {
      campuses: state.campus.campuses,
      type: ownProps.params.type
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
      return (
        <div>
          <EditInput
            handleInput={this.handleInput}
            type={this.props.type}
            state={this.state}
            campuses={this.props.campuses}
          />
          <hr/>


        </div>
        )
    }
})




