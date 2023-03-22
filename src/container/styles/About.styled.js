import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled.section`
  position: relative;
`;

export const SectionTitle = styled.h3`
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 12%;
  z-index: 5;

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 8px;
    background: linear-gradient(90deg, #bb652b -7.5%, #fdd143 100%);
    transform: translate(-50%, -50%);

    top: -15px;
    left: 50%;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  box-shadow: inset 5px -5px 44px -4px rgba(0, 0, 0, 0.9);
  border: 3px solid rgba(145, 105, 255, 0.65);
  border-radius: 64px;
  margin-top: 2.5rem;
  position: relative;
  background: #110e18;
  padding: 2rem;
  overflow: hidden;

  @media screen and (max-width: 400px) {
    margin: 7.5rem 0 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 4rem;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const AboutImg = styled.div`
  max-width: 45%;
  z-index: 10;

  @media screen and (max-width: 780px) {
    max-width: max-content;
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  max-width: 320px;
  filter: drop-shadow(0px 6px 1px rgba(0, 0, 0, 0.6));
  rotate: 8deg;

  @media screen and (max-width: 780px) {
    max-width: 240px;
  }
`;

export const AboutText = styled.div`
  max-width: 55%;
  z-index: 10;

  @media screen and (max-width: 780px) {
    max-width: max-content;
  }

  p {
    font-size: clamp(0.8rem, 1.2vw, 1.2rem);
    font-weight: 300;
    line-height: 1.5rem;
    text-align: justify;
    letter-spacing: 0.1em;
    color: #fff;
  }
`;
