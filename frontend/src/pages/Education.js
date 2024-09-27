import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <h1>Éducation</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {educations.map(education => (
          <li key={education.ID}>
            <h2>{education.Diplome} - {education.SchoolName}</h2> 
            <p>Période: {education.StartDate} à {education.EndDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
