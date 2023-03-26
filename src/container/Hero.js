import React from "react";
import styled from "styled-components";
import {
  HeroLeft,
  HeroRight,
  HeroContent,
  HeroImage,
  MainContainer,
} from "./styles/Hero.styled";
import { Container } from "./styles/Container.styled";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import { fadeInLeftVar, fadeInRightVar } from "./utils/Variants";

import { images } from "../constants";

const Button = styled.button`
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  color: #fff;
  font-family: "Montserrat";
  font-size: 0.8125rem;
  font-weight: 600;
  background: linear-gradient(145deg, #22046e, #3a0ca3);
  box-shadow: rgba(0, 0, 0, 0.51) 1px 1px 7px 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 1600px) {
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 840px) {
    padding: 1rem 3rem;
    border: 1px solid var(--bluish-purple);
  }
`;

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "<FrontEnd Developer />",
      "UI/UX Designer",
      "Lover of music and astronomy",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <MainContainer id="home">
      <Container>
        <HeroContent>
          <HeroLeft
            as={motion.div}
            variants={fadeInLeftVar}
            initial="hidden"
            animate="visible"
            transition={{}}
          >
            <h6>Hello I'm,</h6>
            <h1>
              Nyore <span>Achoja</span>
            </h1>
            <h3>
              <span>{text}</span>
              <Cursor cursorCOlor="#9747ff" />
            </h3>
            <p>
              I combine a passion for good design and web development skills to
              create remarkably refreshing web apps.
            </p>
            <Button>
              <a href="#work" style={{ color: "#fff" }}>
                See My Work
              </a>
            </Button>
          </HeroLeft>
          <HeroRight>
            <HeroImage
              as={motion.div}
              variants={fadeInRightVar}
              initial="hidden"
              animate="visible"
            >
              <img src={images.heroimage} alt="astronaut flying a rocket" />
            </HeroImage>
          </HeroRight>
        </HeroContent>
      </Container>
    </MainContainer>
  );
};

export default Hero;
