import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.div`
  width: 1024px;
  margin: auto;
`

class Template extends Component {
  render() {
    return (
      <Header>
        <h1>
          <Link to={'/'}>英語勉強用ブログ</Link>
        </h1>
        {this.props.children}
      </Header>
    )
  }
}

export default Template
