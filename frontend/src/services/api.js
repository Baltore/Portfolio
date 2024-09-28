import axios from 'axios';

// Configuration globale pour Axios (baseURL peut être ajustée si besoin)
const api = axios.create({
  baseURL: 'http://localhost:8080',  // L'URL de ton backend (assure-toi qu'il fonctionne sur ce port)
});

// Gestion des requêtes pour la section AboutMe
export const getAboutMe = () => api.get('/admin/aboutme');
export const addAboutMe = (data) => api.post('/admin/aboutme', data);
export const updateAboutMe = (id, data) => api.put(`/admin/aboutme/${id}`, data);
export const deleteAboutMe = (id) => api.delete(`/admin/aboutme/${id}`);


// Gestion des requêtes pour la section Éducation
export const getEducations = () => api.get('/admin/educations');
export const addEducation = (data) => api.post('/admin/educations', data);
export const updateEducation = (id, data) => api.put(`/admin/educations/${id}`, data);
export const deleteEducation = (id) => api.delete(`/admin/educations/${id}`);

// Gestion des requêtes pour la section Projet
export const getProjets = () => api.get('/admin/projets');
export const addProjet = (data) => api.post('/admin/projets', data);
export const updateProjet = (id, data) => api.put(`/admin/projets/${id}`, data);
export const deleteProjet = (id) => api.delete(`/admin/projets/${id}`);

// Gestion des requêtes pour la section Expérience
export const getExperiences = () => api.get('/admin/experiences');
export const addExperience = (data) => api.post('/admin/experiences', data);
export const updateExperience = (id, data) => api.put(`/admin/experiences/${id}`, data);
export const deleteExperience = (id) => api.delete(`/admin/experiences/${id}`);

// Gestion des requêtes pour les Compétences
export const getSkills = () => api.get('/admin/skills');
export const addSkill = (data) => api.post('/admin/skills', data);
export const updateSkill = (id, data) => api.put(`/admin/skills/${id}`, data);
export const deleteSkill = (id) => api.delete(`/admin/skills/${id}`);

// Gestion des requêtes pour les Contacts
export const getContacts = () => api.get('/admin/contacts');
export const addContact = (data) => api.post('/admin/contacts', data);
export const updateContact = (id, data) => api.put(`/admin/contacts/${id}`, data);
export const deleteContact = (id) => api.delete(`/admin/contacts/${id}`);
