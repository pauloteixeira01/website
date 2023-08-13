'use client'

import { 
  StyledContainer, 
  StyledInfos, 
  StyledTitle,
  StyledDescription,
  StyledContainerImages,
  StyledImagePost,
  // StyledLinkPost,
} from './styles'

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
        <StyledImagePost src='/images/woman.gif' alt="code woman" />
      </StyledContainerImages>
      {/* <StyledContainerImages> */}
        {/* <StyledLinkPost href='programming-logic'> */}
          {/* <span>Cyberpunk</span> */}
        {/* </StyledLinkPost> */}

        {/* <StyledLinkPost href=''>
          <StyledImagePost src='/images/ia.jpg' alt="Artificial Intelligence"  />
          </StyledLinkPost>
          
          <StyledLinkPost href=''>
          <StyledImagePost src='/images/cyberpunk.jpg' alt="Cyberpunk"  />
          </StyledLinkPost>
          
          <StyledLinkPost href=''>
          <StyledImagePost src='/images/cypherpunk.jpg' alt="Cypherpunk"  />
        </StyledLinkPost> */}
      {/* </StyledContainerImages> */}
      </StyledContainer>
    
  )
}
