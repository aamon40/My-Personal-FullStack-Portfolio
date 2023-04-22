import { motion } from "framer-motion";
import {
  AboutContent,
  AboutImg,
  AboutText,
  Image,
  SectionTitle,
  StyledAbout,
} from "./styles/About.styled";
import { Container } from "./styles/Container.styled";
import { images } from "../constants";
import { fadeInLeftVar, fadeInRightVar } from "./utils/Variants";

const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <SectionTitle>About me</SectionTitle>
        <AboutContent>
          <AboutImg>
            <Image
              as={motion.img}
              variants={fadeInLeftVar}
              initial="hidden"
              whileInView="visible"
              src={images.astroplanet}
              alt="astronaut coding on a planet"
            />
          </AboutImg>
          <AboutText
            as={motion.div}
            variants={fadeInRightVar}
            initial="hidden"
            whileInView="visible"
          >
            <p>
              Hello! I am Nyore and I enjoy creating beautiful, accessible and
              fun web experiences. I am always looking to stay up to date with
              the latest technologies. My current focus is on continually
              learning and and building high quality full stack web applications
              that meet industry best standards. You can find me watching old
              movies and reading when I am not coding.
            </p>
          </AboutText>
        </AboutContent>
      </Container>
    </StyledAbout>
  );
};

export default About;
