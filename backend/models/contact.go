package models

type Contact struct {
	ID        uint   `gorm:"primaryKey"`
	Nom       string `json:"nom" binding:"required"`
	Prenom    string `json:"prenom" binding:"required"`
	Telephone string `json:"telephone"`
	Email     string `json:"email" binding:"required"`
}
