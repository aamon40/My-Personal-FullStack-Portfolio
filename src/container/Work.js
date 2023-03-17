import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import {
  Navigate,
  ProjectCard,
  ProjectContainer,
  ProjectDetails,
  ProjectImage,
  ProjectLinks,
} from "./styles/Work.styled";
import { images } from "../constants";

const Project = [
  {
    img: `${images.screens}`,
    title: "WonderFit Website",
    desc: "A random quote generator built in vanilla JS as part of FreeCodeCamp's front-end development libraries certification. lorem ipsum dolor sit amet I have a dream that one day...",
    demolink: "https://achojanyore.netlify.app/",
    gitlink:
      "https://github.com/aamon40/My-Personal-FullStack-Portfolio/tree/master",
  },

  {
    img: `${images.screens}`,
    title: "WonderFit Website",
    desc: "A random quote generator built in vanilla JS as part of FreeCodeCamp's front-end development libraries certification. lorem ipsum dolor sit amet I have a dream that one day...",
    demolink: "https://achojanyore.netlify.app/",
    gitlink:
      "https://github.com/aamon40/My-Personal-FullStack-Portfolio/tree/master",
  },
  {
    img: `${images.screens}`,
    title: "WonderFit Website",
    desc: "A random quote generator built in vanilla JS as part of FreeCodeCamp's front-end development libraries certification. lorem ipsum dolor sit amet I have a dream that one day...",
    demolink: "https://achojanyore.netlify.app/",
    gitlink:
      "https://github.com/aamon40/My-Personal-FullStack-Portfolio/tree/master",
  },
];

const Work = () => {
  return (
    <ProjectContainer>
      {Project.map((item, index) => (
        <ProjectCard key={`project-${index}`}>
          <ProjectImage>
            <img src={item.img} alt="" />
          </ProjectImage>
          {/* <Navigate>
            <AiOutlineLeft />
            <AiOutlineRight />
          </Navigate> */}

          <ProjectDetails>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </ProjectDetails>

          <ProjectLinks>
            <a target="_blank" rel="noreferrer" href={item.demolink}>
              <MdOutlineRocketLaunch />
            </a>
            <a target="_blank" rel="noreferrer" href={item.gitlink}>
              <FiGithub />
            </a>
          </ProjectLinks>
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};

export default Work;
