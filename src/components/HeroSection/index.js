import React from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="Home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>My Personal Website</HeroH1>
        <HeroP>
          Munteanu Vlad Paul, University of Bucharest, Computer Science
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
