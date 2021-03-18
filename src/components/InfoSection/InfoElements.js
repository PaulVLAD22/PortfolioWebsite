import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const InfoContainer = styled.div`
  color: white;
  background: ${({ lightBg }) => (lightBg ? "white" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 1200px) {
    max-width: 450px;
  }
  @media screen and (max-width: 768px) {
    max-width: 450px;
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  color: #1b949a;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  ::after{
    content:"...";
  }
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const DescriptionWrap = styled.div`
  max-width: 550px;
  margin-bottom: 35px;
`
export const DescriptionLine = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "white")};
  margin-bottom:20px;

  @media screen and (max-width: 1000px) {
    max-width: 350px;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 450px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Img = styled.img`
  width: 100%;
  padding-bottom: 10px;
`;

export const OtherH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`;

export const BtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #57feff;
  white-space: nowrap;
  padding: 12px 20px;
  color: #010606;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.1s ease-in-out;
    background: #1b949a;
    transform:scale(1.02);
  }
`;


