import React, { useState } from "react";
import './myStyle.css'

// // Day 7 
// class LoginForm extends React.Component{

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          username :'',
//          email : '',
//          password : ''
//         }
//     }
//     handleUsernameChange = (event) =>{
//         this.setState({
//             username : event.target.value
//         })
//     }
//     handleEmailChange = (event) =>{
//         this.setState({
//             email : event.target.value
//         })
//     }
//     handlePasswordChange = (event) =>{
//         this.setState({
//             password : event.target.value
//         })
//     }
//     handleSubmit = (event) =>{
//         alert(` ${this.state.username} \n ${this.state.email} \n ${this.state.password}`)
//         // event.preventDefault()        /* prevent to form being defalt */
//     }
//     render(){
//         const {username,email,password}=this.state
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <div className="formFeild">
//                     <label>Username</label>
//                     <input type='text' value={username} onChange={this.handleUsernameChange} className="inputCss"></input>
//                 </div>
//                 <div className="formFeild">
//                     <label>Email</label>
//                     <input type='text' value={email} onChange={this.handleEmailChange} className="inputCss"></input>
//                 </div>
//                 <div className="formFeild">
//                     <label>Password</label>
//                     <input type='password' value={password} onChange={this.handlePasswordChange} className="inputCss"></input>
//                 </div>
//                 <button type="submit" className="inputCss">Submit</button>
//             </form>
//         )
//     }
// }


// Day 14
function LoginForm() {
    const [inputField,setInputFeild] = useState({email:"",password:""})
    const handleSubmit = (event) =>{
                alert(` ${inputField.email} \n ${inputField.password}`)
                event.preventDefault()        /* prevent to form being defalt */
            }
  return (
        <form onSubmit={handleSubmit}>
            <div className="formFeild">
                <label>Email</label>
                <input type='text' value={inputField.email} onChange={e => setInputFeild({...inputField,email : e.target.value})} className="inputCss"></input>
            </div>
            <div className="formFeild">
                <label>Password</label>
                <input type='password' value={inputField.password} onChange={e => setInputFeild({...inputField,password : e.target.value})}className="inputCss"></input>
            </div>
            <button type="submit" className="inputCss">Submit</button>
        </form>
  )
}

export default LoginForm