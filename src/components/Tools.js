import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../container/styles/Container.styled";
import { ServiceTitle } from "./Services";
import { client, urlFor } from "../client";

const ToolsTitle = styled(ServiceTitle)`
  color: var(--light-purple);
  top: 6%;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 5;
  &::after {
    width: 36px;
    height: 2px;
    top: 22px;
  }
`;

const StyledTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ToolGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4rem 8rem;

  justify-items: center;
  position: relative;

  @media screen and (max-width: 900px) {
    padding: 4rem 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 4rem 1rem;
  }
`;
const Tool = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark);
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
  text-transform: capitalize;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  margin: 1rem;

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
    box-shadow: rgba(222, 34, 75, 0.243) 0px 0px 8px 4px;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 0.7rem;
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
        <ToolsTitle>Tools i use</ToolsTitle>
        <ToolGrid>
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
        </ToolGrid>
      </StyledTools>
    </Container>
  );
};

export default Tools;
