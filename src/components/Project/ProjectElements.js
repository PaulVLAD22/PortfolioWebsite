import styled from 'styled-components'

import { FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export const ProjectContainer = styled.div`
  color:white;
  background:${({lightBg})=>(lightBg ? '#f9f9f9' : '#010606')};
  @media screen and (max-width:1500px){
    padding:100px 0;
  }
`
export const ProjectWrapper = styled.div`

  display:grid;
  z-index:1;
  height:100vh;
  margin-right:auto;
  margin-left:auto;
  padding:0 24px;
  justify-content:center;
  @media screen and (max-width:1000px){
    padding:0;
  }
`

export const ProjectRow = styled.div`
  padding:28px 0;
  display:grid;
  align-items: center;
  grid-gap:1rem;
  grid-template-areas:${({imgStart})=>imgStart ? `'col2 col1'` :
  `'col1 col2'`};

  @media screen and (max-width:1400px){
    grid-template-areas:${({imgStart})=>
    (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    grid-gap:0rem;
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  grid-template:1fr;
  display:flex;
  @media screen and (max-width:1000px){
    padding:0px 50px;
  }
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

`

export const TextWrapper = styled.div`
  max-width:550px;
  padding-top:0;
  padding-bottom: 60px;
  @media screen and (max-width:1200px){
    max-width:450px;
  }
`

export const TopLineP = styled.p`
  color:#1B949A;
  font-size:16px;
  line-height:16px;
  font-weight:700;
  letter-spacing:1.4px;
  text-transform:uppercase;
  margin-bottom:16px;
`
export const Heading = styled.h1`
  margin-bottom:24px;
  font-size:48px;
  line-height:1.1;
  font-weight:600;
  color:${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width:480px){
    font-size:32px;
  }
`
export const ProjectH2=styled.h2`
  font-size:18px;
  color:${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};
`

export const Description=styled.p`
  max-width:550px;
  margin-top:35px;
  margin-bottom:35px;
  font-size:18px;
  line-height:24px;
  color:${({darkText})=> (darkText ? '#010606' : 'white')};

  @media screen and (max-width:1000px){
    max-width:350px;
  }

  @media screen and (max-width:768px){
    max-width:400px;
  }
  @media screen and (max-width:500px){
    max-width:350px;
  }
`

export const ImgWrap = styled.div`
  max-width:100%;
  height:100%;
  padding:0 24px;
  position:relative;
  transition: 0.2s linear;
`

export const Img= styled.img`
  max-width:100%;
  border-radius:15px;
  cursor:pointer;
`
export const SocialIconLink = styled.a`
  margin-left:20px;
  color:${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};
  font-size:35px;
  @media screen and (max-width:400px){
    margin-left:0px;
  }
`

export const SlideshowButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.3s ease-in-out;
  border-radius: 0 3px 3px 0;
  user-select: none;
  right:${({right})=>(right ? '25px' : '')};
  &:hover{
    background-color: rgba(0,0,0,0.8);
  }
`
export const AppLink = styled(Link)`
  
`

export const TopLine=({topLine,githubLink,lightText})=>{
  return (
    <>
    <TopLineP>{topLine}
    <SocialIconLink href={githubLink} target="_blank" lightText={lightText}
      aria-label="Github">
      <FaGithub/>
    </SocialIconLink>
    </TopLineP>
    </>
    
  )
}