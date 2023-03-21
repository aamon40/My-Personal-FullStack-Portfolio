import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { images } from "../constants";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 4rem;

  @media screen and (max-width: 840px) {
    padding: 0.5rem 2rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0.3rem 0.5rem;
  }
`;

const Logo = styled.div``;

const Image = styled(motion.img)`
  cursor: pointer;
  width: 4rem;

  @media screen and (max-width: 400px) {
    width: 2.5rem;
  }

  @media screen and (min-width: 1600px) {
    width: 5rem;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;

  @media screen and (max-width: 930px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  a {
    color: #fff;
    font-size: 0.8125rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    text-transform: capitalize;
    &:hover {
      color: var(--yellow);
    }

    @media screen and (min-width: 1600px) {
      font-size: 1.2rem;
    }
  }

  &:hover {
    div {
      background-color: var(--yellow);
    }
  }
`;
const Dot = styled.div`
  width: 5px;
  height: 5px;
  background: transparent;
  border-radius: 50%;
  margin-right: 5px;
  margin-right: 5px;
  transition: all 0.3s ease-in-out;
`;

const Button = styled.button`
  border: 2px solid var(--yellow);
  border-radius: 25px;
  padding: 1rem 2rem;
  color: var(--yellow);
  font-family: "Montserrat";
  font-size: 0.8125rem;
  font-weight: 600;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  @media screen and (min-width: 1600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }

  &:hover {
    background-color: rgba(243, 210, 123, 0.15);
  }
`;

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Logo>
          <Image
            as={motion.img}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            src={images.logo}
            alt="Logo"
          />
        </Logo>

        <NavLeft>
          <Menu>
            {["home", "about", "work"].map((item, index) => (
              <MenuItem
                as={motion.li}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                key={`link-${index}`}
              >
                <Dot />
                <a href={`#${item}`}>{item}</a>
              </MenuItem>
            ))}
          </Menu>
          <Button
            as={motion.button}
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              ease: "easeInOut",
              duration: 0.3,
              delay: 0.5,
            }}
          >
            {" "}
            <a href="#contact" style={{ color: "var(--yellow)" }}>
              Get In Touch
            </a>
          </Button>
        </NavLeft>
      </Wrapper>
    </>
  );
};

export default Navbar;
