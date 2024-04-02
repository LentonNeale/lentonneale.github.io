import React, { useState, useEffect }  from "react";
import BodyLayout from "../layout/BodyLayout";
import TextFileReader from "../util-components/TextFileReader";
import { useTheme } from '../theme/ThemeProvider';
import HomePageText from '../../assets/files/text_files/home-page-text.txt'

const Home = () => {
    const { theme } = useTheme();

    return (
        <BodyLayout
            leftSideBarType="links"
            leftsidebarItems={[
                { label: 'Home', url: '/' },
                { label: 'About', url: '/about' },
                { label: 'Contact', url: '/contact' },
                { label: 'Website Git Repo', url: 'https://github.com/LentonNeale/lentonneale.github.io' },

            ]}
            rightSideBarType="progress"
            rightsidebarItems={[
                { label: 'Profile Completion', value: 30 },
                { label: 'React', value: 22 },
                { label: 'Bootstrap5', value: 10 },
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
                <h1 className={`h1-${theme}`}> Home Page </h1>
                <TextFileReader file= {HomePageText} />
            </div>
        </BodyLayout>
    );
};

export default Home;

