import { motion } from "framer-motion";
import { SectionTitle } from "./styles/About.styled";
import { ContactImage, StyledContact } from "./styles/Contact.styled";
import { Container } from "./styles/Container.styled";
import { images } from "../constants";
import { fadeInRightVar } from "./utils/Variants";
import { IoMdMail } from "react-icons/io";

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
          <a href="mailto:achojanyore@gmail.com?subject=Mail from your website">
            Say hello, let's have a chat.{" "}
            <span>
              <IoMdMail />
            </span>{" "}
          </a>
        </ContactImage>
      </Container>
    </StyledContact>
  );
};

export default Contact;
