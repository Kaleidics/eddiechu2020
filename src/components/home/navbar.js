import React from "react"
import styled from "styled-components"

import Logo from "../../assets/logo.png"

import resume from "../../assets/resume.pdf"

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledLogo src={Logo} />
        </StyledLogoContainer>
        <StyledLinks>
          <StyledLink1 href="./#main">Projects</StyledLink1>
          <StyledLink2 href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </StyledLink2>
          <StyledLink3
            href="mailto:contact@eddiechu.dev"
            target="_top"
            rel="noopener noreferrer"
          >
            Contact
          </StyledLink3>
        </StyledLinks>
      </StyledContainer>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  position: absolute;
  z-index: 9999;
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    padding: 32px;
  }
`

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`

const StyledLogoContainer = styled.div`
  display: flex;
`

const StyledLogo = styled.img`
  width: 32px;
  margin-bottom: 0;
  animation: rollIn 1.2s ease-out backwards;
`

const StyledLinks = styled.div`
  width: 69%;
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  max-width: 300px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
`
const StyledLink = styled.a`
  &,
  &:visited {
    text-decoration: none;
    color: white;
  }
`

const StyledLink1 = styled(StyledLink)`
  animation: moveInTop 1s ease-out 0.5s backwards;
`

const StyledLink2 = styled(StyledLink)`
  animation: moveInTop 1s ease-out 0.6s backwards;
`

const StyledLink3 = styled(StyledLink)`
  animation: moveInTop 1s ease-out 0.7s backwards;
`

export default Navbar
