import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function(props) {
  const toDisplay = props.cards && props.cards.map((card, i) =>
    <Col
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      key={i}>
      <br />
      {card}
    </Col>)

  return (
    <Grid>
      <Row className="show-grid">
        {toDisplay}
      </Row>
    </Grid>
  )
}


