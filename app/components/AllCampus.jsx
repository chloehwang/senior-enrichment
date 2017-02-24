import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import DisplayCards from './DisplayCards'

export default function(props) {
  const campusCards = props.campuses && props.campuses.map(campus => {
    return (
      <Panel key={campus.id}>
        <img className="img-responsive" src={campus.image} />
        <h3>{campus.name}</h3>
        <p>Address: {campus.cityNum}-{campus.planet}<br />
           Specialties: {campus.specialties}
        </p>
        <Button bsStyle="primary">View Students</Button>
      </Panel>
      )
  })

  return (
    <div className="body">
      <h1>Our Campuses</h1>
      <DisplayCards cards={campusCards} />
    </div>
  )
}


