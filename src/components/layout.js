import React from 'react'
import { Link } from 'gatsby'

class Template extends React.Component {
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
