import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import AdminForm from '../components/AdminForm'
import List from '../components/List'

export default function(props) {
  const type =      props.type;
  const title =     type.slice(0,1).toUpperCase() + type.slice(1);
  const listItems = type === "campus" ? props.campuses : props.students;

  return (
    <div className="body">
      <Grid>
        <Row className="show-grid">
          <Col sm={12} md={6}>
            <h2>Create a {title}</h2>
            <AdminForm
              handleInput={props.handleInput}
              inputCheck={props.inputCheck}
              type={type}
              campuses={props.campuses}
            />
          </Col>
          <Col sm={12} md={6}>
            <h2>Update a {title}</h2>
            <List
              listItems={listItems}
              handleDelete={props.handleDelete}
              isAdmin={true}
              type={type}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  )
}


