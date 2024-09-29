package models

// Définition de la structure Admin représentant le modèle de la table "admins"
type Admin struct {
	ID       uint   `gorm:"primaryKey"`
	Username string `gorm:"unique;not null"`
	Password string `gorm:"not null"`
}

// Retourne le nom de la table associée à ce modèle
func (Admin) TableName() string {
	return "admins"
}
