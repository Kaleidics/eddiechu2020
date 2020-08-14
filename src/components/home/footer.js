import React from "react"
import styled from 'styled-components'

import Darkness from "./darkness"
import Logo from "../../assets/logo.png"
import Sig from "../../assets/portfolio_sig.png"

import Github from "../../assets/github.png"
import LinkedIn from "../../assets/linkedin.png"
import Email from "../../assets/mail.png"

const Footer = () => {
  return (
    <StyledFooter>
      {/* Darkness */}
      <StyledBackground>
        <DeepDarkness />
      </StyledBackground>

      {/* Content */}
      <StyledContent>
        {/* Logo */}
        <LogoContainer>
          <StyledLogo src={Logo} />
        </LogoContainer>

        <StyledText>
          Eddie Chu works as a full-time software developer, but is open to new
          and exiciting projects.
        </StyledText>
        <StyledMessage
          href="mailto:contact@eddiechu.dev"
          target="_top"
          aria-label="contact@eddiechu.dev"
        >
          Got a project? Let me know →
        </StyledMessage>

        {/* Signature */}
        <SigContainer>
          <Signature src={Sig} />
        </SigContainer>

        {/* Bottom links */}
        <IconsContainer>
          <FooterLinks
            href="https://github.com/Kaleidics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledGithub
              src={Github}
              alt="Eddie ChuGithub"
              aria-label="Eddie Chu Kaleidics Github"
            />
          </FooterLinks>

          <FooterLinks
            href="https://www.linkedin.com/in/eddiechu-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledLinkedIn
              src={LinkedIn}
              alt="Eddie Chu LinkedIn"
              aria-label="Eddie Chu LinkedIn"
            />
          </FooterLinks>

          <FooterLinks href="mailto:contact@eddiechu.dev" target="_top">
            <StyledEmail
              src={Email}
              alt="Eddie Chu Email"
              aria-label="Eddie Chu Email"
            />
          </FooterLinks>
        </IconsContainer>
        <Copyright>
          <CopyText>
          </CopyText>
        </Copyright>
      </StyledContent>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: relative;
  color: white;
`

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  height: 0px;
  width: 100%;
  z-index: -1;
`
const DeepDarkness = styled(Darkness)`
  transform: rotate(180deg);
  height: 600px !important;
`

const StyledContent = styled.div`
  padding: 180px 36px 0 36px;
  height: 600px;
`

const LogoContainer = styled.div`
  display: flex;
`;

const StyledLogo = styled.img`
  width: 32px;
`;

const StyledText = styled.p`
  line-height: 1.8;
  color: rgb(143, 143, 146);
  font-family: "Lora", serif;
  margin: 20px 0;
`;

const StyledMessage = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: rgb(0, 226, 182);
  text-decoration: none;
  border-bottom: 2px solid rgb(0, 226, 182);
  margin: 20px 0;
  font-family: "Merriweather", serif;
  letter-spacing: 1px;
`;

const SigContainer = styled.div`
  width: 66%;
  max-width: 160px;
  margin: 20px 0 40px 0;
`;

const Signature = styled.img`
  max-width: 100%;
  padding: 0;
  margin: 0;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FooterLinks = styled.a`
  margin-right: 25px;
`;

const StyledGithub = styled.img`
  width: 26px;
  margin-bottom: 0;
  display: flex;
`;

const StyledLinkedIn = styled.img`
  width: 20px;
  margin-bottom: 0;
  display: flex;
`

const StyledEmail = styled.img`
  width: 26px;
  margin-bottom: 0;
  display: flex;
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin: 20px 0;
`;

const CopyText = styled.p`
  margin: 0;
  font-size: 13px;
  color: rgb(143, 143, 146);
  font-family: "Montserrat", sans-serif;
`

export default Footer
