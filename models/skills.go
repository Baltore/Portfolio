package models

type Skill struct {
	ID            uint   `gorm:"primaryKey"`
	SkillName     string `json:"skill_name" binding:"required"`
	LvlCompetence string `json:"lvl_competence"`
}
