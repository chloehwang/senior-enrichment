import React from 'react'
import { Panel, Button } from 'react-bootstrap'
import DisplayCards from './DisplayCards'

export default function(props) {
  const disciplineCards = props.disciplines && props.disciplines.map(disc => {
    return (
      <Panel key={disc.id}>
        <img className="img-small" src={disc.image} />
        <h3>{disc.name}</h3>
        <Button bsStyle="info" href={`disciplines/${disc.name}`}>View Specializing Schools</Button>
      </Panel>
      )
  })

  return (
    <div className="body">
      <h1>Find By Discipline</h1>
      {<DisplayCards cards={disciplineCards} xs={12} sm={6} md={4} />}
    </div>
  )
}


