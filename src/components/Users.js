import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
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
let render = 0
function Users() {
    render++
    const [user, setUser] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(response =>{
                        // console.log(response);
                        setUser(response.data)
                    })
                    .catch(error =>{
                        console.log(error);
                    })
    })
    return (

        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Website</td>
                </tr>
            </thead>
            <tbody>
                {user.map((u) => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.website}</td>
                    </tr>)
                )}

            </tbody>
        </table>
    )
}

export default Users