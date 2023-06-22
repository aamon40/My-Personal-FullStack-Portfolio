import styled from "styled-components";

export const StyledWork = styled.section`
  position: relative;
  padding: 100px 0;
`;

export const ProjectContainer = styled.div`
  display: flex;
  /* overflow-x: scroll; */
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  gap: 2.5rem;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--soft-red);
  }

  .swiper-pagination-bullet-active {
    background: var(--soft-red);
  }
`;

export const ProjectCard = styled.div`
  padding: 0 1rem;
  transition: all 0.2s ease;

  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
  width: 100%;
  flex: none;
`;

export const ProjectImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4));
  position: relative;
  transition: all 0.2s ease;
  z-index: 5;

  &:hover {
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 0px 14px 2px);
    transform: translateY(-5px);
  }

  img {
    max-width: 60%;
  }

  @media screen and (max-width: 600px) {
    img {
      max-width: 360px;
    }
  }
  @media screen and (max-width: 480px) {
    img {
      max-width: 240px;
    }
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;

  h4 {
    color: var(--soft-red);
    padding-bottom: 1rem;
  }

  p {
    color: var(--dark);
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: var(--soft-red);
    font-size: 0.7rem;
    font-weight: 600;
    text-align: center;
  }

  svg {
    color: #fff;
    background: linear-gradient(145deg, #a51232, #de224a);

    box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
    border-radius: 15px;
    padding: 0.5rem;
    margin: 0px 0.5rem 0rem;
    cursor: pointer;
    font-size: 34px;
    transition: all 0.2s ease;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 14px 2px;
      transform: scale(0.95);
    }
  }
`;

export const Stars = styled.img`
  position: absolute;
  opacity: 0.5;
  top: 0;
`;
