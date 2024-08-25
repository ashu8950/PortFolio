import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/SideBar.css';
import logo from '../assets/logo.jpg'; 
import github from '../assets/github.svg';
import leetcode from '../assets/leetcode.png';
import linkedin from '../assets/linkin.png'; 

import home from '../assets/Home.png';
import about from '../assets/about.jpg';
import skills from '../assets/skills.jpg';
import qualification from '../assets/Qualification.jpg';
import certification from '../assets/Certification.jpg';
import portfolio from '../assets/Portfolio.jpg';
import contact from '../assets/Contact.jpg';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsSidebarOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when the route changes
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  return (
    <>
      {window.innerWidth <= 600 && (
        <button className='toggle-button' onClick={handleToggleSidebar}>
          ☰
        </button>
      )}

      <div className={`overlay ${isSidebarOpen && window.innerWidth <= 600 ? 'show' : ''}`} onClick={handleCloseSidebar}></div>

      <div className={`SideBar-Container ${isSidebarOpen || window.innerWidth > 600 ? 'open' : ''}`}>
        {window.innerWidth <= 600 && (
          <button className='close-button' onClick={handleCloseSidebar}>
            &times;
          </button>
        )}
        <div className='SideBarTop'>
          <strong className='SideBarTop_Heading'>Portfolio</strong>
          <div className='SideBarTop_Image'>
            <img src={logo} alt='Profile' />
          </div>
        </div>
        <div className='SideBar_Menu'>
          <ul>
            <li>
              <Link to="/home">
                <img src={home} alt='Home' className='menu-icon' /> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src={about} alt='About' className='menu-icon' /> About
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <img src={skills} alt='Skills' className='menu-icon' /> Skills
              </Link>
            </li>
            <li>
              <Link to="/qualification">
                <img src={qualification} alt='Qualification' className='menu-icon' /> Qualification
              </Link>
            </li>
            <li>
              <Link to="/certification">
                <img src={certification} alt='Certification' className='menu-icon' /> Certification
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <img src={portfolio} alt='Portfolio' className='menu-icon' /> Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <img src={contact} alt='Contact' className='menu-icon' /> Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='SideBar_Bottom_Link'>
          <a href='https://www.linkedin.com/feed/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='LinkedIn' className='icon'/>
          </a>
          <a href='https://github.com/ashu8950' target='_blank' rel='noopener noreferrer'>
            <img src={github} alt='GitHub' className='icon'/>
          </a>
          <a href='https://leetcode.com/u/Ashu_Singh8950/' target='_blank' rel='noopener noreferrer'>
            <img src={leetcode} alt='LeetCode' className='icon'/>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
