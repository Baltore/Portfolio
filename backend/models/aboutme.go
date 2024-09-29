package models

// Définition de la structure AboutMe représentant le modèle de la table "aboutme"
type AboutMe struct {
	ID          uint `gorm:"primaryKey"`
	Nom         string
	Prenom      string
	Description string
	Email       string
	Telephone   string
	Image       []byte
}

// Retourne le nom de la table associée à ce modèle
func (AboutMe) TableName() string {
	return "aboutme"
}
