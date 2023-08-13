import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  width: 95%;
  height: 40vh;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: black;
  padding: 1rem;
  border-radius: 2rem;

  @media (width > 600px) {
    width: 20%;
  }
`;

export const StyledPicture = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;