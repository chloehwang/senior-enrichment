import React from 'react';
import { Link } from 'react-router'
import { Table } from 'react-bootstrap';


export default function(props) {
const type = props.type;

const rows = props.listItems && props.listItems.map(item => {
  return (
    <tr key={item.id}>
      <td><h4>{item.id}</h4></td>
      <td><Link to={`/${type}/${item.id}`}><h4>{item.name}</h4></Link></td>
      <td>{ props.isAdmin ?
        <button
          className="btn btn-xs btn-danger"
          value={item.id}
          onClick={(e) => props.handleDelete(e, type)}>x
        </button>
          : <h4>{item.email}</h4>
        }
      </td>
      { props.isAdmin && type !== "student" ? <td><Link to={`/edit/${type}/${item.id}`}>
          <button className="btn btn-xs btn-info" value={item.id}>o</button>
        </Link></td>
        : null
      }
    </tr>
  )
})

  return (
    <Table responsive className="listTable">
    <thead>
      <tr>
        <th><h4>#</h4></th>
        <th><h4>Name</h4></th>
        <th>{ props.isAdmin ? <h4>Delete?</h4> : <h4>Email</h4> }</th>
        { props.isAdmin && type !== "student" ? <th><h4>Edit</h4></th> : null }
      </tr>
    </thead>
    <tbody>
      { rows }
    </tbody>
  </Table>
)
}



