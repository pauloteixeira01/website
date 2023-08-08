'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { 
  StyledContainer, 
  StyledInfos, 
  StyledTitle,
  StyledDescription,
  StyledContainerImages,
  StyledImagePost,
  StyledLinkPost,
} from './pages/home/styles'

export default function Home() {
  return (
    <StyledContainer>    
    <StyledTitle>Hey!</StyledTitle>
  <StyledInfos>
    <StyledDescription>
      Welcome to my website.
      Here you find posts talk about tecnology.
    </StyledDescription>
  </StyledInfos>

  <StyledContainerImages>
    <StyledLinkPost href='programming-logic'>
      <StyledImagePost src='/images/a.gif' alt="programming logic" />
      <span>Programming Logic</span>
    </StyledLinkPost>

    <StyledLinkPost href=''>
      <StyledImagePost src='/images/ia.jpg' alt="Artificial Intelligence"  />
    </StyledLinkPost>

    <StyledLinkPost href=''>
      <StyledImagePost src='/images/cyberpunk.jpg' alt="Cyberpunk"  />
    </StyledLinkPost>

    <StyledLinkPost href=''>
      <StyledImagePost src='/images/cypherpunk.jpg' alt="Cypherpunk"  />
    </StyledLinkPost>
  </StyledContainerImages>
</StyledContainer>
  )
}
