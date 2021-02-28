import styled from "styled-components";

export const EducationContainer = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
`;

export const EducationWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 100px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const EducationCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 48px;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.4);
`;

export const EducationIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 30px;
`;

export const EducationH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  font-weight: 400;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const EducationH2 = styled.h2`
  text-align: center;
  font-size: 1.1rem;
  color: black;
  margin-bottom: 0.3rem;
`;

export const EducationP = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;
