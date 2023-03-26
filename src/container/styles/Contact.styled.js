import styled from "styled-components";

export const StyledContact = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem 0;

  @media screen and (max-width: 680px) {
    margin: 0 auto 50px;
    padding: 50px 0;
  }
`;

export const ContactImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  border-radius: 8px;
  padding: 1rem;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;

  margin: 4rem 0 0;

  position: relative;
  width: 100%;

  img {
    width: 100%;
    max-width: 640px;
    border-radius: 8px;
    object-fit: cover;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--soft-red);
    margin-top: 0.5rem;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }

    span {
      font-size: 1.5rem;
    }

    svg {
      rotate: 15deg;
    }
  }
`;
