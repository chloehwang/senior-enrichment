import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import DisplayCards from './DisplayCards'

export default function(props) {
  const studentCards = props.students && props.students.map(student => {
    return (
      <Panel key={student.id}>
        <img className="img-responsive" src={student.image} />
        <h3>{student.name}</h3>
        <p>Address: {student.cityNum}-{student.planet}<br />
           Interests: {student.interests}
        </p>
        <Button>View Student's Campus</Button>
      </Panel>
      )
  })

  return (
    <div className="body">
      <h1>Our Students</h1>
      {<DisplayCards cards={studentCards} />}
    </div>
  )
}


