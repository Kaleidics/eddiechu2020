import React from "react"

import styled from 'styled-components'
import Wave from '../../assets/wave.png';

const Darkness = ({className}) => {
  return (
    <StylishDarkness className={className}>
      <VerticalCenterLine />
      <HorizontalLineFirst />
      <VerticalLineOneQuarter />
      <VerticalLineThreeQuarter />
      <HorizontalLineSecond />
      <WaveFirst />
      <WaveSecond />
      <WaveThird />
      <WaveFour />
    </StylishDarkness>
  )
}

const StylishDarkness = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #101013;
  overflow: hidden;
`;

const VerticalCenterLine = styled.div`
  position: absolute;
  background: rgba(100, 100, 100, 0.1);
  height: 100%;
  width: 1px;
  left: 50%;
  z-index: 99999;
`;

const VerticalLineOneQuarter = styled.div`
  position: absolute;
  background: rgba(100, 100, 100, 0.1);
  height: 100%;
  width: 1px;
  left: 25%;
  
`;

const VerticalLineThreeQuarter = styled.div`
  position: absolute;
  background: rgba(100, 100, 100, 0.1);
  height: 100%;
  width: 1px;
  left: 75%;
`

const HorizontalLineFirst = styled.div`
  position: absolute;
  background: rgba(100, 100, 100, 0.1);
  width: 100%;
  height: 1px;
  top: 10%;
`;

const HorizontalLineSecond = styled.div`
  position: absolute;
  background: rgba(100, 100, 100, 0.1);
  width: 100%;
  height: 1px;
  top: 78%;
`;

const StyledWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${Wave});
  background-size: 1400px 100px;
`

const WaveFirst = styled(StyledWave)`
  animation: animate 30s linear infinite;
  z-index: 99999;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
`;

const WaveSecond = styled(StyledWave)`
  animation: animate2 15s linear infinite;
  z-index: 999;
  opacity: 0.1;
  animation-delay: -5s;
  bottom: 10px;
`;

const WaveThird = styled(StyledWave)`
  animation: animate2 15s linear infinite;
  z-index: 998;
  opacity: 0.1;
  animation-delay: -2s;
  bottom: 15px;
`
const WaveFour = styled(StyledWave)`
  animation: animate2 5s linear infinite;
  z-index: 997;
  opacity: 0.1;
  animation-delay: -2s;
  bottom: 20px;
`

export default Darkness
