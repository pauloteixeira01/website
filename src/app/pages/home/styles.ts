import styled from "styled-components";
import Link from 'next/link'

interface StyledImagePostProps {
  src: string;
  alt: string;
}

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 2rem;
`;

export const StyledInfos = styled.div`
  width: 100%;
  height: 6rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledContainerImages = styled.div`
  width: 100%;
  height: 100hv;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0rem 1rem;
  
  @media (width > 600px) {
    height: 500px;
    flex-direction: row;
  }
`;

export const StyledImagePost = styled.img<StyledImagePostProps>`
  width: 80%;
  height: 200px;
    
  @media (width > 600px) {
    width: 350px;
    height: 250px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  color: #00FF00;

  /* @media (width > 600px) {
    font-size: 26px;
  } */
`;

export const StyledDescription = styled.span`
  color: lightgray;
  font-size: 18px;
  text-align: center;

  @media (width > 600px) {
    font-size: 20px;
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