import React, { useState } from 'react'
import "../styles/skills.css"
import SkillCard from "./SkillCard"
import { SKILLS } from './SkillData'
import SkillsInfoCard from './SkillsInfoCard'
const Skills = () => {

  const [selectedSkill,setSelectedSkill]=useState(SKILLS[0]);
  const handleSelectSkill=(data)=>{
    setSelectedSkill(data);
  }
  return (
    <section className='skills-container'>
      <h3>Technical Proficiency</h3>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item)=>(
            <SkillCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.title===item.title}
            onClick={()=>handleSelectSkill(item)}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
