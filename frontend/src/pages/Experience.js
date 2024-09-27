import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('/admin/experiences'); // Change l'URL si nécessaire
        setExperiences(response.data.experiences);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div>
      <h1>Expérience</h1>
      <ul>
        {experiences.map(experience => (
          <li key={experience.id}>
            <h2>{experience.title}</h2>
            <p>{experience.company}</p>
            <p>{experience.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
