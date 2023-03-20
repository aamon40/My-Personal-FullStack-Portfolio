import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { images } from "../constants";
import { SectionTitle } from "../container/styles/About.styled";
import { Container } from "../container/styles/Container.styled";
import {
  Card,
  CardContainer,
  CardDetails,
  StyledServices,
} from "../container/styles/Services.styled";
import { fadeInBottomVar } from "../container/utils/Variants";

export const ServiceTitle = styled(SectionTitle)`
  color: var(--bluish-purple);
  text-transform: capitalize;
  font-size: 1rem;
  position: absolute;
  top: 4%;

  &::after {
    width: 36px;
    height: 2px;
    top: 22px;
  }
`;

const ServiceContent = [
  {
    img: `${images.development}`,
    title: "Web Development",
    details:
      "I develop fully functional, full-stack websites using modern technologies.",
    alt: "Web development image",
  },
  {
    img: `${images.design}`,
    title: "UI/UX Design",
    details:
      "I believe that design is not just about aesthetics but also about functionality, and my goal is to create designs that are both beautiful and user-friendly",
    alt: "Design image",
  },
  {
    img: `${images.branding}`,
    title: "Logo & Branding",
    details:
      "I create unique and powerful brand identities that connect with your target audience and make a lasting impact.",
    alt: "Branding image",
  },
];

const Services = () => {
  return (
    <StyledServices>
      <Container>
        <ServiceTitle>What I Do</ServiceTitle>
        <CardContainer
          as={motion.div}
          variants={fadeInBottomVar}
          initial="hidden"
          whileInView="visible"
        >
          {ServiceContent.map((item, index) => (
            <Card key={`item-${index}`}>
              <span>
                <img src={item.img} alt={item.alt} />
              </span>
              <CardDetails>
                <h4>{item.title} </h4>
                <h6>{item.details} </h6>
              </CardDetails>
              {/* <div /> */}
            </Card>
          ))}
        </CardContainer>
      </Container>
    </StyledServices>
  );
};

export default Services;
