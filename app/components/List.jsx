import React from 'react';
import { Link } from 'react-router'
import { Table } from 'react-bootstrap';


export default function(props) {

const rows = props.listItems && props.listItems.map(item => {
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td><Link to={`/${props.type}/${item.id}`}>{item.name}</Link></td>
      <td>{ props.isAdmin ? <button className="btn btn-xs btn-danger" value={item.id} onClick={props.handleDelete}>x</button> : item.email }</td>
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
      </tr>
    </thead>
    <tbody>
      { rows }
    </tbody>
  </Table>
)
}



