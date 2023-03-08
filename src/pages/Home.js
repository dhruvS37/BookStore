import React, { Component } from "react";
import Title from "../components/Title";

class Home extends Component{

    constructor(props){
        super()

        this.state={
            title:props.title, 
            description:props.description
        }
    }
    render(){

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