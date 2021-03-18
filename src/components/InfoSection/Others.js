import React from "react";
import { ImgWrap } from "./InfoElements";
import {
  DescriptionWrap,
  DescriptionLine,
  InfoWrapper,
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Img,
  OtherH2,
} from "./InfoElements";

const Others = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <DescriptionWrap>
                  <ul>
                    <OtherH2>Programming Courses</OtherH2>
                    <li>3 Month Java Course - Certified by Telecom Academy</li>
                    <li>
                      1 Month Android App Development Course - Certification
                      issued by Romania's Ministry of National Education
                    </li>
                  </ul>
                  <br></br>
                </DescriptionWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Others;
