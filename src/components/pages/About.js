import React from "react";
import BodyLayout from "../layout/BodyLayout";

const About = () => {
    return (
        <BodyLayout 
        leftSideBarType = "info"
        leftsidebarItems = {[
            {description: 'Email', text: 'lentonneale@gmail.com'},
            {description: 'LinkedIn', text: 'https://www.linkedin.com/in/lenton-neale-726253123/'},
            {description: 'Facebook', text: 'Other Info'}
        ]}
        >
            <div>
                <h1> About Page </h1>
            </div>
        </BodyLayout>
    );
};

export default About;