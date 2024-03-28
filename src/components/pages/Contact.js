import React from "react";
import BodyLayout from "../layout/BodyLayout";

const Contact = () => {
    return (
        <BodyLayout 
        leftSideBarType = "info"
        leftsidebarItems = {[
            {description: 'Email', text: 'lentonneale@gmail.com'},
            {description: 'Mobile', text: '0221665951'}
        ]}
        >
            <div>
                <h1> Contact Page </h1>
            </div>
        </BodyLayout>
    );
};

export default Contact;