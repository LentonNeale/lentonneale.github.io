import React from "react";
import BodyLayout from "../layout/BodyLayout";

const Contact = () => {
    return (
        <BodyLayout 
        leftsidebarItems = {[
            {label: 'Email', url: 'lentonneale@gmail.com', itemtype: "email" },
            {label: 'LinkedIn', url: 'https://www.linkedin.com/in/lenton-neale-726253123/', itemtype: "external-link" },
            {label: 'Other', text: 'Other Info'}
        ]}
        >
            <div>
                <h1> Contact Page </h1>
            </div>
        </BodyLayout>
    );
};

export default Contact;