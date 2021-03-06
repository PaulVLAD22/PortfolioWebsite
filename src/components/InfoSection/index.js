import React from "react";
import { ImgWrap } from "./InfoElements";
import {
  DescriptionLine,
  DescriptionWrap,
  InfoWrapper,
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  BtnWrap,
  Img,
  BtnLink,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
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
                  {description.map((elem)=>{
                    return <DescriptionLine darkText={!lightText}>{elem}</DescriptionLine>
                  })
                  }
                </DescriptionWrap>
                {buttonLabel != "" && (
                  <BtnWrap>
                    <BtnLink to="/projects">{buttonLabel}</BtnLink>
                  </BtnWrap>
                )}
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

export default InfoSection;
