import React from "react";
import './myStyle.css';

const Title = (props) =>{

    // day = 1-5
    const {title,description}=props

    // inline css
    const desc = {
        fontFamily : 'Arial, Helvetica, sans-serif',   
    }
    return(
        <div >

            {/* <h2>This is title page</h2> */}

            <h1 className="title">{title}</h1>
            <p style={desc}>Hello, devloper {description}</p>
            {props.children}
        </div>
    );

    
    // day = 6
    // return(
    //     <div>
    //         <h3>Course : {props.course.title}</h3>
    //         <p>Full Form : {props.course.description} </p>
    //     </div>
    // )

}
export default Title;