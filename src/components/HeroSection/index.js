import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, HeroBtn, VideoBg,HeroContent,
  HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, Herobtn} from './HeroElements'

const HeroSection = () => {
  const [hover,setHover]=useState(false)
  const onHover =()=>{
    setHover(!hover)
  }
  return (
    <HeroContainer id="Home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>My Personal Website</HeroH1>
        <HeroP>
          Munteanu Vlad Paul, University of Bucharest, Computer Science
        </HeroP>
        <HeroBtnWrapper>
          <Herobtn to="education" onMouseEnter={onHover} onMouseLeave={onHover} dark={true} primary={true}
          smooth={true} duration={500} spy={true}
          exact='true' offset={-80}>
            Dive In{hover ? <ArrowForward/> : <ArrowRight/>}
          </Herobtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
