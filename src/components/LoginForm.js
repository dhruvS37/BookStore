import React from "react";

class LoginForm extends React.Component{

    constructor(props) {
      super(props)
    
      this.state = {
         username :''
         
        }
    }
    render(){
        return(
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' ></input>
                </div>
            </form>
        )
    }
}
export default LoginForm