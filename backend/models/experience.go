package models

// Définition de la structure Experience représentant le modèle de la table "experiences"
type Experience struct {
	ID          uint `gorm:"primaryKey"`
	WorkName    string
	Description string
	StartDate   string
	EndDate     string
}

// Retourne le nom de la table associée à ce modèle
func (Experience) TableName() string {
	return "experiences"
}
