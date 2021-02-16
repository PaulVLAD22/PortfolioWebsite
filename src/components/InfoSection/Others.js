import React from 'react'
import { Button } from '../ButtonElement'
import { ImgWrap } from './InfoElements'
import {InfoWrapper, InfoContainer,InfoRow,Column1,Column2,TextWrapper,
TopLine,Heading,Subtitle,BtnWrap,Img,OtherH2} from './InfoElements'

const Others = ({
lightBg,
id,
imgStart,
topLine,
lightText,
headline,
buttonLabel,
img,
alt,
dark,
dark2}) => {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle>
                  <ul><OtherH2>Programming Courses</OtherH2>
                    <li>3 Month Java Course - Certified by Telecom Academy</li>
                    <li>1 Month Android App Development Course - Certification issued by Romania's Ministry of National Education</li>
                  </ul>
                  <br></br>
                </Subtitle>
                { buttonLabel!='' &&
                <BtnWrap>
                  <Button to="home" 
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  offset={-80}
                  primary={true}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}>{buttonLabel} 
                  </Button>
                </BtnWrap>
                }
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}>
                </Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Others