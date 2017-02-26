import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import AdminEditForm from '../components/AdminEditForm'
import List from '../components/List'

export default (props) => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={12} md={6}>
          <h2>Edit {props.selectedName}</h2>
          <AdminEditForm
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
            listItems={props.students}
            isCampus={true}
            handleDelete={props.handleDelete}
            type="student"
          />
        </Col>
      </div>
    }
      </Row>
    </Grid>
  )
}


