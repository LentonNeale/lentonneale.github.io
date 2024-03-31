import React, { useState, useEffect } from 'react';

const TextFileReader = ({ fileName }) => {
    const [fileContent, setFileContent] = useState([]);
    useEffect(() => {
        const fetchFileContent = async () => {
            try {
                const response = await fetch(`/assets/text-files/${fileName}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch file');
                }
                const text = await response.text();
                const paragraphsArray = text.split('\n'); // Split text into paragraphs

                setFileContent(paragraphsArray);
            } catch (error) {
                console.error('Error fetching file:', error);
            }

        };

        fetchFileContent();
    }, [fileName]);

    return (
        <>
            {fileContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p> // Render each paragraph as <p> element
            ))}
        </>
    );
};

export default TextFileReader;
