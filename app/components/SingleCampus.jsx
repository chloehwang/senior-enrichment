import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import DisplayCards from './DisplayCards'
import List from './List'

export default function(props) {
  const campus = props.selected;
  const campusCard = campus && [(
      <Panel key={campus.id}>
        <img className="img-small" src={campus.image} />
        <Table responsive className="table">
          <tbody>
            <tr>
              <td><h3>Address:</h3></td>
              <td><h3>{campus.city}-{campus.planet}</h3></td>
            </tr>
            <tr>
              <td><h3>Specialties:</h3></td>
              <td><h3>{campus.specialties}</h3></td>
            </tr>
            <tr>
              <td><h3>About:</h3></td>
              <td><h3>{campus.descript}</h3></td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    )]

  return (
    <div className={props.student ? null : "body"}>
      { props.student ? null : <h1>{campus.name}</h1> }
      <DisplayCards cards={campusCard} sm={12} md={12}/>
      { props.student ? null :
          <div>
            <h2>Enrolled Students</h2>
            <List listItems={props.enrolledStudents} type="student" />
          </div>
      }
    </div>
  )
}



