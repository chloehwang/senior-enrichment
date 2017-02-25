import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';
import AdminEditInput from '../components/AdminEditInput'
import List from '../components/List'
import { createCampus, createStudent, deleteCampus } from '../action-creators'

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
      },
      handleDelete: function (e) {
        e.preventDefault();
        dispatch(deleteCampus(e.target.value))
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
      const title = this.props.type.slice(0,1).toUpperCase() + this.props.type.slice(1);

      return (
        <div className="body">
          <Grid>
            <Row className="show-grid">
              <Col sm={12} md={6}>
                <h2>Create a {title}</h2>
                <AdminEditInput
                  handleInput={this.handleInput}
                  type={this.props.type}
                  state={this.state}
                  campuses={this.props.campuses}
                />
              </Col>
              <Col sm={12} md={6}>
                <h2>Edit a {title}</h2>
                <List
                  listItems={this.props.campuses}
                  handleDelete={this.props.handleDelete}
                  isAdmin={true}
                  type="campus"
                />
              </Col>
            </Row>
          </Grid>
        </div>
        )
    }
})




