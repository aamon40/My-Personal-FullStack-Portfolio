import React, { useState } from "react";
import styled from "styled-components";

import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

const FloatStyled = styled.div`
  position: fixed;
  right: 4%;
  bottom: 10%;

  width: 48px;
  height: 48px;
  background: linear-gradient(145deg, #e2e8ecac, #ffffffac);
  box-shadow: rgb(0 0 0 / 52%) 0px 3px 13px 1px;
  border-radius: 50%;
  z-index: 100;

  span {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--soft-red);
    font-size: 2em;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  &.open span {
    transform: rotate(135deg);
  }

  &.open ul {
    opacity: 1;
    visibility: visible;
    transition: 0.3s;
    bottom: 100%;
  }

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const FloatUl = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%);

  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    background: linear-gradient(145deg, #e2e8ecac, #ffffffac);
    box-shadow: rgb(0 0 0 / 52%) 0px 3px 13px 1px;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;

    a {
      color: var(--soft-red);
    }
  }
`;

const IconList = [
  {
    name: "home",
    icon: <BiHome />,
  },
  {
    name: "about",
    icon: <AiOutlineUser />,
  },
  {
    name: "work",
    icon: <HiOutlineBriefcase />,
  },
  {
    name: "contact",
    icon: <AiOutlinePhone />,
  },
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FloatStyled onClick={toggleClass} className={isOpen ? "open" : null}>
      <span>+</span>
      <FloatUl>
        {IconList.map((item, index) => (
          <li>
            <a
              key={`item-${index}`}
              href={`#${item.name}`}
              //   onClick={() => setActiveNav(`#${item.name}`)}
              //   className={activeNav === `#${item.name}` ? "active" : ""}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </FloatUl>
    </FloatStyled>
  );
};

export default FloatingNav;
