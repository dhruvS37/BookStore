import axios from 'axios'
import React, { Component, useEffect, useReducer, useState } from 'react'
import UserDetail from './UserDetail'

// // Day 11
// class Users extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          users : []
//       }
//     }
//     componentDidMount (){
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response =>{
//                 // console.log(response);
//                 this.setState({
//                     users : response.data
//                 })
//             })
//             .catch(error =>{
//                 console.log(error);
//             })
//     }

//     render() {
//         const {users} = this.state
//         return (
//             <>
//             {
//                 users.length ? users.map(user => (<UserDetail user={user} key={user.id + user.username}/>)) :null
//             }
//             </>
//         )
//     }
// }

// export default Users

// Day 15
// let render = 0
// function Users() {
//     render++
//     const [user, setUser] = useState([])
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users')
//                     .then(response =>{
//                         // console.log(response);
//                         setUser(response.data)
//                     })
//                     .catch(error =>{
//                         console.log(error);
//                     })
//     })
//     return (

//         <table>
//             <thead>
//                 <tr>
//                     <td>Id</td>
//                     <td>Name</td>
//                     <td>Email</td>
//                     <td>Website</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {user.map((u) => (
//                     <tr key={u.id}>
//                         <td>{u.id}</td>
//                         <td>{u.name}</td>
//                         <td>{u.email}</td>
//                         <td>{u.website}</td>
//                     </tr>)
//                 )}

//             </tbody>
//         </table>
//     )
// }

// export default Users

// Day 18
const iniState = {
    loading : true,
    error : '',
    user:{}
}
const reducer =(currState , action)=>{
    switch(action.type){
        case 'FETCH_SUCCESSFULL':
            return{
                loading:false,
                error:'',
                user : action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                error:'Somthing went wrong',
                user : {}
            }
    }
}
function Users() {
    const [state,dispatch] = useReducer(reducer,iniState)
    useEffect(()=>{
                axios.get('https://jsonplaceholder.typicode.com/users/10')
                            .then(response =>{
                                dispatch({ type:'FETCH_SUCCESSFULL', payload:response.data})
                            })
                            .catch(error =>{
                                dispatch({ type:'FETCH_ERROR'})
                            })
            },[])
  return (
    <div>
        {console.log(state.user)}
        {state.loading ? 'Loading....' : state.user.name}
        {state.error ? state.error : null}
    </div>
  )
}

export default React.memo(Users)