import styled from "styled-components";

export const MainContainer = styled.section`
  margin: 5rem 0;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 840px) {
    flex-direction: column-reverse;
  }
`;

export const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: clamp(2.5rem, 4vw, 4rem);
    font-weight: 700;
    text-transform: lowercase;
    span {
      color: var(--bluish-purple);
    }

    @media screen and (min-width: 1600px) {
      font-size: 4.5rem;
    }
  }

  h3 {
    font-family: "Anonymous Pro", monospace;
    color: var(--soft-red);
    font-weight: 400;
    font-size: clamp(1.2rem, 2vw, 2rem);
    line-height: 45px;
    margin-bottom: 1rem;
    @media screen and (max-width: 400px) {
      font-size: 1.2rem;
    }
  }

  h6 {
    color: var(--bluish-purple);
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    max-width: 450px;
    margin-bottom: 1.5rem;

    @media screen and (min-width: 1600px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 840px) {
      text-align: justify;
    }
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }

  @media screen and (max-width: 840px) {
    width: 100%;
    align-items: center;
    h1 {
      font-size: clamp(3.5rem, 5vw, 4rem);
    }

    @media screen and (max-width: 450px) {
      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;

export const HeroRight = styled.div`
  flex: 1;
`;

export const HeroImage = styled.div`
  img {
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 7px 7px 7px);
    width: 100%;
    min-width: 360px;
  }
`;
