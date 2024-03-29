import React from "react";
import BodyLayout from "../layout/BodyLayout";

const Contact = () => {
    return (
        <BodyLayout 
        leftSideBarType = "info"
        leftsidebarItems = {[
            {description: 'Email', text: 'lentonneale@gmail.com'},
            {description: 'LinkedIn', text: 'https://www.linkedin.com/in/lenton-neale-726253123/'},
            {description: 'Other', text: 'Other Info'}
        ]}
        >
            <div>
                <h1> Contact Page </h1>
            </div>
        </BodyLayout>
    );
};

export default Contact;