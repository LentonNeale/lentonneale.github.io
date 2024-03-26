import React from "react";
import BodyLayout from "../layout/BodyLayout";

const Home = () => {
    console.log("Home");
    return (
        <BodyLayout
            leftSideBarType="links"
            leftsidebarItems={[
                { title: 'Home', url: '/' },
                { title: 'About', url: '/about' },
            ]}
            // rightSideBarType="progress"
            // rightsidebarItems={[
            //     {label: 'Profile Completion',value: '5'},
            //     {label: 'Knowledge of React', value: '20'}
            // ]}
            rightSideBarType="none"
            rightsidebarItems={[]}
        >
            <div>
                <h1> Home Page </h1>
            </div>
        </BodyLayout>
    );
};

export default Home;

