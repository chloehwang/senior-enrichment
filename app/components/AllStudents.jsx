import React from 'react'
import { Link } from 'react-router'
import { Panel, Button } from 'react-bootstrap'
import DisplayCards from './DisplayCards'

export default function(props) {
  const studentCards = props.students && props.students.map(student => {
    return (
      <Panel key={student.id}>
        <img className="img-small" src={student.image} />
        <h3><Link to={`student/${student.id}`}>{student.name}</Link></h3>
        <p>Address: {student.city}-{student.planet}<br />
           Interests: {student.specialties}
        </p>
        <Button><Link to={`campus/${student.campusId}`}>View Student's Campus</Link></Button>
      </Panel>
      )
  })

  return (
    <div className="body">
      <h1>Our Students</h1>
      {<DisplayCards cards={studentCards} sm={12} md={6}/>}
    </div>
  )
}


