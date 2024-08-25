import React, { useState } from 'react';
import '../CSS/Skill.css'; 

const OtherSkills = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleContent = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`skill-category ${isActive ? 'active' : ''}`} onClick={toggleContent}>
            <h2>Other Skills</h2>
            <div className="skill-content">
                <ul>
                    <li><span className="skill-icon">G</span>Git</li>
                    <li><span className="skill-icon">D</span>Docker</li>
                    <li><span className="skill-icon">A</span>AWS</li>
                    <li><span className="skill-icon">M</span>MySQL</li>
                </ul>
                <div className="skill-bar-container">
                    <div className="skill-bar-label">
                        <span>Git</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>Docker</span>
                        <span>70%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '70%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>AWS</span>
                        <span>75%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>MySQL</span>
                        <span>65%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '65%' }}></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default OtherSkills;
