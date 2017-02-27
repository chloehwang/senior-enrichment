import React from 'react';
import { Link } from 'react-router'
import { Panel, Table } from 'react-bootstrap';
import DisplayCards from './DisplayCards'
import SingleCampus from './SingleCampus'

export default function(props) {
  const student = props.selected;
  const studentCard = student && [(
      <Panel key={student.id}>
        <img className="img-small" src={student.image} />
        <Table responsive className="table">
          <tbody>
            <tr>
              <td><h3>Address:</h3></td>
              <td><h3>{student.city}-{student.planet}</h3></td>
            </tr>
            <tr>
              <td><h3>Interests:</h3></td>
              <td><h3>
                { student.specialties.map((spec, i) => <span key={i}><Link to={`/disciplines/${spec}`}>{spec}</Link> / </span>) }
              </h3></td>
            </tr>
            <tr>
              <td><h3>Bio:</h3></td>
              <td><h3>{student.descript}</h3></td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    )]

  return (
    <div className="body">
      <h1>{student.name}</h1>
      <DisplayCards cards={studentCard} sm={12} md={12}/>
      { student.campus &&
        <div>
          <h2>I attend <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link></h2>
          <SingleCampus selected={student.campus} student={true} />
        </div>
      }
    </div>
  )
}



