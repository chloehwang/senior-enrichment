import React from 'react';
import { Link } from 'react-router'
import { Table } from 'react-bootstrap';


export default function({ type, isAdmin, isCampus, listItems, handleDelete }) {

const rows = listItems && listItems.map(item => {
  return (
    <tr key={item.id}>
      <td><h4>{item.id}</h4></td>
      <td><Link to={`/${type}/${item.id}`}><h4>{item.name}</h4></Link></td>
      <td>{ isAdmin || isCampus ?
        <button
          className="btn btn-xs btn-danger"
          value={item.id}
          onClick={(e) => handleDelete(e, type)}>x
        </button>
          : <h4>{item.email}</h4>
        }
      </td>
      { isAdmin ? <td><Link to={`/edit/${type}/${item.id}`}>
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
        <th>{ isAdmin || isCampus ? <h4>Delete?</h4> : <h4>Email</h4> }</th>
        { isAdmin ? <th><h4>Edit</h4></th> : null }
      </tr>
    </thead>
    <tbody>
      { rows }
    </tbody>
  </Table>
  )
}



