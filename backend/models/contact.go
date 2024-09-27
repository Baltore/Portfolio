package models

type Contact struct {
	ID        uint `gorm:"primaryKey"`
	Nom       string
	Prenom    string
	Email     string
	Telephone string
}

func (Contact) TableName() string {
	return "contacts"
}
