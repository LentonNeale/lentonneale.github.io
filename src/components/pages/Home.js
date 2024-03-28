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
            rightSideBarType="progress"
            rightsidebarItems={[
                { label: 'Profile Completion', value: 25 },
                { label: 'Knowledge of React', value: 20 },
                { label: 'Knowledge of Bootstrap5', value: 5 },
                { label: 'Knowledge of Python', value: 40 },
                { label: 'Knowledge of C', value: 30 },
                { label: 'Knowledge of C++', value: 35 },
                { label: 'Knowledge of C#', value: 15 },
                { label: 'Knowledge of Excel', value: 20  },
                { label: 'Knowledge of Solidworks', value: 35 },
                { label: 'Knowledge of AutoDesk Inventor', value: 35 },
                { label: 'Knowledge of Soldering', value: 80 },
                { label: 'Knowledge of Car Audio Design', value: 85 },
                
            ]}
        >
            <div>
                <h1> Home Page </h1>


            </div>
        </BodyLayout>
    );
};

export default Home;

