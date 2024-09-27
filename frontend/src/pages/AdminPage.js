import React, { useEffect, useState } from 'react';
import { getEducation, getProjects, getExperiences, getSkills, getContacts, updateEducation, updateProject, updateExperience, updateSkill, updateContact } from '../services/api'; // Import des services

const AdminPage = () => {
  const [educationData, setEducationData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [contactsData, setContactsData] = useState([]);
  const [editData, setEditData] = useState(null); // Pour gérer l'édition

  useEffect(() => {
    // Charger les données dès le chargement de la page
    const fetchData = async () => {
      try {
        const educationResponse = await getEducation();
        const projectsResponse = await getProjects();
        const experienceResponse = await getExperiences();
        const skillsResponse = await getSkills();
        const contactsResponse = await getContacts();

        setEducationData(educationResponse.data);
        setProjectsData(projectsResponse.data);
        setExperienceData(experienceResponse.data);
        setSkillsData(skillsResponse.data);
        setContactsData(contactsResponse.data);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchData();
  }, []);

  // Fonction pour gérer l'enregistrement des modifications
  const handleSave = async (entityType, updatedData) => {
    try {
      switch (entityType) {
        case 'education':
          await updateEducation(updatedData.id, updatedData);
          setEducationData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        case 'project':
          await updateProject(updatedData.id, updatedData);
          setProjectsData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        case 'experience':
          await updateExperience(updatedData.id, updatedData);
          setExperienceData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        case 'skill':
          await updateSkill(updatedData.id, updatedData);
          setSkillsData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        case 'contact':
          await updateContact(updatedData.id, updatedData);
          setContactsData(prevData => prevData.map(item => (item.id === updatedData.id ? updatedData : item)));
          break;
        default:
          console.error('Type d’entité inconnu');
      }
      setEditData(null); // Fermer l'édition après la sauvegarde
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données :', error);
    }
  };

  return (
    <div>
      <h1>Page d'Administration</h1>

      <section>
        <h2>Éducation</h2>
        {educationData.map((edu) => (
          <div key={edu.id}>
            {editData?.id === edu.id ? (
              <input
                type="text"
                value={editData.school_name}
                onChange={(e) => setEditData({ ...editData, school_name: e.target.value })}
              />
            ) : (
              <p>{edu.school_name}</p>
            )}
            <button onClick={() => setEditData(edu)}>Modifier</button>
            {editData?.id === edu.id && <button onClick={() => handleSave('education', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>

      <section>
        <h2>Projets</h2>
        {projectsData.map((project) => (
          <div key={project.id}>
            {editData?.id === project.id ? (
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            ) : (
              <p>{project.name}</p>
            )}
            <button onClick={() => setEditData(project)}>Modifier</button>
            {editData?.id === project.id && <button onClick={() => handleSave('project', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>

      <section>
        <h2>Expérience</h2>
        {experienceData.map((exp) => (
          <div key={exp.id}>
            {editData?.id === exp.id ? (
              <input
                type="text"
                value={editData.work_name}
                onChange={(e) => setEditData({ ...editData, work_name: e.target.value })}
              />
            ) : (
              <p>{exp.work_name}</p>
            )}
            <button onClick={() => setEditData(exp)}>Modifier</button>
            {editData?.id === exp.id && <button onClick={() => handleSave('experience', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>

      <section>
        <h2>Compétences</h2>
        {skillsData.map((skill) => (
          <div key={skill.id}>
            {editData?.id === skill.id ? (
              <input
                type="text"
                value={editData.skill_name}
                onChange={(e) => setEditData({ ...editData, skill_name: e.target.value })}
              />
            ) : (
              <p>{skill.skill_name}</p>
            )}
            <button onClick={() => setEditData(skill)}>Modifier</button>
            {editData?.id === skill.id && <button onClick={() => handleSave('skill', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>

      <section>
        <h2>Contacts</h2>
        {contactsData.map((contact) => (
          <div key={contact.id}>
            {editData?.id === contact.id ? (
              <input
                type="text"
                value={editData.nom}
                onChange={(e) => setEditData({ ...editData, nom: e.target.value })}
              />
            ) : (
              <p>{contact.nom}</p>
            )}
            <button onClick={() => setEditData(contact)}>Modifier</button>
            {editData?.id === contact.id && <button onClick={() => handleSave('contact', editData)}>Enregistrer</button>}
          </div>
        ))}
      </section>
    </div>
  );
};

export default AdminPage;
