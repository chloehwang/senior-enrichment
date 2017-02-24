import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function(props) {

  const toDisplay = props.cards && props.cards.map((card, i) =>
    <Col sm={12} md={6} key={i}><br />{card}</Col>)

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


