import React from 'react';
import '../CSS/About.css'; 
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="about-page">
            <div className="about-page-container">
                <div className="left-aboutPage">
                    <h2>Ashu Singh</h2>
                    <h3>Passionate Software Engineering Enthusiast</h3>
                    <div className="intro-details">
                        <p><strong>Age:</strong> 20</p>
                        <p><strong>Email:</strong> <a href="mailto:shabsingh961@gmail.com">shabsingh961@gmail.com</a></p>
                        <p><strong>Contact:</strong> <a href="tel:8950653320">WhatsApp: 8950653320</a> | <a href="tel:8708684910">Call: 8708684910</a></p>
                        <p><strong>Languages:</strong> Hindi, English</p>
                        <p><strong>Country:</strong> India</p>
                        <p><strong>Education:</strong> Final Year BE-CSE at Chitkara University</p>
                        <p><strong>About Me:</strong> I am a passionate software engineering enthusiast currently pursuing my BE in Computer Science and Engineering. I am deeply interested in the field of software development and continuously strive to enhance my skills through projects, learning, and practical experience.</p>
                    </div>
                    <div className="buttons">
                        <a href="https://drive.google.com/file/d/1nNQzvpB6tNXOat32RWcDPxQTKzHHhMds/view?usp=sharing" className="button download-cv">Download CV</a>
                        <Link to='/contact' className="button hire-me">Hire Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
