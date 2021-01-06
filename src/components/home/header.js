import React from "react"

import styled from "styled-components"
import "../../utils/animations.css"

import Navbar from "./navbar"
import Darkness from "./darkness"

import Github from "../../assets/github.png"
import LinkedIn from "../../assets/linkedin.png"
import Email from "../../assets/mail.png"

const Header = () => {
  return (
    <StyledHeader>
      {/* First content */}
      <StyledContainer>
        {/* Heading text block */}
        <StyledMainContainer>
          <StyledContainerTop>
            <StyledHeading>
              <StyledSecondAnimate>Design Driven Developer</StyledSecondAnimate>
              <StyledThirdAnimate>in Sacramento, CA.</StyledThirdAnimate>
            </StyledHeading>
            <StyledText>
              Hi. I'm Eddie, a front end developer. <br /> I do JavaScript and
              ColdFusion.
            </StyledText>
          </StyledContainerTop>
          <StyledIntro>About me</StyledIntro>
        </StyledMainContainer>

        {/* Icons container */}
        <StyledIconsContainer>
          <Separator />
          <StyledLinks
            href="https://github.com/Kaleidics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eddie Chu Github"
          >
            <StyledGithub src={Github} alt="Eddie Chu Github" />
          </StyledLinks>
          <StyledLinks
            href="https://www.linkedin.com/in/eddiechu-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eddie Chu LinkedIn"
          >
            <StyledLinkedIn src={LinkedIn} alt="Eddie Chu Linkedin" />
          </StyledLinks>
          <StyledLinks
            href="mailto:contact@eddiechu.dev"
            target="_top"
            rel="noopener noreferrer"
            aria-label="Eddie Chu Email"
          >
            <StyledEmail src={Email} alt="Eddie Chu Email" />
          </StyledLinks>
        </StyledIconsContainer>
      </StyledContainer>
      {/* End of First content */}
      <Navbar />

      {/* Special Effects */}
      <Darkness />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;
  height: 90vh;
`

const StyledContainer = styled.div`
  position: absolute;
  margin-top: 70px;
  z-index: 99999;
  padding: 20px 20px 20px 20px;
  width: 100%;
  max-width: 1280px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -100%);
  max-width: 410px;

  @media screen and (min-height: 768px) {
    padding-bottom: 100px;
    margin-top: 90px;
    max-width: 575px;
  }
`

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const StyledContainerTop = styled.div``

const StyledHeading = styled.h1`
  font-size: 28px;
  font-weight: 900;
  font-family: "Merriweather", serif;
  color: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  line-height: 1.3;

  @media screen and (min-height: 800px) and (min-width: 768px) {
    font-size: 42px;
  }
`

const StyledSecondAnimate = styled.span`
  animation: moveInLeft 1.5s ease-out 0.6s backwards;
`

const StyledThirdAnimate = styled.span`
  animation: moveInLeft 1.5s ease-out 0.8s backwards;
`

const StyledText = styled.p`
  line-height: 1.8;
  color: rgb(103, 103, 106);
  font-family: "Lora", serif;
  font-size: 16px;
  animation: moveInBottom 1s ease-out 1s backwards;
  font-weight: 400;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

const StyledIntro = styled.p`
  line-height: 1.8;
  font-size: 12px;
  color: rgb(103, 103, 106);
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 3px;
  font-weight: 600;
  animation: moveInTop 1s ease-out 0.5s backwards;
`

const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
`

const Separator = styled.div`
  width: 15%;
  height: 2px;
  margin-right: 25px;
  border-radius: 3px;
  background: rgba(55, 55, 55, 0.6);
  animation: moveInLeft 1s ease-out 1s backwards;
`
const StyledLinks = styled.a`
  margin-right: 25px;
`

const StyledGithub = styled.img`
  width: 26px;
  animation: moveInLeft-slower 1s ease-out 1.8s backwards;
  margin-bottom: 0;
`

const StyledLinkedIn = styled.img`
  width: 20px;
  animation: moveInLeft-slower 1s ease-out 1.9s backwards;
  margin-bottom: 0;
`

const StyledEmail = styled.img`
  width: 26px;
  animation: moveInLeft-slower 1s ease-out 2s backwards;
  margin-bottom: 0;
`

export default Header
