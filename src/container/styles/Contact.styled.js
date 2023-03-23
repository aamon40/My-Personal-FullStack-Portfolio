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
  justify-content: center;
  align-items: center;
  z-index: 5;
  border-radius: 8px;
  margin: 4rem 0 0;

  position: relative;
  width: 100%;

  img {
    width: 100%;
    max-width: 480px;
    border-radius: 8px;
    object-fit: cover;
  }
`;
