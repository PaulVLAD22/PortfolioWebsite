import React,{useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import { homeObjTwo } from '../components/InfoSection/Data'
import { homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Education'
import Education from '../components/Education'
import Others from '../components/InfoSection/Others'
const Home = () => {
  const [isOpen,setIsOpen]=useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} homeNav={true}/>
      <HeroSection/>
      <Education></Education>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Others {...homeObjThree}/>
    </>
  )
}

export default Home
