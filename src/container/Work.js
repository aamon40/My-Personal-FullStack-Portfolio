import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import {
  // ProjectCard,
  ProjectContainer,
  ProjectDetails,
  ProjectImage,
  ProjectLinks,
} from "./styles/Work.styled";
import { fadeInBottomVar, fadeInTopVar } from "./utils/Variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";

const Work = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => setWork(data));
  }, []);

  return (
    <ProjectContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        spaceBetween={20}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {work.map((work, index) => (
          <SwiperSlide key={`project-${index}`}>
            <ProjectImage
              as={motion.div}
              variants={fadeInTopVar}
              initial="hidden"
              whileInView="visible"
            >
              <a target="_blank" rel="noreferrer" href={work.demourl}>
                <img src={urlFor(work.picture)} alt="" />
              </a>
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
                <p>demo</p>
              </a>

              <a target="_blank" rel="noreferrer" href={work.giturl}>
                <FiGithub />
                <p>code</p>
              </a>
            </ProjectLinks>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProjectContainer>
  );
};

export default Work;
