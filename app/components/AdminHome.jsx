import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import AdminCreateForm from '../components/AdminCreateForm'
import List from '../components/List'

export default (props) => {
  const type = props.type;
  const title = type.slice(0,1).toUpperCase() + type.slice(1);
  const listItems = type === "campus" ? props.campuses : props.students;

  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={12} md={6}>
          <h2>Create a {title}</h2>
          <AdminCreateForm
            handleInput={props.handleInput}
            type={type}
            campuses={props.campuses}
            invalidName={props.inputCheck.invalidName}
            invalidEmail={props.inputCheck.invalidEmail}
            invalidSpecs={props.inputCheck.invalidSpecs}
          />
        </Col>
        <Col sm={12} md={6}>
          <h2>Edit a {title}</h2>
          <List
            listItems={listItems}
            handleDelete={props.handleDelete}
            isAdmin={true}
            type={type}
          />
        </Col>
      </Row>
    </Grid>
  )
}


