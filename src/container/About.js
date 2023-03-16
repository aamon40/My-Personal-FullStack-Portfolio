import React from "react";
import {
  AboutContent,
  AboutImg,
  Image,
  SectionTitle,
  StyledAbout,
} from "./styles/About.styled";
import { Container } from "./styles/Container.styled";
import { images } from "../constants";

const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <SectionTitle>About me</SectionTitle>
        <AboutContent>
          <AboutImg>
            <Image
              src={images.astroplanet}
              alt="astronaut coding on a planet"
            />
          </AboutImg>
          <p>
            Hello! My name is Nyore and I enjoy creating beautifully crafted web
            experiences. My foray into software development started with a
            Python course in University where I learned the basics of
            programming. From that moment on, I got hooked and used every
            resource I could lay my hands on to improve my IT and programming
            skills. My current focus is on continually learning and and building
            high quality full stack web applications that meet industry best
            standards.
          </p>
        </AboutContent>
      </Container>
    </StyledAbout>
  );
};

export default About;
