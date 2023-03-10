import React, { Component } from "react";
import Title from "../components/Title";
import HOC from "../components/HOC";
import UserList from "../components/UserList";

class Home extends Component{
    
    constructor(props){
        super()

        this.state={
            title:props.title, 
            description:props.description
        }
    }
    render(){

        // const userData = [{id : 115, name:"Umang"},{id : 58, name:"Sajan"},{id : 80, name:"Dhruv"}]
        // const Users = HOC(UserList,userData)

        // return(<Users/>)
        
        const {title,description}= this.state
        return(
            <>
                {/* <Title/>
                <Title/>
                <Title/> */}

                {/* <Title title="Dhruv" description="Good Morning"/> */}

                <Title title={title} description={description }/>
            </>
        );
        
    }
}

export default Home;