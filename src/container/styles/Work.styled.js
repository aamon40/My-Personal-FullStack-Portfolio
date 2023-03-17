import styled from "styled-components";

export const StyledWork = styled.section`
  /* height: 100vh;
  height: 100svh; */
  position: relative;
  background: #e7ecef;
`;

export const ProjectContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  gap: 2.5rem;
`;

export const ProjectCard = styled.div`
  padding: 0 1rem;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.02);
    /* backdrop-filter: blur(2px); */
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 14px 2px;
  }
  scroll-snap-align: start;
  width: 100%;
  flex: none;
`;
export const Navigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: absolute; */
  width: 100%;

  svg {
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
    color: var(--bluish-purple);
    padding: 0.3rem;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 14px 2px;
      transform: scale(0.95);
    }
  }
`;
export const ProjectImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0 2rem 0;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 0px 14px 2px);
    transform: translateY(-5px);
  }

  @media screen and (max-width: 600px) {
    img {
      max-width: 360px;
    }
  }
  @media screen and (max-width: 400px) {
    img {
      max-width: 280px;
    }
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--bluish-purple);

  h4 {
    padding-bottom: 1rem;
  }

  p {
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

  svg {
    color: #fff;
    font-size: 2.3rem;
    background: rgba(58, 12, 163, 0.39);
    border-radius: 15px;
    padding: 0.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 14px 2px;
      transform: scale(0.95);
    }
  }
`;
