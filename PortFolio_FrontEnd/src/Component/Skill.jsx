import React, { useState } from 'react';
import '../CSS/Skill.css'; 
import FrontEndSkills from './FrontEndSkill';
import BackEndSkills from './BackEndSkills';
import ProgrammingSkills from './ProgrammingSkills';
import OtherSkills from './OtherSkills';

const Skill = () => {
    const [showExperience, setShowExperience] = useState(false);

    const toggleExperience = () => {
        setShowExperience(prevState => !prevState);
    };

    return (
        <div className="skill-page">
            <h1>Skills</h1>
            <div className="skill-container">
                <FrontEndSkills />
                <BackEndSkills />
                <ProgrammingSkills />
                <OtherSkills />
            </div>

            
            <section className="experience-projects">
                <h2>Experience & Projects</h2>
                <button className="show-details-btn" onClick={toggleExperience}>
                    {showExperience ? 'Hide Details' : 'Show Details'}
                </button>
                <div className={`experience-projects-content ${showExperience ? 'active' : ''}`}>
                    <div className="experience">
                        <h3>Years of Experience</h3>
                        <p>0+ years</p>
                    </div>
                    <div className="projects">
                        <h3>Projects Completed</h3>
                        <p>10+ projects</p>
                    </div>
                    <div className="companies">
                        <h3>Companies Worked With</h3>
                        <p>0+companies</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;
