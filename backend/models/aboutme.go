package models

type AboutMe struct {
	ID          uint   `gorm:"primaryKey"`
	Nom         string `json:"nom"`
	Prenom      string `json:"prenom"`
	Description string `json:"description"`
	Email       string `json:"email"`
	Telephone   string `json:"telephone"`
	Image       []byte `json:"image"`
}

func (AboutMe) TableName() string {
	return "aboutme"
}
