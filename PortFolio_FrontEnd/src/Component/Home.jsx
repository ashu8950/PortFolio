import React from 'react';
import Typing from 'react-typing-effect';
import '../CSS/Home.css';
import linkedin from '../assets/linkin.png';
import github from '../assets/github.svg';
import leetcode from '../assets/leetcode.png';
import profileImage from '../assets/logo.jpg';

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1nNQzvpB6tNXOat32RWcDPxQTKzHHhMds/view?usp=sharing'; // Replace with the actual path to your resume file
    link.download = 'Ashu_Resume.pdf';
    link.click();
  };

  return (
    <div className="home-page">
      <div className="animated-background"></div>
      <div className="home-page-container">
        <div className="left-homePage">
          <h1>Welcome!</h1>
          <h3>Hey, It's Me</h3>
          <h2>Ashu Singh</h2>
          <h3>And, I'm a</h3>
          <div className="typing-container">
            <Typing
              text={[
                "I'm a passionate software, and web developer.",
                "With a strong foundation in JavaScript",
                " and React.",
                "Explore my portfolio to see more about",
                " my skills and experience.",
                "I also have experience with frameworks",
                "like React and Node.js."
              ]}
              speed={100}
              eraseSpeed={100}
              eraseDelay={1000}
              typingDelay={500}
              loop={true}
              className="typing-effect"
            />
          </div>
          <p className="motto">
            "Building the future, one line of code at a time." 
          </p>
          <button className="download-btn" onClick={handleDownloadResume}>
            Download Resume
          </button>
          <div className="social-links">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="icon" />
            </a>
            <a href="https://github.com/ashu8950" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="icon" />
            </a>
            <a href="https://leetcode.com/u/Ashu_Singh8950/" target="_blank" rel="noopener noreferrer">
              <img src={leetcode} alt="LeetCode" className="icon" />
            </a>
          </div>
          <div className="achievements">
            <h4>Key Achievements:</h4>
            <ul>
              <li>Developed a full-stack application using Mern and Some other Basic Project.</li>
              <li>Participated in DG Mantra Hackathon.</li>
              <li>LeetCode 450+ problems solved.</li>
            </ul>
          </div>
        </div>
        <div className="right-homePage">
          <img src={profileImage} alt="Profile" className="profile-image"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
