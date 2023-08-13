'use client'

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

import { 
  StyledContainer, 
  StyledContent, 
  StyledContentTitle, 
  StyledTitle, 
  StyledSubTitle, 
  StyledMenu, 
  StyledNavLinks, 
  StyledCloseSidebar,
  StyledLink
} from './styles'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const pathName = usePathname()

  const showSiderbar = () => setSidebar(!sidebar)
  
  function activeLink(path: string) {
    return pathName === `/${path}` ? 'active' : ''
  }

  return (
    <StyledContainer>
      <StyledContent>
        <StyledContentTitle>
          <StyledTitle>Paulo Teixeira</StyledTitle>
          <StyledSubTitle>
            Full stack developer
          </StyledSubTitle>
        </StyledContentTitle>
        <StyledMenu>
          <FaBars onClick={showSiderbar} />
        </StyledMenu>
        <StyledNavLinks menu={sidebar}>
          <StyledCloseSidebar onClick={showSiderbar}><FaTimes /></StyledCloseSidebar>
          
          <StyledLink href="/" className={activeLink('')} onClick={showSiderbar}>HOME</StyledLink>     
          <StyledLink href="project" className={activeLink('project')} onClick={showSiderbar}>PROJECTS</StyledLink>       
          <StyledLink href="contact" className={activeLink('contact')} onClick={showSiderbar}>CONTACTS</StyledLink>
        </StyledNavLinks>
      </StyledContent>
    </StyledContainer>
  )
}
