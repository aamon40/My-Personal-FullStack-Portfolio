import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import { Container } from "./styles/Container.styled";
import { SectionTitle } from "./styles/About.styled";
import {
  Navigate,
  ProjectContainerCard,
  ProjectDetails,
  ProjectImage,
  ProjectLinks,
  StyledWork,
} from "./styles/Work.styled";
import { images } from "../constants";

const Work = () => {
  return (
    <StyledWork id="work">
      <Container>
        <SectionTitle style={{ color: "var(--bluish-purple)", top: "3rem" }}>
          My Projects
        </SectionTitle>
        <ProjectContainerCard>
          <ProjectImage>
            <img src={images.screens} alt="" />
          </ProjectImage>
          <Navigate>
            <AiOutlineLeft />
            <AiOutlineRight />
          </Navigate>

          <ProjectDetails>
            <h4>WonderFit Website</h4>
            <p>
              A random quote generator built in vanilla JS as part of
              FreeCodeCamp's front-end development libraries certification.
              lorem ipsum dolor sit amet I have a dream that one day...
            </p>
          </ProjectDetails>

          <ProjectLinks>
            <a href="#">
              <MdOutlineRocketLaunch />
            </a>
            <a href="#">
              <FiGithub />
            </a>
          </ProjectLinks>
        </ProjectContainerCard>
      </Container>
    </StyledWork>
  );
};

export default Work;
