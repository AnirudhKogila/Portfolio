import React from 'react'
import {Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage} from "./styles"
import { bioData } from '../../data/data'



const Skills = () => {
    const skills = bioData.skills
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>These are technologies I have worked on.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <>{console.log(skill)}
            <Skill>
              <SkillTitle>{skill.stack}</SkillTitle>
              <SkillList>
                {skill.technologies.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
            </>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills