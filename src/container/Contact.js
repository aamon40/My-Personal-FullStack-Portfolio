import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./styles/About.styled";
import { ContactImage, StyledContact } from "./styles/Contact.styled";
import { Container } from "./styles/Container.styled";
import { images } from "../constants";
import { fadeInRightVar } from "./utils/Variants";

const Contact = () => {
  return (
    <StyledContact id="contact">
      <Container style={{ padding: "0.5 2rem" }}>
        <SectionTitle style={{ color: "var(--bluish-purple)", top: "50px" }}>
          Contact Me
        </SectionTitle>
        <ContactImage>
          <motion.img
            variants={fadeInRightVar}
            initial="hidden"
            whileInView="visible"
            src={images.contact}
            alt="contact-photo"
          />
          <span>Say hello, let's have a chat </span>
        </ContactImage>
      </Container>
    </StyledContact>
  );
};

export default Contact;
