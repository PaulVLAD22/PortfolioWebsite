import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import { FaGithub} from 'react-icons/fa'

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
  height:900px;
  margin-right:auto;
  margin-left:auto;
  padding:0 24px;
  justify-content:center;
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
    (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  grid-template:1fr;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;

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

export const BtnWrap = styled.div`
  display:flex;
  justify-content:flex-start;
`

export const ImgWrap = styled.div`
  max-width:70%;
  height:100%;
  padding:0 24px;
`

export const Img= styled.img`
  width:100%;
  margin:0 0 10px 0;
  transition:0.2s ease-in-out;
  &:hover{
    cursor:pointer;
    transform:scale(1.3);
    transition:0.2s ease-in-out;
  }
`
export const SocialIconLink = styled.a`
  margin-left:20px;
  color:${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};
  font-size:35px;
  @media screen and (max-width:400px){
    margin-left:0px;
  }
`

export const BtnLink = styled(LinkR)`
  border-radius:50px;
  background:#57FEFF;
  white-space:nowrap;
  padding:10px 22px;
  color:#010606;
  font-size:16px;
  border:none;
  outline:none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration:none;
  &:hover{
    transition: all 0.2s ease-in-out;
    background:#1B949A;
  }
`
export const SlideshowButton = styled.button`
  font-size:2rem;
  background:#57FEFF;
  font-weight:600;
  outline:none;
  padding:3px;
  transition:all 0.2s ease-in-out;
  border:none;
  border-radius:10px;
  &:hover{
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    background:#1B949A;
  }

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