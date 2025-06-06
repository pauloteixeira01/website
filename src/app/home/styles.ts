import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70vh;
  align-items: center;
  flex-direction: column;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0rem 1rem;
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  color: #00ff00;

  @media (width > 600px) {
    font-size: 26px;
  }
`;

export const StyledDescription = styled.span`
  color: white;
  font-size: 18px;
  margin-top: 1rem;
  padding: 2rem;
  background-color: black;
  border-radius: 2rem;

  @media (width > 600px) {
    font-size: 20px;
  }
`;

export const StyledContainerImages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin-top: 1rem;

  @media (width > 600px) {
    width: 30%;
    border-radius: 2rem;
  }
`;

export const StyledImagePost = styled.img`
  width: 250px;
  height: 250px;

  @media (width > 600px) {
    width: 500px;
    height: 500px;
  }
`;
