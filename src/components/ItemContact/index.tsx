import React, { ElementType } from 'react'


import { StyledContainer, StyledIcon, StyledLink, StyledText } from './styles'

interface ItemContactProps {
  IconFa: ElementType;
  LinkContact: string;
  href?: string;
}

export default function ItemContact({ IconFa, LinkContact, href }: ItemContactProps) {
  const link = href ? href : ''

  return (
    <StyledContainer>
      <StyledIcon>
        <IconFa />
      </StyledIcon>
      {link ? (
        <StyledLink href={link} target='_blank'>{LinkContact}</StyledLink>
      ) : (
        <StyledText>{LinkContact}</StyledText>
      )}
    </StyledContainer>
  )
}
