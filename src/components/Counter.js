import React from "react";

class Counter extends React.Component{

    constructor(){
        super()

        this.state = {
            count : 0
        }

        this.clickHandler=this.clickHandler.bind(this)  /* Method - 1 */
    }

    /* Method - 2 */

    // clickHandler = () => {
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

    clickHandler () {
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        return(
            <>
                <h4>Visitor count : {this.state.count}</h4>
                {/* <button onClick={() => this.clickHandler()}>Increament</button> */} {/* Method - 3 */}
                {/* <button onClick={this.clickHandler.bind(this)}>Increament</button> */} {/* Method - 4 */}
                <button onClick={this.clickHandler}>Increament</button>
            </>
        );
    }
}

export default Counter