# Portfolio

Membres du groupe : Qays, Matthis, Jemima, Ahmed, Khalidou

## Description

Ce projet est un système de gestion de portfolio développé avec Go pour le backend, SQLite pour la base de données, et React/Vue.js pour le frontend. Il permet d'afficher et de modifier des informations personnelles et professionnelles telles que les projets, les contacts, l'éducation, les expériences et les compétences via une interface d'administration.

Le site présente des informations sur une personne en particulier, visibles par défaut sur les différentes pages, et offre une interface d'administration où les données peuvent être modifiées. Toutes les modifications effectuées dans l'interface d'administration sont synchronisées avec la base de données.

## Fonctionnalités principales

Affichage des données : Les pages publiques affichent les données d'une seule personne sur plusieurs sections (projets, éducation, expériences, contacts, etc.).

CRUD (Create, Read, Update, Delete) : L'interface d'administration permet de créer, lire, mettre à jour et supprimer des informations telles que des projets, des compétences, des expériences, etc.

Authentification : L'accès à l'administration est sécurisé par un système d'authentification (si activé).

API REST : Le backend expose des routes API pour gérer les différentes entités via des requêtes HTTP.

Interface utilisateur réactive : L'application frontend consomme l'API pour afficher et modifier les données avec une interface réactive et moderne, grâce à une bibliothèque de composants UI comme Material UI (pour React).

## Structure du projet

Backend (Go) :

Le serveur Go utilise le framework Gin pour gérer les routes API.
GORM est utilisé pour l'interaction avec la base de données SQLite.
Le backend gère l'accès aux données avec des fonctionnalités CRUD complètes.

Frontend (React) :

Le frontend affiche les données du portfolio et permet de les modifier via une interface d'administration.
Axios est utilisé pour communiquer avec l'API backend.
Le state management est géré avec Redux (pour React).

## Prérequis

Go (1.16 ou supérieur)
Node.js (pour le frontend)
SQLite (ou PostgreSQL si configuré)

