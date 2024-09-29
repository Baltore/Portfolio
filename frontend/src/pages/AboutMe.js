import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
  const [aboutme, setAboutMe] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les messages d'erreur

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        // Utiliser l'URL complète
        const response = await axios.get('http://localhost:8080/admin/aboutme');
        setAboutMe(response.data);
      } catch (error) {
        console.error("Error fetching aboutme data:", error);
        setError("Impossible de récupérer les données d'AboutMe."); // Message d'erreur
      }
    };

    fetchAboutMe();
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="http://localhost:3000">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projet</Link></li>
            <li><Link to="/experience">Expérience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/login">Admin</Link></li>
          </ul>
        </nav>
      </header>
      <body>
          <h1>About Me</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <ul className="aboutme-list">
            {aboutme.map(aboutme => (
              <li key={aboutme.ID} className="aboutme-block">
                <h2>{aboutme.Prenom} {aboutme.Nom}</h2>
                <p>{aboutme.Description}</p>
                <p>Email: {aboutme.Email}</p>
                <p>Phone: {aboutme.Telephone}</p>
                {aboutme.Image && (
                  <img
                    src={`data:image/jpeg;base64,${Buffer.from(aboutme.Image).toString('base64')}`}
                    alt={`${aboutme.Prenom} ${aboutme.Nom}`}
                    className="aboutme-image"
                  />
                )}
              </li>
            ))}
          </ul>
      </body>
    </div>
    );
};

export default AboutMe;
