package models

// Définition de la structure Contact représentant le modèle de la table "contacts"
type Contact struct {
	ID        uint `gorm:"primaryKey"`
	Nom       string
	Prenom    string
	Email     string
	Telephone string
}

// Retourne le nom de la table associée à ce modèle
func (Contact) TableName() string {
	return "contacts"
}
