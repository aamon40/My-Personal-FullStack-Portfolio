import React from "react";
import { images } from "../constants";
import styled from "styled-components";
import { SectionTitle } from "../container/styles/About.styled";
import { Container } from "../container/styles/Container.styled";
import { motion } from "framer-motion";
import { fadeInBottomVar } from "../container/utils/Variants";

export const ServiceTitle = styled(SectionTitle)`
  color: var(--soft-red);
  text-transform: capitalize;
  font-size: 1rem;
  position: absolute;
  top: 3%;

  &::after {
    background: var(--bluish-purple);
    width: 36px;
    height: 2px;
    top: 22px;
  }
`;

const StyledServiceTwo = styled.div`
  position: relative;
`;

const CardCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 5rem;
  gap: 3rem;
`;

const Cardn = styled.div`
  position: relative;
  transition: 0.5s;

  :nth-of-type(2) span {
    background: linear-gradient(147.85deg, #de224a 15.78%, #f85175 78.92%);
  }
  :nth-of-type(3) span {
    background: linear-gradient(137.39deg, #9169ff 17.99%, #a584ff 73.54%);
  }

  :nth-child(3) img {
    width: 78px;
  }
`;

const Side1 = styled.div`
  max-width: 240px;
  max-height: 140px;
  border-radius: 8px 8px 0 0;

  position: relative;
  background: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.3s;
  transform: translateY(120px);
  box-shadow: 0px 2px 4px 0px #00000070;

  &:hover {
    transform: translateY(0);
  }

  @media screen and (max-width: 768px) {
    transform: translateY(0);
  }
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 120px;
    filter: drop-shadow(rgba(57, 12, 163, 0.3) 0px 7px 10px);
  }
  h3 {
    font-size: 0.8rem;
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  p {
    font-size: 0.8rem;
    text-align: center;
    line-height: 0.9rem;
    color: #fff;
  }
`;

const Side2 = styled.span`
  max-width: 240px;
  height: 140px;
  border-radius: 0 0 8px 8px;
  position: relative;
  background: linear-gradient(155.74deg, #29abe2 5.24%, #8bd6f7 84.32%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4);
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

const ServiceTwo = () => {
  return (
    <Container>
      <StyledServiceTwo>
        <ServiceTitle>What I Do</ServiceTitle>
        <CardCon
          as={motion.div}
          variants={fadeInBottomVar}
          initial="hidden"
          whileInView="visible"
        >
          {ServiceContent.map((item, index) => (
            <Cardn key={`item-${index}`}>
              <Side1>
                <Content>
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </Content>
              </Side1>
              <Side2>
                <Content>
                  <p>{item.details}</p>
                </Content>
              </Side2>
            </Cardn>
          ))}
        </CardCon>
      </StyledServiceTwo>
    </Container>
  );
};

export default ServiceTwo;
