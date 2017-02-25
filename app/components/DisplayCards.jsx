import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function(props) {

  const toDisplay = props.cards && props.cards.map((card, i) =>
    <Col sm={props.sm} md={props.md} key={i}><br />{card}</Col>)

  return (
    <div>
      <Grid>
        <Row className="show-grid">
          {toDisplay}
        </Row>
      </Grid>
    </div>
  )
}


