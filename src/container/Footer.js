import React from "react";
import styled from "styled-components";
import FooterSocials from "../components/FooterSocials";
import { Container } from "./styles/Container.styled";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Anonymous Pro", monospace;

  padding: 2rem 0 0;
  background: transparent;
  color: var(--soft-red);
  transition: all ease 0.3s;

  border-top: 1px solid var(--soft-red);

  p {
    font-size: 0.6rem;
    text-align: center;
  }
  a {
    color: var(--soft-red);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterDiv>
        <FooterSocials />

        <p>
          Designed & built by Nyore Achoja |{" "}
          <span>
            <a href="https://github.com/aamon40/My-Personal-FullStack-Portfolio">
              View Code
            </a>
          </span>
        </p>
      </FooterDiv>
    </Container>
  );
};

export default Footer;
