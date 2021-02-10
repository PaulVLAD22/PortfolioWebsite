import React from 'react'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Me</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testemonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Me</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testemonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
