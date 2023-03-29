import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 4rem;
  z-index: 100;
  transition: 0.3s ease-in-out;

  &.scroll {
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }

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
  width: 3rem;

  @media screen and (max-width: 400px) {
    width: 2.5rem;
  }

  @media screen and (min-width: 1600px) {
    width: 5rem;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  a {
    color: var(--bluish-purple);
    font-size: 0.8125rem;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
    text-transform: capitalize;
    &:hover {
      filter: brightness(1.5);
    }

    &.active {
      color: var(--soft-red);
    }

    @media screen and (min-width: 1600px) {
      font-size: 1.2rem;
    }
  }

  &:hover {
    div {
      background: var(--light-purple);
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
  border: 2px solid var(--bluish-purple);
  border-radius: 25px;
  padding: 1rem;
  color: var(--bluish-purple);
  font-family: "Montserrat";
  font-size: 0.8125rem;
  font-weight: 700;
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
    background-color: rgba(145, 105, 255, 0.1);
  }
`;

const Navbar = () => {
  const scrollBackground = () => {
    if (window.scrollY >= 71.05) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const [scroll, setScroll] = useState("false");

  useEffect(() => {
    window.addEventListener("scroll", scrollBackground);

    return () => {
      window.removeEventListener("scroll", scrollBackground);
    };
  }, []);

  return (
    <>
      <Wrapper className={scroll ? "scroll" : null}>
        <Logo>
          <Image
            as={motion.img}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            src="./assets/newLogo.png"
            alt="Logo"
          />
        </Logo>

        <NavRight>
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
            <a href="#contact" style={{ color: "var(--bluish-purple)" }}>
              Contact Me
            </a>
          </Button>
        </NavRight>
      </Wrapper>
    </>
  );
};

export default Navbar;
