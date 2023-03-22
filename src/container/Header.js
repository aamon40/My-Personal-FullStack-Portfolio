import React from "react";
import styled from "styled-components";
import {
  HeaderLeft,
  HeaderRight,
  HeroContent,
  HeroImage,
  MainContainer,
} from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import { fadeInLeftVar } from "./utils/Variants";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { images } from "../constants";

const Button = styled.button`
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  color: #fff;
  font-family: "Montserrat";
  font-size: 0.8125rem;
  font-weight: 600;
  background: var(--bluish-purple);
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

const Header = () => {
  const [text, count] = useTypewriter({
    words: ["<FrontEnd Developer />", "UI/UX Designer", "Generally great guy"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <MainContainer id="home">
      <Navbar />
      <Container>
        <HeroContent>
          <HeaderLeft
            as={motion.div}
            variants={fadeInLeftVar}
            initial="hidden"
            whileInView="visible"
          >
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
            {/* <div>
            <img src={images.rocket} alt="" />
          </div> */}
          </HeaderLeft>
          <HeaderRight>
            <HeroImage>
              <img src={images.heroimage} alt="astronaut flying a rocket" />
            </HeroImage>
          </HeaderRight>
        </HeroContent>

        {/* <Banner /> */}
      </Container>
    </MainContainer>
  );
};

export default Header;
