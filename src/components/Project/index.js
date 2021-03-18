import { React, useEffect, useState } from "react";
import { Spring } from "react-spring/renderprops-universal";

import {
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  ProjectH2,
  ImgWrap,
  Img,
  Description,
  SlideshowButton,
  Video
} from "./ProjectElements";

const Project = ({
  id,
  lightBg,
  topLine,
  lightText,
  frontEnd,
  backEnd,
  description,
  img,
  imgLinks,
  alt,
  githubLink,
  video
}) => {
  var opacity = 0;

  function MyFadeFunction() {
    if (opacity < 1) {
      opacity += 0.5;
      setTimeout(function() {
        MyFadeFunction();
      }, 200);
    }
    document.getElementById("imgWrap" + id).style.opacity = opacity;
  }

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const decreaseIndex = () => {
    if (imgIndex > 0) {
      MyFadeFunction();
      setImgIndex(imgIndex - 1);
    }
  };
  const increaseIndex = () => {
    if (imgIndex < img.length - 1) {
      MyFadeFunction();
      setImgIndex(imgIndex + 1);
    }
  };
  const openImg = () => {
    window.open(imgLinks[imgIndex]);
  };

  return (
    <ProjectContainer lightBg={lightBg}>
      <ProjectWrapper>
        <ProjectRow>
          <Column1>
            <TextWrapper>
              <TopLine
                lightText={lightText}
                topLine={topLine}
                githubLink={githubLink}
              ></TopLine>
              <ProjectH2 lightText={lightText ? 1 : 0}>
                {"Front-End: " + frontEnd}
              </ProjectH2>
              <ProjectH2 lightText={lightText ? 1 : 0}>
                {"Back-End: " + backEnd}
              </ProjectH2>
              <Description darkText={!lightText}>{description}</Description>
            </TextWrapper>
          </Column1>
          <Column2>
          {video==null ?
            <Spring
              from={{ opacity: 0, marginTop: 500 }}
              to={{ opacity: 1, marginTop: 0 }}
            >
              {(props) => (
                <ImgWrap style={props} id={"imgWrap" + id}>
                  {img.length!=1 &&
                  <>
                  <SlideshowButton onClick={decreaseIndex}>
                    &#10094;
                  </SlideshowButton>
                  <SlideshowButton right={true} onClick={increaseIndex}>
                    &#10095;
                  </SlideshowButton>
                  </>
                  }
                  <Img
                    lightBg={lightBg}
                    src={img[imgIndex]}
                    alt={alt}
                    id="img"
                    onClick={openImg}
                  ></Img>
                </ImgWrap>
              )}
            </Spring>
          :
            <Spring
            from={{ opacity: 0, marginTop: 500 }}
            to={{ opacity: 1, marginTop: 0 }}
            >
            {(props) => (
              <ImgWrap style={props} id={"imgWrap" + id}>
                <Video autoPlay loop muted src={video} type="video/mp4" />
              </ImgWrap>
            )}
            </Spring>
          }
          </Column2>
        </ProjectRow>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
