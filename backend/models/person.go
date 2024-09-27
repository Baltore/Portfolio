package models

import (
	"gorm.io/gorm"
)

// Person représente le modèle d'une personne
type Person struct {
	gorm.Model
	Name  string `json:"name"`
	Email string `json:"email"`
	Phone string `json:"phone"`
	// Ajoute d'autres champs si nécessaire
}
