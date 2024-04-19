import React  from "react";
import BodyLayout from "../layout/BodyLayout";
import TextFileReader from "../util-components/TextFileReader";
import { useTheme } from '../theme/ThemeProvider';
import HomePageText from '../../assets/files/text_files/home-page-text.txt'

const Home = () => {
    const { theme } = useTheme();

    return (
        <BodyLayout
            leftsidebarItems={[
                { label: 'Home', url: '/' , itemtype: "navigation"},
                { label: 'About', url: '/about' , itemtype: "navigation"},
                { label: 'Contact', url: '/contact' , itemtype: "navigation"},
                { label: 'Website Git Repo', url: 'https://github.com/LentonNeale/lentonneale.github.io', itemtype: "external-link" },

            ]}
            rightsidebarItems={[
                { label: 'Profile Completion', value: 30, itemtype: "progress" },
                { label: 'React', value: 22, itemtype: "progress"  },
                { label: 'Bootstrap5', value: 10, itemtype: "progress"  },
                { label: 'Python', value: 40, itemtype: "progress"  },
                { label: 'C', value: 30, itemtype: "progress"  },
                { label: 'C++', value: 35, itemtype: "progress"  },
                { label: 'C#', value: 15, itemtype: "progress"  },
                { label: 'Excel', value: 20, itemtype: "progress"   },
                { label: 'Solidworks', value: 35, itemtype: "progress"  },
                { label: 'AutoDesk Inventor', value: 35, itemtype: "progress"  },
                { label: 'Soldering', value: 80, itemtype: "progress"  },
                { label: 'Car Audio Design', value: 85, itemtype: "progress"  },
                
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

