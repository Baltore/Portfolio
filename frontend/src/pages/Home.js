import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projet</Link></li>
            <li><Link to="/experience">Expérience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skill">Skills</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
        <hr />
      </header>
      <h1>Portfolio Immersion 3 jours</h1>
      <h3>Welcome to this portfolio where you can see the level of the project, experiences, the school route and to contact</h3>
    </div>
  );
};

export default Home;
