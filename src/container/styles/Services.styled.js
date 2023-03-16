import styled from "styled-components";

export const StyledServices = styled.div`
  position: relative;
  background: #e7ecef;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  gap: 3rem;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 320px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 1px;
  border-radius: 20px;
  padding: 2rem;
  gap: 2rem;
  position: relative;
  transition: all ease 0.2s;

  :nth-child(2) div {
    background: linear-gradient(180deg, #3a0ca3 -8.05%, #1d084d 100%);
  }
  :nth-child(3) div {
    background: linear-gradient(180deg, #f3d27b -8.05%, #aa9662 100%);
  }

  :nth-child(3) span {
    width: 126px;
    padding-top: 17px;
  }
  &:hover {
    transform: scale(1.02);
  }

  div {
    background: linear-gradient(180deg, #29abe2 -8.05%, #154255 100%);
    position: absolute;
    row-gap: 10px;
    left: 0;
    bottom: 0;
    height: 50%;
    width: 100%;
    color: #fff;
    padding: 1rem;
    border-radius: 0 20px 20px 20px;
  }

  span {
    width: 180px;
    padding-top: 24px;

    img {
      width: 100%;
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
    }
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  z-index: 5;
  :nth-child(3) {
    background-color: linear-gradient(180deg, #3a0ca3 -8.05%, #1d084d 100%);
  }
  h4 {
    font-weight: 700;
    font-size: 0.9rem;
  }
  h6 {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 20px;
    text-align: justify;
  }
`;
