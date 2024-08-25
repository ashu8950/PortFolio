import React, { useState } from 'react';
import '../CSS/Certification.css';
import Software from '../assets/Software.jpeg';
import webDevelopment from '../assets/WebDevelopment.jpeg';
import jobInterview from '../assets/jobInterview.jpeg';
import dataStructure from '../assets/dataStructure.jpeg';

const Certification = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (index) => {
        setActiveCategory(activeCategory === index ? null : index);
    };

    const certifications = [
        {
            year: '2024',
            title: 'Certified Software Engineer',
            institution: 'Coursera',
            description: 'This certification covers essential software engineering principles and practices, including algorithms, data structures, and software design methodologies. It provides a solid foundation for both front-end and back-end development.',
            image: Software, 
            link: 'https://www.coursera.org/account/accomplishments/specialization/TN6QAUPP3F5E'
        },
        {
            year: '2024',
            title: 'The Art of Job Interview',
            institution: 'Coursera',
            description: 'Focused on enhancing job interview skills, this course includes strategies for effective communication, resume writing, and interview techniques to help you stand out in a competitive job market.',
            image: jobInterview, 
            link: 'https://www.coursera.org/account/accomplishments/verify/P8TJWBEMMT2V'
        },
        {
            year: '2024',
            title: 'Web Development',
            institution: 'Coursera',
            description: 'This program offers a comprehensive overview of web development, including both front-end and back-end technologies. It covers HTML, CSS, JavaScript, as well as server-side scripting and database management.',
            image: webDevelopment, 
            link: 'https://www.coursera.org/account/accomplishments/verify/PVCXVVDDBC42'
        },
        {
            year: '2024',
            title: 'Data Structure & Algorithms',
            institution: 'Coursera',
            description: 'This specialization dives deep into fundamental data structures and algorithms, essential for efficient problem-solving and coding practices. Topics include arrays, linked lists, trees, graphs, and algorithmic techniques.',
            image: dataStructure, 
            link: 'https://www.coursera.org/account/accomplishments/specialization/ESC4V4EC9MJS'
        },
    ];

    return (
        <div className="certification-page">
            <h1>Certifications</h1>
            <div className="certification-container">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className={`certification-category ${activeCategory === index ? 'active' : ''}`}
                        onClick={() => toggleCategory(index)}
                    >
                        <h2>{cert.title}</h2>
                        <img src={cert.image} alt={`${cert.title} certificate`} className="certification-image" />
                        <div className="certification-content">
                            <p><strong>Year:</strong> {cert.year}</p>
                            <p><strong>Institution:</strong> {cert.institution}</p>
                            <p>{cert.description}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certification-link">
                                More Information
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certification;
