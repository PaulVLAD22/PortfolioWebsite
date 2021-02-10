import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,
  FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,
  SocialMediaWrap,SocialLogo,SocialIconLink,SocialIcons} from './FooterElements'


  const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href="//www.instagram.com/vladpaul8/" target="_blank"
              aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com/in/vlad-paul-munteanu-738850187/" target="_blank"
              aria-label="Linkedin">
              <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
