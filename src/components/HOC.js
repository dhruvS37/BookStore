import React from "react";

const HOC = (HOCcomponent,userData) =>{
    return class extends React.Component{
        render(){
            return(
                <HOCcomponent data={userData}/>
            )
        }
    }
}

export default HOC