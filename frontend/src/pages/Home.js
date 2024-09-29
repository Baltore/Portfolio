import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projet</Link></li>
            <li><Link to="/experience">Expérience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
        <hr />
      </header>
      <div class="welcome-section">
        <h1>Welcome to my Portfolio</h1>
        <h3>Hello, I’m excited to share this site with you, where you can explore my journey, projects, and skills. I created this portfolio to showcase my experience in development, whether through my studies, professional experiences, or the various projects I’ve worked on.</h3>
        <h3>Here, you’ll find an overview of my technical skills, the projects I’ve passionately completed, and details about my education and past experiences. If you’d like to learn more or get in touch, feel free to check out the Contact section!</h3>
        <h3>Thank you for visiting, and enjoy browsing!</h3>
      </div>
    </div>
  );
};

export default Home;
