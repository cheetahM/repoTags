import React from 'react'
import Styles from './styles/main.scss'

const Hello = React.createClass ({
  render () {
    return <div>Hello, {this.props.name}.</div>
  }
})

React.render(<Hello name="Chetan" />, document.body)
