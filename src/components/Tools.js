import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../container/styles/Container.styled";
import { ServiceTitle } from "./Services";
import { client, urlFor } from "../client";
import { GlowStyled } from "../container/styles/GlowStyled";
import { images } from "../constants";

const ToolsTitle = styled(ServiceTitle)`
  color: #fff;
  top: 6%;
  font-size: 1rem;
  font-weight: 500;
  z-index: 5;
  &::after {
    width: 36px;
    height: 2px;
    top: 22px;
  }
`;

export const Stars = styled.img`
  position: absolute;
  opacity: 0.5;
`;

const StyledTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 64px;
  grid-row-gap: 64px;
  box-shadow: inset 5px -5px 44px -4px rgba(0, 0, 0, 0.9);
  border: 3px solid rgba(145, 105, 255, 0.65);
  justify-items: center;
  padding: 4rem 8rem;
  overflow: hidden;
  position: relative;
  background: #110e18;
  border-radius: 64px;

  @media screen and (max-width: 768px) {
    padding: 4rem;
  }

  @media screen and (max-width: 500px) {
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    padding: 4rem 2rem;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 72px;
    grid-row-gap: 72px;
  }
`;
const Tool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-transform: capitalize;
  width: 56px;
  height: 56px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  @media screen and (min-width: 1280px) {
    width: 56px;
    height: 56px;
  }

  @media screen and (max-width: 500px) {
    width: 48px;
    height: 48px;
  }
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

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const query = '*[_type == "tools"]';

    client.fetch(query).then((data) => {
      setTools(data);
    });
  }, []);

  return (
    <Container>
      <StyledTools>
        <ToolsTitle>Tools i work with</ToolsTitle>
        <ToolGrid>
          <GlowStyled
            style={{
              left: "74%",
              top: "56%",
              background: "rgba(243, 210, 123, 0.2)",
            }}
          />

          <GlowStyled style={{ left: "-10%", top: "-30%" }} />

          {tools.map((tool, index) => (
            <Tool
              as={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.7,
                ease: "easeIn",
              }}
              key={`tool+${index}`}
            >
              <img src={urlFor(tool.icon)} alt={tool.alt} />
              <span>{tool.title}</span>
            </Tool>
          ))}
          <Stars src={images.stars} alt="stars" />
        </ToolGrid>
      </StyledTools>
    </Container>
  );
};

export default Tools;
