import React from "react";
import Title from "../components/Title";

const About =(props) => {
    return(
        <>
            <Title title={props.title} description={props.description}>

                {/* child props */}
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut enim nulla quod eos temporibus pariatur repellendus soluta obcaecati, cumque in velit nemo vero eligendi culpa architecto. Ea aperiam quia aliquid dolorem quis debitis, aut soluta, expedita corporis doloribus perferendis magni.</p>
            </Title>
        </>
    )
}

export default About