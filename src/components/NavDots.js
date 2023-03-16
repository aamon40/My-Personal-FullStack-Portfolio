import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

import styled from "styled-components";

const LinkDot = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 10%;
  right: 2%;
  z-index: 100;
  padding: 0.2rem;
  background: rgba(145, 105, 255, 0.15);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 80px;
  backdrop-filter: blur(15px);

  @media screen and (max-width: 780px) {
    flex-direction: row;
    left: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }

  li {
    margin-bottom: 1rem;
    background: rgba(145, 105, 255, 0.15);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    padding: 0.4rem;
    backdrop-filter: blur(15px);

    transition: all 0.2s ease-in-out;
    :last-of-type {
      margin-bottom: 0;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    a {
      color: var(--light-purple);

      svg {
        font-size: 1.2rem;
      }

      &.active {
        color: #fff;
      }
    }
  }
`;

const NavItems = [
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

const NavDots = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <>
      <LinkDot>
        {NavItems.map((item, index) => (
          <li>
            <a
              key={item + index}
              href={`#${item.name}`}
              onClick={() => setActiveNav(`#${item.name}`)}
              className={activeNav === `#${item.name}` ? "active" : ""}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </LinkDot>
    </>
  );
};

export default NavDots;
