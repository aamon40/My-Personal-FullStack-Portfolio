import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  padding: 0.5rem 8rem;
  @media screen and (min-width: 1600px) {
    padding: 0.5rem 12rem;
  }
  @media screen and (max-width: 900px) {
    padding: 0.5rem 4rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0.5rem 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0.3rem 1rem;
  }
`;
