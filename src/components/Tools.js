import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { images } from "../constants";
import { Container } from "../container/styles/Container.styled";
import { ServiceTitle } from "./Services";

const ToolsTitle = styled(ServiceTitle)`
  color: #fff;
  top: 6%;
  font-size: 1rem;
  font-weight: 500;
  &::after {
    width: 36px;
    height: 2px;
    top: 22px;
  }
`;

const StyledTools = styled.div`
  /* background-image: url(${images.toolsBg});
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-column-gap: 48px;
  grid-row-gap: 48px;
  justify-items: center;
  padding: 5rem 0;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Tool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-transform: capitalize;
  width: 48px;
  height: 48px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(255, 210, 67, 0.4) 0px 0px 8px 4px;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.8125rem;
  }
`;

const Skills = [
  {
    image: `${images.html}`,
    name: "html",
    alt: "html",
  },
  {
    image: `${images.sass}`,
    name: "sass",
    alt: "sass",
  },
  {
    image: `${images.javascript}`,
    name: "javascript",
    alt: "javascript",
  },
  {
    image: `${images.react}`,
    name: "react",
    alt: "react",
  },
  {
    image: `${images.styled}`,
    name: "styled",
    alt: "styled",
  },
  {
    image: `${images.git}`,
    name: "git",
    alt: "git",
  },
  {
    image: `${images.postgre}`,
    name: "postgreSQL",
    alt: "postgreSQL",
  },
  {
    image: `${images.node}`,
    name: "nodeJS",
    alt: "node",
  },
  {
    image: `${images.tailwind}`,
    name: "tailwind",
    alt: "tailwind",
  },
  {
    image: `${images.figma}`,
    name: "figma",
    alt: "figma",
  },
  {
    image: `${images.illustrator}`,
    name: "illustrator",
    alt: "illustrator",
  },
  {
    image: `${images.photoshop}`,
    name: "photoshop",
    alt: "photoshop",
  },
];

const Tools = () => {
  return (
    <StyledTools>
      <Container>
        <ToolsTitle>Tools i work with</ToolsTitle>
        <ToolGrid>
          {Skills.map((item, index) => (
            <Tool
              as={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.7,
                ease: "easeIn",
              }}
              key={`item+${index}`}
            >
              <img src={item.image} alt={item.alt} />
              <span>{item.name}</span>
            </Tool>
          ))}
        </ToolGrid>
      </Container>
    </StyledTools>
  );
};

export default Tools;
