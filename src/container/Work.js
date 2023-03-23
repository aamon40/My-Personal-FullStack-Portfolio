import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";

import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

import {
  ProjectCard,
  ProjectContainer,
  ProjectDetails,
  ProjectImage,
  ProjectLinks,
  Stars,
} from "./styles/Work.styled";
import { fadeInBottomVar, fadeInTopVar } from "./utils/Variants";
import { GlowStyled } from "./styles/GlowStyled";
import { images } from "../constants";

const Work = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => setWork(data));
  }, []);

  return (
    <ProjectContainer>
      {work.map((work, index) => (
        <ProjectCard key={`project-${index}`}>
          <ProjectImage
            as={motion.div}
            variants={fadeInTopVar}
            initial="hidden"
            whileInView="visible"
          >
            <img src={urlFor(work.picture)} alt="" />
          </ProjectImage>

          <ProjectDetails
            as={motion.div}
            variants={fadeInBottomVar}
            initial="hidden"
            whileInView="visible"
          >
            <h4>{work.title}</h4>
            <p>{work.description}</p>
          </ProjectDetails>

          <ProjectLinks>
            <a target="_blank" rel="noreferrer" href={work.demourl}>
              <MdOutlineRocketLaunch />
            </a>
            <a target="_blank" rel="noreferrer" href={work.giturl}>
              <FiGithub />
            </a>
          </ProjectLinks>
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};

export default Work;
