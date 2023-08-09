import styled from "styled-components";
import Link from 'next/link'

interface StyledImagePostProps {
  src: string;
  alt: string;
}

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0rem 1rem;
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  color: #00FF00;

  @media (width > 600px) {
    font-size: 26px;
  }
`;

export const StyledDescription = styled.span`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: 1rem;

  @media (width > 600px) {
    font-size: 20px;
  }
`;

export const StyledContainerImages = styled.div`
  width: 100%;
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: center;
  background-color: black;

  @media (width > 600px) {
    width: 20%;
    border-radius: 2rem;
  }
`;

export const StyledImagePost = styled.img<StyledImagePostProps>`
  width: 25rem;
  height: 25rem;

  @media(width > 600px) {
    width: 30rem;
    height: 30rem;
  }
`;





export const StyledLinkPost = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0rem;
`;