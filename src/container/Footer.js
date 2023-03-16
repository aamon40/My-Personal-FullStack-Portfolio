import React from "react";
import styled from "styled-components";
import FooterSocials from "../components/FooterSocials";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Anonymous Pro", monospace;
  background: #110e18;
  color: var(--light-purple);
  font-size: 0.6rem;
  transition: all ease 0.3s;

  a {
    color: var(--light-purple);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterSocials />

      <p>
        Designed & built by Nyore Achoja |{" "}
        <span>
          <a href="#">View Code</a>
        </span>
      </p>
    </FooterDiv>
  );
};

export default Footer;
