import styled from "styled-components";
import { images } from "../../constants";

export const StyledContact = styled.section`
  /* height: 100vh;
  height: 100svh; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url(${images.contactbg});
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat; */
  position: relative;
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
  max-width: 350px; /* max-height: 200px; */
  border-radius: 0 360px 360px 0;
  background-color: #000;
  z-index: 5;
  overflow: hidden;
  position: relative;

  span {
    background: linear-gradient(
      135.64deg,
      rgba(17, 14, 24, 0.9) 18.86%,
      rgba(17, 14, 24, 0) 42.96%
    );
  }
  img {
    max-width: 350px;
    object-fit: cover;
  }
`;

export const StyledForm = styled.div`
  /* display: flex; */
  /* position: absolute;
  top: 15%;
  left: 10%; */
  /* z-index: 10; */
  /* 
  @media screen and (max-width: 550px) {
    position: static;
    justify-content: center;
  } */
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: fit-content;
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid rgba(151, 71, 255, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 240px 240px 0px 240px;
    padding: 36px 30px 54px;
    width: 300px;

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
