package models

type Education struct {
	ID         uint `gorm:"primaryKey"`
	Diplome    string
	SchoolName string
	StartDate  string
	EndDate    string
}

func (Education) TableName() string {
	return "educations"
}
