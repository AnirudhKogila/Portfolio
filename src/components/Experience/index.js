import React from "react";
// import styled from "styled-components";
import { bioData } from "../../data/data";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../cards/ExperienceCard";
import {Container,Wrapper, Title,Desc } from "./styles"
const Experience = (themee) => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "20px",
          }}
        >
          My experience as a software engineer, Data Engineer, Full Stack Developer.
        </Desc>

        <VerticalTimeline lineColor={themee.themee === 'light' ? "rgb(47, 43, 58)" :"#FFFFFF"}>
          {bioData.experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              themee={themee}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;