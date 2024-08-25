import React, { useState } from 'react';
import '../CSS/Skill.css'; 

const FrontEndSkills = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleContent = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`skill-category ${isActive ? 'active' : ''}`} onClick={toggleContent}>
            <h2>FrontEnd Skills</h2>
            <div className="skill-content">
                <ul>
                    <li><span className="skill-icon">R</span>React</li>
                    <li><span className="skill-icon">J</span>JavaScript</li>
                    <li><span className="skill-icon">H</span>HTML</li>
                    <li><span className="skill-icon">C</span>CSS</li>
                    <li><span className="skill-icon">B</span>Bootstrap</li>
                    <li><span className="skill-icon">T</span>Tailwind</li>
                </ul>
                <div className="skill-bar-container">
                    <div className="skill-bar-label">
                        <span>React</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>JavaScript</span>
                        <span>80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '75%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>HTML</span>
                        <span>85%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>CSS</span>
                        <span>70%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '70%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>Bootstrap</span>
                        <span>60%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '65%' }}></div>
                    </div>
                    <div className="skill-bar-label">
                        <span>Tailwind</span>
                        <span>65%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '60%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontEndSkills;
