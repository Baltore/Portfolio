package models

type AboutMe struct {
	ID          uint `gorm:"primaryKey"`
	Nom         string
	Prenom      string
	Description string
	Email       string
	Telephone   string
	Image       []byte
}

func (AboutMe) TableName() string {
	return "aboutme"
}
