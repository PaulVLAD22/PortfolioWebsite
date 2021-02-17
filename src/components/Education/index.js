import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import {EducationContainer,EducationH1,EducationWrapper,EducationCard,
  EducationIcon,EducationH2,EducationP} from './EducationElements'
  
const Education = () => {
  return (
    <EducationContainer id="education">
      <EducationH1>Education</EducationH1>
      <EducationWrapper>
        <EducationCard>
          <EducationIcon src={Icon1}/>
            <EducationH2>National College I.L. Caragiale</EducationH2>
            <EducationH2>2015-2019</EducationH2>
            <EducationP>Mathematical Informatics
            </EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={Icon2}/>
            <EducationH2>University Of Bucharest</EducationH2>
            <EducationH2>2019-2022</EducationH2>
            <EducationP>Computer Science
            </EducationP>
        </EducationCard>
      </EducationWrapper>
    </EducationContainer>
  )
}

export default Education
