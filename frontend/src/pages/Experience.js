import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les messages d'erreur

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        // Utiliser l'URL complète
        const response = await axios.get('http://localhost:8080/admin/experiences');
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
        setError("Impossible de récupérer les données d'expérience."); // Message d'erreur
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="http://localhost:3000">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projet</Link></li>
            <li><Link to="/skill">Skills</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
      </header>
      <body>
      <h1>Expérience</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {experiences.map(experience => (
          <li key={experience.ID}>
            <h2>{experience.WorkName}</h2> 
            <p>Description: {experience.Description}</p>
            <p>Période: {experience.StartDate} à {experience.EndDate}</p>
          </li>
        ))}
      </ul>
      </body>
    </div>
  );
};

export default Experience;
