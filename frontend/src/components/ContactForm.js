/*
import React, { useState } from 'react';
import api from '../services/api';
import { TextField, Button } from '@mui/material';

const ContactForm = ({ contact, onSuccess }) => {
    const [nom, setNom] = useState(contact ? contact.nom : '');
    const [prenom, setPrenom] = useState(contact ? contact.prenom : '');
    const [email, setEmail] = useState(contact ? contact.email : '');
    const [telephone, setTelephone] = useState(contact ? contact.telephone : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { nom, prenom, email, telephone };
        if (contact) {
            await api.updateContact(contact.id, data);
        } else {
            await api.createContact(data);
        }
        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
            <TextField label="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField label="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
            <Button type="submit" variant="contained">Enregistrer</Button>
        </form>
    );
};

export default ContactForm;

*/
