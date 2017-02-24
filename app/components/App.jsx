import React, { Component } from 'react';
import Navbar from './Navbar'

export default class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.props.children && React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}
