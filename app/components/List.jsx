import React from 'react';
import { Link } from 'react-router'
import { Table } from 'react-bootstrap';


export default function(props) {

const rows = props.listItems && props.listItems.map(item => {
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td><Link to={`/${props.type}/${item.id}`}>{item.name}</Link></td>
      <td>{ props.isAdmin ?
        <button
          className="btn btn-xs btn-danger"
          value={item.id}
          onClick={(e) => props.handleDelete(e, props.type)}>x
        </button>
          : item.email
        }
      </td>
      { props.isAdmin ? <td><Link to={`/edit/${props.type}/${item.id}`}>
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
        <th><h4>ID #</h4></th>
        <th><h4>Name</h4></th>
        <th>{ props.isAdmin ? <h4>Delete?</h4> : <h4>Email</h4> }</th>
        { props.isAdmin ? <th><h4>Edit</h4></th> : null }
      </tr>
    </thead>
    <tbody>
      { rows }
    </tbody>
  </Table>
)
}



