import React, { Component } from 'react'

class UserList extends Component {
    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                   {this.props.data.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>)
                    )}
                    
                </tbody>
            </table>
        )
    }
}

export default UserList