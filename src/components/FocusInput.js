import React, { Component } from 'react'
import InputRef from './InputRef'

class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    clickHandler =()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
        <>
            <InputRef ref={this.componentRef}/>
            <button onClick={this.clickHandler}>Focus Input</button>
        </>
    )
  }
}

export default FocusInput