import React, { useState } from 'react';
import '../CSS/Skill.css'; 

const ProgrammingSkills = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleContent = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`skill-category ${isActive ? 'active' : ''}`} onClick={toggleContent}>
            <h2>Programming Skills</h2>
            <div className="skill-content">
                <ul>
                    <li><span className="skill-icon">J</span>Java</li>
                    <li><span className="skill-icon">C</span>C</li>
                    <li><span className="skill-icon">P</span>Python</li>
                    <li><span className="skill-icon">C</span>C++</li>
                    <li><span className="skill-icon">D</span>DSA in Java</li>
                </ul>
                <div className="skill-bar-container">
                    <div className="skill-bar-label">
                        <span>Java</span>
                        <span>90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>C</span>
                        <span>75%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>Python</span>
                        <span>70%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '70%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>C++</span>
                        <span>75%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>DSA in Java</span>
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

export default ProgrammingSkills;
