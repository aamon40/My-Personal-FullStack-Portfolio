import React from "react";
import { motion } from "framer-motion";
import {
  AboutContent,
  AboutImg,
  AboutText,
  Image,
  SectionTitle,
  StyledAbout,
} from "./styles/About.styled";
import { Container } from "./styles/Container.styled";
import { images } from "../constants";
import { fadeInLeftVar, fadeInRightVar } from "./utils/Variants";

const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <SectionTitle>About me</SectionTitle>
        <AboutContent>
          <AboutImg>
            <Image
              as={motion.img}
              variants={fadeInLeftVar}
              initial="hidden"
              whileInView="visible"
              src={images.astroplanet}
              alt="astronaut coding on a planet"
            />
          </AboutImg>
          <AboutText
            as={motion.div}
            variants={fadeInRightVar}
            initial="hidden"
            whileInView="visible"
          >
            <p>
              Hello! My name is Nyore and I enjoy creating beautifully crafted
              web experiences. My foray into software development started with a
              Python course in University where I learned the basics of
              programming. From that moment on, I got hooked and used every
              resource I could lay my hands on to improve my IT and programming
              skills. My current focus is on continually learning and and
              building high quality full stack web applications that meet
              industry best standards.
            </p>
          </AboutText>
        </AboutContent>
      </Container>
    </StyledAbout>
  );
};

export default About;
