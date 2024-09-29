package models

type Admin struct {
	ID       uint   `gorm:"primaryKey"`
	Username string `gorm:"unique;not null"`
	Password string `gorm:"not null"`
}

func (Admin) TableName() string {
	return "admins"
}
