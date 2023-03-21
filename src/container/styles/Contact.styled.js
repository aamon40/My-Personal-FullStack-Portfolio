import styled from "styled-components";
import { images } from "../../constants";

export const StyledContact = styled.section`
  display: flex;

  margin: 0 auto 100px;
  padding: 100px 0;

  align-items: center;
  justify-content: center;
  /* background-image: url(${images.contactbg});
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat; */
  position: relative;

  @media screen and (max-width: 680px) {
    margin: 0 auto 50px;
    padding: 50px 0;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 4rem 0;
  gap: 4rem;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;
export const ContactImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  border-radius: 0 360px 360px 0;

  /* overflow: hidden; */
  position: relative;
  width: 50%;
  &::before {
    content: "";
    border-radius: 0 360px 360px 0;
    width: 100%;
    height: 100%;
    background: rgba(151, 71, 255, 0.2);
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    content: "";
    border: 2px solid var(--light-purple);
    border-radius: 0 360px 360px 0;
    width: 100%;
    height: 100%;
    top: -10px;
    left: 10px;
    z-index: -1;
    position: absolute;
    transition: all 0.3s ease;
  }

  :hover {
    ::after {
      top: -2px;
      left: -2px;
    }

    ::before {
      background: transparent;
    }
  }

  img {
    width: 100%;
    max-width: 480px;
    border-radius: 0 360px 360px 0;
    object-fit: cover;
  }
`;

export const StyledForm = styled.div`
  /* display: flex; */

  width: 50%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: fit-content;
    background: rgba(0, 0, 0, 0.5);
    border: 2px solid rgba(151, 71, 255, 1);
    backdrop-filter: blur(2px);
    border-radius: 240px 240px 0px 240px;
    padding: 36px 30px 54px;
    width: 100%;
    max-width: 480px;

    /* @media screen and (max-width: 550px) {
      /* width: 150px;
      margin-top: 100px; */

    span {
      color: var(--light-purple);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.8rem;
    }

    input,
    textarea {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 40px;
      border: none;
      outline: none;
      color: #fff;
      font-family: "Montserrat";
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      /* width: 50%; */
    }

    button {
      cursor: pointer;
      width: max-content;
      display: flex;
      justify-content: flex-end;
      background: transparent;
      border: none;
      position: absolute;
      right: 16%;
      bottom: 7%;
      svg {
        color: rgba(255, 255, 255, 0.35);
        font-size: 1.5rem;
        &:hover {
          color: rgba(255, 255, 255, 0.45);
        }
      }
    }
  }
`;
