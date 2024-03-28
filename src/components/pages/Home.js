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
                { title: 'Website Git Repo', url: 'https://github.com/LentonNeale/lentonneale.github.io' },

            ]}
            rightSideBarType="progress"
            rightsidebarItems={[
                { label: 'Profile Completion', value: 25 },
                { label: 'React', value: 20 },
                { label: 'Bootstrap5', value: 5 },
                { label: 'Python', value: 40 },
                { label: 'C', value: 30 },
                { label: 'C++', value: 35 },
                { label: 'C#', value: 15 },
                { label: 'Excel', value: 20  },
                { label: 'Solidworks', value: 35 },
                { label: 'AutoDesk Inventor', value: 35 },
                { label: 'Soldering', value: 80 },
                { label: 'Car Audio Design', value: 85 },
                
            ]}
        >
            <div>
                <h1> Home Page </h1>


            </div>
        </BodyLayout>
    );
};

export default Home;

