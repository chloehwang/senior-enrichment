import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

export default function({ listItems, handleAdd }) {

  return (
    <Form inline onSubmit={handleAdd}>
      <FormGroup>
        <FormControl componentClass="select" name="item" >
        { listItems && listItems.map(item =>
          <option key={item.id} value={item.id}>{item.name}</option>
        ) }
        </FormControl>

      </FormGroup>
      <Button type="submit">
      Add student
    </Button>
    </Form>
  )
}
