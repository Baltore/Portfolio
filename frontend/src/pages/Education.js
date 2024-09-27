import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await axios.get('/admin/educations'); // Change l'URL si nécessaire
        setEducations(response.data.educations);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchEducations();
  }, []);

  return (
    <div>
      <h1>Éducation</h1>
      <ul>
        {educations.map(education => (
          <li key={education.id}>
            <h2>{education.degree}</h2>
            <p>{education.institution}</p>
            <p>{education.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
