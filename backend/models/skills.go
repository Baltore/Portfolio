package models

type Skill struct {
	ID            uint `gorm:"primaryKey"`
	SkillName     string
	LvlCompetence string
}

func (Skill) TableName() string {
	return "skills"
}
