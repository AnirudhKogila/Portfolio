import React from "react";
import { bioData } from "../../data/data";
import ProjectCard from "../cards/ProjectCard";
import {Container,Wrapper,Title, Desc, CardContainer} from './styles'


const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a wide range of projects. Here are a few of them:
        </Desc>
        <CardContainer>
            {bioData.projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;