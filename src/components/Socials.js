import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import styled from "styled-components";

const StyledSocials = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 2%;
  bottom: 10%;
  z-index: 100;

  li {
    margin-bottom: 1rem;
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    padding: 0.4rem;
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(15px);

    &:hover {
      transform: translateY(-5px);
      box-shadow: rgba(145, 105, 255, 0.15) 0px 0px 8px 4px;
    }
    a {
      color: var(--soft-red);

      svg {
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <li>
        <a href="https://github.com/aamon40" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nyore-achoja-03127211a/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
      </li>
      <li>
        <a href="https://wa.me/2348120666693" target="_blank" rel="noreferrer">
          <ImWhatsapp />
        </a>
      </li>
    </StyledSocials>
  );
};

export default Socials;
