import React, { Component } from 'react'

class InputRef extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()


// Callback method for ref
        // this.cbRef = null 
        // this.setCbRef = (element) =>{
        //     this.cbRef = element 
        // }
    }
    focusInput = () =>{
        this.inputRef.current.focus()
        // this.cbRef.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                {/* <input type="text" ref={this.setCbRef}/> */}
            </div>
            )
    }
}

export default InputRef
