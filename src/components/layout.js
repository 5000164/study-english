import React, { Component } from 'react'
import { Link } from 'gatsby'

class Template extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to={'/'}>英語勉強用ブログ</Link>
        </h1>
        {this.props.children}
      </div>
    )
  }
}

export default Template
