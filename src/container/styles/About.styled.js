import styled from "styled-components";
import { images } from "../../constants";
import { motion } from "framer-motion";

export const StyledAbout = styled.section`
  /* height: 100vh;
  height: 100svh; */
  /* background-image: url(${images.aboutbg});
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat; */
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
  /* height: 100vh;
  height: 100svh; */
  margin-top: 2.5rem;

  @media screen and (max-width: 400px) {
    margin: 7.5rem 0 4rem;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const AboutImg = styled.div`
  max-width: 45%;

  @media screen and (max-width: 780px) {
    max-width: max-content;
  }
`;

export const Image = styled(motion.img)`
  max-width: 320px;
  box-shadow: 0px 6px 1px rgba(0, 0, 0, 0.6);
  transform: matrix(-0.99, -0.11, -0.11, 0.99, 0, 0);

  @media screen and (max-width: 780px) {
    max-width: 280px;
  }
`;

export const AboutText = styled.div`
  max-width: 55%;

  @media screen and (max-width: 780px) {
    max-width: max-content;
  }

  p {
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    font-weight: 500;
    line-height: 1.5rem;
    text-align: justify;
    letter-spacing: 0.1em;
    color: #fff;
  }
`;
