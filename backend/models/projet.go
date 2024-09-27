package models

type Projet struct {
	ID          uint `gorm:"primaryKey"`
	Name        string
	Description string
	Technologie string
	StartDate   string
	EndDate     string
}

func (Projet) TableName() string {
	return "projets"
}
