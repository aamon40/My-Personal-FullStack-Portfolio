import styled from "styled-components";
import { images } from "../../constants";

export const MainContainer = styled.header`
  height: 100vh;
`;

export const HeaderLeft = styled.div`
  height: calc(100vh - 6rem);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    text-transform: lowercase;
    span {
      color: var(--bluish-purple);
    }
  }

  h3 {
    font-family: "Anonymous Pro", monospace;
    color: #9747ff;
    font-weight: 400;
    font-size: clamp(1.5rem, 2vw, 2rem);
    line-height: 45px;
    margin-bottom: 1rem;
    @media screen and (max-width: 400px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    max-width: 450px;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 840px) {
      text-align: justify;
    }
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }

  img {
    filter: grayscale(100%) opacity(20%);
  }

  @media screen and (max-width: 840px) {
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    h1 {
      font-size: clamp(3.5rem, 5vw, 4rem);
    }
    @media screen and (max-width: 600px) {
      margin-top: 6rem;
    }

    @media screen and (max-width: 450px) {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  background-image: url(${images.herobg});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: top right;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 840px) {
    background-size: 80%;
  }
  @media screen and (max-width: 600px) {
    background-image: url(${images.heromobile});
    background-size: 80%;
  }
`;
