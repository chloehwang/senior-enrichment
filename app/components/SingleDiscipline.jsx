import React from 'react'
import { Link } from 'react-router'
import { Panel } from 'react-bootstrap'
import DisplayCards from './DisplayCards'

export default function({ selected }) {
  const discipline = selected;
  const campuses = discipline.campuses;

  const disciplineCard = discipline && [(
      <Panel key={discipline.id}>
        <img className="img-small" src={discipline.image} />
        <h2>Specializing Schools</h2>
        <div className="float-left">
          <ul>
            { campuses.length ? campuses.map(campus =>
              <h3 key={campus.id}><li>
                <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
              </li></h3>)
              :
              <h3><li>None for now. Check back later!</li></h3>
            }
          </ul>
        </div>
      </Panel>
    )]

  return (
    <div className="body">
      <h1>{discipline.name}</h1>
      <DisplayCards cards={disciplineCard} sm={12} md={12} />
    </div>
  )
}



