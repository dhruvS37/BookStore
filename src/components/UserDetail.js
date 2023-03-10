import React, { Component } from 'react'

class UserDetail extends Component {
  render() {
    // console.log(this.props.user);
    return (
        <>
            <h2>Name : {this.props.user.name}</h2>
            <p>Email : {this.props.user.email}</p>
        </>
    )
  }
}

export default UserDetail