import React from "react";
import Title from "./Title";

const List=()=>{
    const courses = [
        {title : "BE", description : "Bachelors in Engineering", id : 1},
        {title : "MBBS", description : "Bachelor of Medicine and Bachelor of Surgery", id : 2},
        {title : "BSc", description : "Bachelor of Science", id : 3}
    ]

    const coursesList = courses.map(course => <Title key={course.title} course={course}/>)
    return(
        coursesList
    )
}
export default List