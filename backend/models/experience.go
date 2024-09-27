package models

type Experience struct {
	ID          uint `gorm:"primaryKey"`
	WorkName    string
	Description string
	StartDate   string
	EndDate     string
}

func (Experience) TableName() string {
	return "experiences"
}
