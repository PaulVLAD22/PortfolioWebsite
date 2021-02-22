import {React,useEffect,useState} from 'react'

import {ProjectContainer,ProjectWrapper,ProjectRow,Column1,Column2,
TextWrapper,TopLine,ProjectH2,ImgWrap,Img,Description,SlideshowButton,AppLink} from './ProjectElements'

const Project = ({lightBg,imgStart,topLine,lightText,frontEnd,backEnd,description,img,imgLinks,alt,githubLink,appLink})=>{
  
  const [imgIndex,setImgIndex]=useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  const decreaseIndex = ()=>{
    if (imgIndex>0)
      setImgIndex(imgIndex-1)
  }
  const increaseIndex = () =>{
    if (imgIndex<img.length-1)
      setImgIndex(imgIndex+1)
  }
  const openImg = () =>{
    window.open(imgLinks[imgIndex])
  }

  return (
    <ProjectContainer lightBg={lightBg}>
        <ProjectWrapper>
          <ProjectRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText} topLine={topLine} githubLink={githubLink}></TopLine>
                {appLink!='' &&
                  <AppLink>Try It</AppLink>
                }
                <ProjectH2 lightText={lightText ? 1:0}>{"Front-End: "+frontEnd}</ProjectH2>
                <ProjectH2 lightText={lightText ? 1:0}>{"Back-End: "+backEnd}</ProjectH2>
                <Description darkText={!(lightText)} >{description}</Description>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              <SlideshowButton onClick={decreaseIndex}>&#10094;</SlideshowButton>
              <SlideshowButton right={true} onClick={increaseIndex} >&#10095;</SlideshowButton>
                <Img src={img[imgIndex]} alt={alt} id="img" onClick={openImg}>
                </Img>
              </ImgWrap>
            </Column2>
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
  )
}

export default Project