import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle,homeNav}) => {
  const [scrollNav,setScrollNav]=useState(false)
  
  const changeNav = ()=>{
    if (window.scrollY >= 80){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  const toggleHome=()=>{
    scroll.scrollToTop()
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[])

  return (
    <>
    <IconContext.Provider value={{ color:'white' }}>
      <Nav scrollNav={scrollNav} homeNav={homeNav}>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavLinks onClick={toggleHome} homeButton={true}>
              Home
            </NavLinks>
            <NavItem>
            <NavLinks to="education"
              smooth={true} duration={500} spy={true}
              exact='true' offset={-80}>Education
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills"
              smooth={true} duration={500} spy={true}
              exact='true' offset={-80}>Skills
              </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="projects"
              smooth={true} duration={500} spy={true}
              exact='true' offset={-80}>Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="others"
              smooth={true} duration={500} spy={true}
              exact='true' offset={-80}>Others
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="footer"
              smooth={true} duration={500} spy={true}
              exact='true' offset={-800}>Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
