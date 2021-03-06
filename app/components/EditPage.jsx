import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import AdminForm from '../components/AdminForm'
import List from '../components/List'
import Dropdown from '../components/Dropdown'

export default function(props) {
  return (
    <div className="body">
      <Grid>
        <Row className="show-grid">
          <Col sm={12} md={6}>
            <h2>Edit {props.selectedName}</h2>
            <AdminForm
              handleInput={props.handleInput}
              inputCheck={props.inputCheck}
              type={props.type}
              campuses={props.campuses}
            />
          </Col>

      { props.type === "campus" &&
        <div>
          <Col sm={12} md={6}>
            <h2>Edit Enrolled Students</h2>
            <List
              listItems={props.campusStudents}
              isCampus={true}
              handleDelete={props.handleDelete}
              type="student"
            />
          </Col>

          <Col sm={12} md={6}>
            <h2>Add Students</h2>
            <div className="body">
              <Dropdown listItems={props.students} handleAdd={props.handleAdd} />
            </div>
          </Col>

        </div>
      }
        </Row>
      </Grid>
    </div>
  )
}


