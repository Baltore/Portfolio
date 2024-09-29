package models

// Définition de la structure Education représentant le modèle de la table "educations"
type Education struct {
	ID         uint `gorm:"primaryKey"`
	Diplome    string
	SchoolName string
	StartDate  string
	EndDate    string
}

// Retourne le nom de la table associée à ce modèle
func (Education) TableName() string {
	return "educations"
}
