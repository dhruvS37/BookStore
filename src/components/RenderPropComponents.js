import React, { Component } from 'react'

class RenderPropComponents extends Component {
  render() {
    return(
        <div>
            {this.props.render()}
        </div>
    )
  }
}

export default RenderPropComponents