import React, { Component } from 'react'
import ComponentE from './ComponentE'
import userContext from './userContext'

class ComponentD extends Component {
  render() {
    return (
      <div>
        <p>ComponentD context {this.context}</p>
        <ComponentE/>
      </div>
    )
  }
}

// Second method for context but can't be used when Consuming multiple context
ComponentD.contextType=userContext

export default ComponentD