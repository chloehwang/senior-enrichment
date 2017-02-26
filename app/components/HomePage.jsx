import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function() {

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img width={1140} height={450} alt="1140x450" className="img-responsive" src="http://placehold.it/1140x450"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1140} height={450} alt="1140x450" className="img-responsive" src="http://placehold.it/1140x450"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1140} height={450} alt="1140x450" className="img-responsive" src="http://placehold.it/1140x450"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
