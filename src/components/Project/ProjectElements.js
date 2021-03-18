import styled from "styled-components";

import { FaGithub } from "react-icons/fa";

export const ProjectContainer = styled.div`
  color: white;
  background: ${({ lightBg }) => (lightBg ? "#F8F8F8" : "#010606")};
  @media screen and (max-width: 1400px) {
    padding:50px 0 50px 0;
  }
  @media screen and (max-width: 900px) {
    padding: 20px 0 50px 0;
  }
`;
export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const ProjectRow = styled.div`
  padding: 28px 0;
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-areas:'col1 col2';

  @media screen and (max-width: 1400px) {
    grid-template-areas:'col1' 'col2';
    grid-gap: 0rem;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 1000px) {
    padding: 0px 50px;
    
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 60px;
  
  @media screen and (max-width: 1400px) {
    position:relative;
    margin:auto;
    max-width: 90%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  
`;

export const TopLineP = styled.p`
  color: #1b949a;
  font-size: 28px;
  line-height: 16px;
  font-weight: bold;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-bottom: 30px;
  @media screen and (max-width:700px){
    font-size:20px;
  }
  @media screen and (max-width:500px){
    font-size:15px;
  }
  @media screen and (max-width:400px){
    font-size:10px;
  }
`;

export const ProjectH2 = styled.h2`

  font-size: 22px;
  letter-spacing: 1.2px;
  margin-bottom:10px;
  margin-right:10px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  @media screen and (max-width:700px){
    font-size:18px;
  }
  @media screen and (max-width:500px){
    font-size:16px;
  }
  @media screen and (max-width:400px){
    font-size:14px;
  }
`;

export const Description = styled.p`
  max-width:min(550px,100%);
  text-align:left;
  margin-top: 35px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 28px;
  color: ${({ darkText }) => (darkText ? "#010606" : "white")};

  @media screen and (max-width:700px){
    font-size:14px;
    line-height:26px;
  }
  @media screen and (max-width:400px){
    font-size:12px;
    line-height:20px;
  }

`;

export const ImgWrap = styled.div`
  max-width: min(100%,1100px);
  padding: 0 24px;
  position: relative;
  transition: 0.2s linear;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height:100%;
  border-radius: 15px;
  cursor: pointer;
  border-color:${({lightBg})=>(lightBg ? "black":"white")};
  box-shadow:${({lightBg})=>(lightBg ? "0 1px 15px rgb(0,0,0,0.7)":"")};
`;

export const Video = styled.video`
  max-width:100%;
  max-height:100%;
  border-radius: 15px;
  object-fit:fill;
`

export const SocialIconLink = styled.a`
  margin-left: 20px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  font-size: 35px;
  @media screen and (max-width: 400px) {
    margin-left: 0px;
  }
`;

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
  right: ${({ right }) => (right ? "25px" : "")};
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const TopLine = ({ topLine, githubLink, lightText }) => {
  return (
    <>
      <TopLineP>
        {topLine}
        <SocialIconLink
          href={githubLink}
          target="_blank"
          lightText={lightText}
          aria-label="Github"
        >
          <FaGithub />
        </SocialIconLink>
      </TopLineP>
    </>
  );
};
