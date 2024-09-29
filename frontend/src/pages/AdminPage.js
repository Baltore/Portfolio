// Importation des bibliothèques nécessaires
import React, { useEffect, useState } from 'react'; // Importation de React et des hooks useEffect et useState
import axios from 'axios'; // Importation d'axios pour effectuer des requêtes HTTP
import { Link, useNavigate } from 'react-router-dom'; // Importation de Link pour la navigation et useNavigate pour rediriger
import './AdminPage.css'; // Importation du fichier CSS pour le style de la page d'administration

// Définition du composant AdminPage
const AdminPage = () => {

  // Déclaration des états pour la gestion des données et des formulaires
  const [selectedPage, setSelectedPage] = useState('');// État pour la page sélectionnée dans le menu déroulant

  // États pour stocker les données récupérées des différentes sections
  const [educationData, setEducationData] = useState([]);
  const [projetsData, setProjetsData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [contactsData, setContactsData] = useState([]);
  const [aboutmeData, setAboutMeData] = useState([]);

  // État pour les données actuellement en cours de modification
  const [editData, setEditData] = useState(null);
  const [newData, setNewData] = useState({});

  const navigate = useNavigate(); // Initialisation de useNavigate pour rediriger l'utilisateur

  // Fonction pour charger les données à partir de l'API
  const fetchData = async () => {
    try {
      // Requêtes GET pour récupérer les données des différentes sections
      const aboutmeResponse = await axios.get('http://localhost:8080/admin/aboutme');
      const educationResponse = await axios.get('http://localhost:8080/admin/educations');
      const projetsResponse = await axios.get('http://localhost:8080/admin/projets');
      const experienceResponse = await axios.get('http://localhost:8080/admin/experiences');
      const skillsResponse = await axios.get('http://localhost:8080/admin/skills');
      const contactsResponse = await axios.get('http://localhost:8080/admin/contacts');

      // Mise à jour des états avec les données récupérées
      setAboutMeData(aboutmeResponse.data);
      setEducationData(educationResponse.data);
      setProjetsData(projetsResponse.data);
      setExperienceData(experienceResponse.data);
      setSkillsData(skillsResponse.data);
      setContactsData(contactsResponse.data);
    } catch (error) {
      // Gestion des erreurs en cas d'échec de la requête
      console.error('Erreur lors du chargement des données :', error);
    }
  };

  // Utilisation de useEffect pour charger les données lors du montage du composant
  useEffect(() => {
    fetchData(); // Appel de la fonction fetchData pour récupérer les données
  }, []); // Le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois après le premier rendu

  // Fonction pour gérer l'édition des données
  const handleEdit = (item) => {
    setEditData(item);  // Permet de mettre à jour l'état avec l'élément sélectionné pour modification
  };

  // Fonction pour confirmer les modifications apportées
  const handleConfirmEdit = async (id) => {
    try {
      // Construction de l'URL dynamique pour envoyer les données modifiées
      const url = `http://localhost:8080/admin/${selectedPage}/${id}`; // URL dynamique selon la page sélectionnée
      await axios.put(url, editData);  // Envoi des données modifiées à l'API
      alert('Modifications enregistrées avec succès !'); // Alerte de succès
      setEditData(null);  // Réinitialisation de l'état d'édition
      fetchData();  // Rechargement des données après la modification
    } catch (error) {
      // Gestion des erreurs en cas de problème lors de la mise à jour
      console.error('Erreur lors de la mise à jour :', error);
      alert('Une erreur est survenue lors de la mise à jour.');
    }
  };

  // Fonction pour supprimer un élément
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/admin/${selectedPage}/${id}`); // Envoi de la requête de suppression
      alert("Suppression réussie !");
      fetchData(); // Rechargement des données après suppression
    } catch (error) {
      // Gestion des erreurs en cas de problème lors de la suppression
      console.error('Erreur lors de la suppression des données :', error);
      alert("Erreur lors de la suppression des données.");
    }
  };

  // Fonction pour ajouter une nouvelle entrée
  const handleAddNew = async () => {
    try {
      await axios.post(`http://localhost:8080/admin/${selectedPage}`, newData); // Envoi des nouvelles données
      alert("Ajout réussi !");
      setNewData({}); // Réinitialisation de l'état pour le formulaire
      fetchData(); // Rechargement des données après l'ajout
    } catch (error) {
      // Gestion des erreurs en cas de problème lors de l'ajout
      console.error('Erreur lors de l\'ajout de nouvelles données :', error);
      alert("Erreur lors de l'ajout.");
    }
  };

  // Fonction pour gérer les changements dans les champs d'entrée
  const handleInputChange = (field, value) => {
    setEditData({ ...editData, [field]: value }); // Mise à jour de l'état d'édition avec la nouvelle valeur
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Suppression du jeton d'authentification
    navigate('/login'); // Redirection vers la page de connexion
  };

  // Labels pour les champs des formulaires
  const fieldLabels = {
    Prenom: 'Prénom',
    Nom: 'Nom',
    Description: 'Description',
    Email: 'Email',
    Telephone: 'Téléphone',
    Diplome: 'Diplôme',
    SchoolName: 'École',
    StartDate: 'Date de début',
    EndDate: 'Date de fin',
    Name: 'Nom du Projet',
    Technologie: 'Technologie',
    Lien: 'Lien',
    WorkName: 'Nom du Travail',
    SkillName: 'Compétence',
    LvlCompetence: 'Niveau de Compétence'
  };
  
  // Fonction pour rendre une section de table
  const renderTableSection = (title, data, fields) => (
    <section className="admin">
      <h2>{title}</h2>
      <div className="table-container">
        <div className="column-header">
          <h3>Information</h3>
          <div className="separator" />
          <h3>Modification</h3>
        </div>
        {data.map((item) => (
          <div key={item.ID} className="table-row">
            <div className="info-column">
              {fields.map(field => (
                <p key={field}>
                  <strong>{fieldLabels[field]} :</strong> {item[field]}
                </p>
              ))}
            </div>
            <div className="separator" />
            <div className="modify-column">
              {editData?.ID === item.ID ? (
                <>
                  {fields.map(field => (
                    <input
                      key={field}
                      type="text"
                      value={editData[field] || ""}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                    />
                  ))}
                  <button
                    className="confirm-button"
                    onClick={() => handleConfirmEdit(item.ID)}
                  >
                    Confirmer
                  </button>
                </>
              ) : (
                <button className="modify-button" onClick={() => handleEdit(item)}>Modifier</button>
              )}
              <button className="delete-button" onClick={() => handleDelete(item.ID)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Fonction pour ajouter de nouvelles données
  const renderAddNewForm = (fields) => (
    <div className="add-new-form">
      <h3>Ajouter un nouvel élément</h3>
      {fields.map(field => (
        <input
          key={field}
          type="text"
          placeholder={`New ${fieldLabels[field]}`}
          value={newData[field] || ""}
          onChange={(e) => setNewData({ ...newData, [field]: e.target.value })}
        />
      ))}
      <button className="add-button" onClick={handleAddNew}>Ajouter</button>
    </div>
  );

  // Afficher les sections selon la sélection
  const renderSelectedSection = () => {
    switch (selectedPage) {
      case 'aboutme':
        return (
          <>
            {renderTableSection('À Propos de Moi', aboutmeData, ['Prenom', 'Nom', 'Description', 'Email', 'Telephone'])}
            {renderAddNewForm(['Prenom', 'Nom', 'Description', 'Email', 'Telephone'])}
          </>
        );
      case 'educations':
        return (
          <>
            {renderTableSection('Éducation', educationData, ['Diplome', "SchoolName", "StartDate", "EndDate"])}
            {renderAddNewForm(['Diplome', "SchoolName", "StartDate", "EndDate"])}
          </>
        );
      case 'projets':
        return (
          <>
            {renderTableSection('Projets', projetsData, ['Name', "Description", "Technologie", "StartDate", "EndDate", "Lien"])}
            {renderAddNewForm(['Name', "Description", "Technologie", "StartDate", "EndDate", "Lien"])}
          </>
        );
      case 'experiences':
        return (
          <>
            {renderTableSection('Expérience', experienceData, ['WorkName', "Description", "StartDate", "EndDate"])}
            {renderAddNewForm(['WorkName', "Description", "StartDate", "EndDate"])}
          </>
        );
      case 'skills':
        return (
          <>
            {renderTableSection('Compétences', skillsData, ['SkillName', "LvlCompetence"])}
            {renderAddNewForm(['SkillName', "LvlCompetence"])}
          </>
        );
      case 'contacts':
        return (
          <>
            {renderTableSection('Contacts', contactsData, ['Nom', "Prenom", "Email", "Telephone"])}
            {renderAddNewForm(['Nom', "Prenom", "Email", "Telephone"])}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutme">About Me</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projets">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        </header>
      <div>
        <h1>Administration</h1>
        <div className="page-selection">
          <label>Quelle page voulez-vous modifier ?</label>
          <select value={selectedPage} onChange={(e) => setSelectedPage(e.target.value)}>
            <option value="">Sélectionnez une page</option>
            <option value="aboutme">À propos de moi</option>
            <option value="educations">Éducation</option>
            <option value="projets">Projets</option>
            <option value="experiences">Expériences</option>
            <option value="skills">Compétences</option>
            <option value="contacts">Contacts</option>
          </select>
        </div>
      <main>
        {renderSelectedSection()}
        <button onClick={handleLogout} className="buttonDeco">Se déconnecter</button>
      </main>
    </div>
    </div>
  );
};

export default AdminPage;
