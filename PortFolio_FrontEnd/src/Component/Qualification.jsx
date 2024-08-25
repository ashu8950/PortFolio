
import React, { useState } from 'react';
import '../CSS/Qualification.css';

const Qualification = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleSection = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="qualification-page">
      <h1>Educational Qualifications</h1>

      <div className="qualification-container">
        <div 
          className={`qualification-category ${expanded === 0 ? 'active' : ''}`}
          onClick={() => toggleSection(0)}
        >
          <h2>2017-2019</h2>
          <div className="qualification-content">
            <p><strong>Primary Education</strong></p>
            <p><strong>Name of Institution:</strong> DAV Police Public School</p>
            <p><strong>Location:</strong> Panipat, Haryana</p>
          </div>
        </div>

        <div 
          className={`qualification-category ${expanded === 1 ? 'active' : ''}`}
          onClick={() => toggleSection(1)}
        >
          <h2>2019-2021</h2>
          <div className="qualification-content">
            <p><strong>Higher Secondary Education</strong></p>
            <p><strong>Name of Institution:</strong> Siddhartha Public School</p>
            <p><strong>Location:</strong> Kanjhawala, Delhi</p>
          </div>
        </div>

        <div 
          className={`qualification-category ${expanded === 2 ? 'active' : ''}`}
          onClick={() => toggleSection(2)}
        >
          <h2>2021-2025</h2>
          <div className="qualification-content">
            <p><strong>College Info</strong></p>
            <p><strong>Name of Institution:</strong> Chitkara University</p>
            <p><strong>Location:</strong> Rajpura, Punjab</p>
            <p><strong>Program of Study:</strong> B.E. Computer Science & Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
