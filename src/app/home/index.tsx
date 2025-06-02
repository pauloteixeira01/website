"use client";

import {
  StyledContainer,
  StyledInfos,
  StyledTitle,
  StyledDescription,
  StyledContainerImages,
  StyledImagePost,
} from "./styles";

export default function Home() {
  return (
    <StyledContainer>
      <StyledInfos>
        <StyledTitle>Hey!</StyledTitle>
        <StyledDescription>
          Welcome to my website. Here you find posts talk about technology.
        </StyledDescription>
      </StyledInfos>
      <StyledContainerImages>
        <StyledImagePost src="/images/woman.gif" alt="code woman" />
      </StyledContainerImages>
    </StyledContainer>
  );
}
