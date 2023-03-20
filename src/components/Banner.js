import React from "react";
import { motion } from "framer-motion";
import { BiBrain } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";
import styled from "styled-components";
import { fadeInBottomVar } from "../container/utils/Variants";

const HeroBanner = styled.div`
  position: relative;
  margin-top: -54px;
  z-index: -1;
  @media screen and (max-width: 1250px) {
    margin-top: -72px;
  }
  @media screen and (max-width: 600px) {
    margin-top: -72px;
    display: none;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: rgba(145, 105, 255, 0.15);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 80px;
  width: max-content;
  backdrop-filter: blur(15px);
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  h3 {
    font-family: "Montserrat Alternates", "Montserrat";
    font-weight: 600;
    font-size: 1rem;
    margin-right: 0.5rem;
    color: rgba(145, 105, 255, 0.7);
  }
  svg {
    font-size: 24px;
    color: rgba(145, 105, 255, 0.7);
  }
`;

const BannerStuff = [
  {
    icon: <BiBrain />,
    text: "Imagine",
  },
  {
    icon: <BsGear />,
    text: "Create",
  },
  {
    icon: <MdOutlineRocketLaunch />,
    text: "Launch",
  },
];

const Banner = () => {
  return (
    <HeroBanner
      as={motion.div}
      variants={fadeInBottomVar}
      initial="hidden"
      whileInView="visible"
    >
      <ItemContainer>
        {BannerStuff.map((item, index) => (
          <Item key={`item-${index}`}>
            <h3>{item.text}</h3>
            {item.icon}
          </Item>
        ))}
      </ItemContainer>
    </HeroBanner>
  );
};

export default Banner;
