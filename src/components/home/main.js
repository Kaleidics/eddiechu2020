import React from "react"
import styled from 'styled-components'

import ExpenxImage from "../../assets/expenxss.png"
import ExpenxLogo from "../../assets/expenxlogo.png"

import ReelReviewImage from "../../assets/reelmini.png"
import ReelReviewLogo from "../../assets/reelreviewlogo.png"

import CCImage from "../../assets/coinmini.png"
import CCLogo from "../../assets/bitcoin.png"

const Main = () => {
  return (
    <StyledMain>
      <StyledProjectSection>
        {/* Heading */}
        <StyledHeading>
          <StyledProjectsSub>Latest Work</StyledProjectsSub>
          <StyledProjectsMain>Selected Projects.</StyledProjectsMain>
        </StyledHeading>

        {/* Project1 */}
        <StyledProjectContainer>
          <a
            href="https://expenx.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImageContainer>
              <StyledImage src={ExpenxImage} />
              <StyledLogo src={ExpenxLogo} />
            </StyledImageContainer>
          </a>
        </StyledProjectContainer>

        {/* Project2 */}
        <StyledProjectContainer>
          <a
            href="https://reelreviews.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImageContainer>
              <StyledLogo2 src={ReelReviewLogo} />
              <StyledImage src={ReelReviewImage} />
            </StyledImageContainer>
          </a>
        </StyledProjectContainer>

        {/* Project3 */}
        <StyledProjectContainer>
          <a
            href="https://coinscompare.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImageContainer>
              <StyledImage src={CCImage} />
              <StyledLogo3 src={CCLogo} />
            </StyledImageContainer>
          </a>
        </StyledProjectContainer>
        <StyledAboutLink0 href="">
          See all projects
          <StyledArrow>&#187;</StyledArrow>
        </StyledAboutLink0>
      </StyledProjectSection>

      {/* About Me Section */}
      <StyledAboutSection>
        <StyledHeading>
          <StyledProjectsSub>Learn More</StyledProjectsSub>
          <StyledProjectsMain>My Experience.</StyledProjectsMain>
        </StyledHeading>
        {/* <StyledAboutText>
          I am a self-taught developer relentlessly marching along the infnite
          expanse of the web.
        </StyledAboutText> */}
        <StyledAboutText>
          I am a Front-end developer streamlining traditional automotive and
          property insurance underwriting through online portals.
        </StyledAboutText>
        <StyledAboutLinks>
          <StyledAboutLink1 href="">
            View Resume
            <StyledArrow>&#187;</StyledArrow>
          </StyledAboutLink1>
          <StyledAboutLink2 href="">
            View LinkedIn
            <StyledArrow>&#187;</StyledArrow>
          </StyledAboutLink2>
        </StyledAboutLinks>
      </StyledAboutSection>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  max-width: 1280px;
  margin: 20px auto 100px auto;
`;

const StyledProjectSection = styled.section`
  padding: 20px;
  max-width: 750px;
  margin: 0 auto;
`;

const StyledHeading = styled.h2`
  display: flex;
  flex-direction: column;
  max-width: 535px;
  margin: 0 auto;
`;

const StyledProjectsSub = styled.span`
  line-height: 1.8;
  font-size: 12px;
  color: rgb(165, 166, 168);
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-bottom: 15px;
  letter-spacing: 3px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const StyledProjectsMain = styled.span`
  font-size: 26px;
  font-weight: 900;
  font-family: "Merriweather", serif;
  color: rgb(33, 34, 38);
  margin: 10px 0 15px 0;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

const StyledProjectContainer = styled.div`
  margin: 80px 0;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  width: 32px;
  height: 22px;
  margin-top: auto;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -10px);
  }
`;
const StyledLogo2 = styled.img`
  width: 42px;
  height: 36px;
  margin-top: auto;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -10px);
  }
`;

const StyledLogo3 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: auto;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -10px);
  }
`;

const StyledImage = styled.img`
  width: 80%;
  max-width: 640px;
  box-shadow: 3px 5px 8px -1px rgba(71, 71, 71, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    transform: translate(0, -10px);
  }
`;

const StyledAboutSection = styled.section`
  margin: 100px 0;
  padding: 20px;
`;

const StyledAboutText = styled.p`
  line-height: 1.8;
  color: rgb(103, 103, 106);
  font-family: "Lora", serif;
  font-size: 16px;
  max-width: 535px;
  margin: 0 auto;
  color: rgb(103, 103, 106);
  font-family: "Lora", serif;
  font-size: 18px;
  line-height: 32px;
`;

const StyledAboutLinks = styled.div`
  margin: 40px auto 0 auto;
  max-width: 535px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 480px) {
    display: block;
  }
`

const StyledAboutLink0 = styled.a`
  text-transform: uppercase;
  background: rgb(33, 34, 38);
  padding: 18px 22px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  text-decoration: none;
  letter-spacing: 3px;
  margin-right: 20px;
  display: inline-block;
  border: 2px solid black;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 87.5px;
  }

  &:hover > span {
    animation: leftnRight 0.8s infinite;
  }
`

const StyledAboutLink1 = styled.a`
  text-transform: uppercase;
  background: rgb(33, 34, 38);
  padding: 18px 22px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  text-decoration: none;
  letter-spacing: 3px;
  margin-right: 20px;
  display: inline-block;
  border: 2px solid black;
  margin-bottom: 10px;

  &:hover > span {
    animation: leftnRight 0.8s infinite;
  }
`

const StyledAboutLink2 = styled.a`
  text-transform: uppercase;
  background: rgb(33, 34, 38);
  padding: 18px 22px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  text-decoration: none;
  letter-spacing: 3px;
  margin-right: 20px;
  display: inline-block;
  border: 2px solid black;
  background: white;
  color: black;
  border: 2px solid black;
  font-weight: 600;

  &:hover > span {
    animation: leftnRight 0.8s infinite;
  }
`

const StyledArrow = styled.span`
  display: inline-block;
  transition: all 0.4s ease;
  margin-left: 5px;
`

export default Main
