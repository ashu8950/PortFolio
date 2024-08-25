import React, { useState } from 'react';
import '../CSS/Skill.css'; 

const BackendSkills = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleContent = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`skill-category ${isActive ? 'active' : ''}`} onClick={toggleContent}>
            <h2>Backend Skills</h2>
            <div className="skill-content">
                <ul>
                    <li><span className="skill-icon">N</span>Node.js</li>
                    <li><span className="skill-icon">E</span>Express.js</li>
                    <li><span className="skill-icon">P</span>Python</li>
                    <li><span className="skill-icon">M</span>MongoDB</li>
                    <li><span className="skill-icon">S</span>SQL</li>
                </ul>
                <div className="skill-bar-container">
                    <div className="skill-bar-label">
                        <span>Node.js</span>
                        <span>85%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>Express.js</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                    </div>

                    <div className="skill-bar-label">
                        <span>MongoDB</span>
                        <span>70%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '70%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>SQL</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackendSkills;
