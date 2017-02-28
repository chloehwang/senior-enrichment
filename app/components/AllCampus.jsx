import React from 'react'
import { Link } from 'react-router'
import { Panel, Button } from 'react-bootstrap'
import DisplayCards from './DisplayCards'

export default function(props) {
  const campusCards = props.campuses && props.campuses.map(campus => {
    return (
      <Panel key={campus.id}>
        <img className="img-small" src={campus.image} />
        <h3><Link to={`campus/${campus.id}`}>{campus.name}</Link></h3>
        <p>Address: {campus.city}-{campus.planet}<br />
           Specialties: { campus.specialties.map((spec, i) =>
             <span key={i}><Link to={`/disciplines/${spec}`}>{spec}</Link> / </span>)
           }
        </p>
        <Button bsStyle="primary">Tour Campus</Button>
      </Panel>
      )
  })

  return (
    <div className="body">
      <h1>Our Campuses</h1>
      <DisplayCards cards={campusCards} sm={12} md={6}/>
    </div>
  )
}


