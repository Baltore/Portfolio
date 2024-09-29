package models

// Définition de la structure Projet représentant le modèle de la table "projets"
type Projet struct {
	ID          uint `gorm:"primaryKey"`
	Name        string
	Description string
	Technologie string
	StartDate   string
	EndDate     string
	Lien        string
}

// Retourne le nom de la table associée à ce modèle
func (Projet) TableName() string {
	return "projets"
}
