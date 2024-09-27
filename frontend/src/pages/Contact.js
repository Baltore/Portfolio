import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les messages d'erreur

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Utiliser l'URL complète
        const response = await axios.get('http://localhost:8080/admin/contacts');
        setContacts(response.data); // Assurez-vous que la structure des données est correcte
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setError("Impossible de récupérer les données des contacts."); // Message d'erreur
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Afficher le message d'erreur */}
      <ul>
        {contacts.map(contact => (
          <li key={contact.ID}> {/* Assurez-vous que 'ID' est la bonne propriété */}
            <h2>{contact.Prenom} {contact.Nom}</h2> {/* Ajustez les propriétés selon votre modèle */}
            <p>Email: {contact.Email}</p>
            <p>Téléphone: {contact.Telephone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
