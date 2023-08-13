'use client'

import React from 'react'
import { FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from 'react-icons/fa'

import ItemContact from '../../components/ItemContact'

import { StyledContainer, StyledContent, StyledPicture } from './styles'

export default function Contact() {
  return (
    <StyledContainer>
      <StyledContent>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="paulo-teixeira-developer" 
          href="https://www.linkedin.com/in/paulo-teixeira-developer/"
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="pauloteixeira01"
          href="https://github.com/pauloteixeira01" 
        />
        <ItemContact 
          IconFa={FaWhatsapp} 
          LinkContact="(85) 98662-9688"
          href="https://api.whatsapp.com/send?phone=85986629688&text=Hey!%20What´s up..." 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="paulo.teixeira541@gmail.com" 
        />
      </StyledContent>

      <StyledPicture src="images/profile.png" alt="profile_picture"/>
    </StyledContainer>
  )
}
