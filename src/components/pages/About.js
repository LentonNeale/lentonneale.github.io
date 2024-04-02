import React from "react";
import BodyLayout from "../layout/BodyLayout";
import TextFileReader from "../util-components/TextFileReader";
import AboutText from '../../assets/files/text_files/about-me.txt';
import { useTheme } from '../theme/ThemeProvider';

const About = () => {
    const { theme } = useTheme();
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
                <h1 className={`h1-${theme}`}> About Page </h1>
                <div>
                    <TextFileReader file={AboutText} />
                </div>
            </div>
        </BodyLayout>
    );
};

export default About;