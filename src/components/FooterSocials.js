import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import styled from "styled-components";

const StyledFooterSocials = styled.ul`
  display: flex;
  z-index: 10;

  li {
    margin: 1rem;
    background: rgba(145, 105, 255, 0.15);
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
      box-shadow: rgba(222, 34, 75, 0.227) 0px 0px 8px 4px;
    }
    a {
      color: var(--soft-red);

      svg {
        font-size: 1.2rem;
      }
    }
    @media screen and (min-width: 550px) {
      display: none;
    }
  }
`;

const FooterSocials = () => {
  return (
    <StyledFooterSocials>
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
    </StyledFooterSocials>
  );
};

export default FooterSocials;
