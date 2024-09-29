import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les messages d'erreur

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        // Utiliser l'URL complète
        const response = await axios.get('http://localhost:8080/admin/educations');
        setEducations(response.data);
      } catch (error) {
        console.error("Error fetching education data:", error);
        setError("Impossible de récupérer les données d'éducation."); // Message d'erreur
      }
    };

    fetchEducations();
  }, []);

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="http://localhost:3000">Home</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/projets">Projet</Link></li>
            <li><Link to="/experience">Expérience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/login">Admin</Link></li>
          </ul>
        </nav>
      </header>
      <body>
      <h1>Éducation</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul className="aboutme-list">
        {educations.map(education => (
          <li key={education.ID} className="aboutme-block">
            <h2>{education.Diplome}</h2> 
            <p> {education.SchoolName} </p>
            <p>Période : {education.StartDate} à {education.EndDate}</p>
          </li>
        ))}
      </ul>
      </body>
    </div>
  );
};

export default Education;
