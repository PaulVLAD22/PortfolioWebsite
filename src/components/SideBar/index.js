import React from 'react'
import  {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'
import {animateScroll as scroll} from 'react-scroll'

const Sidebar = ({isOpen,toggle})=>{
  const toggleHome=()=>{
    scroll.scrollToTop()
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon>
        </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggleHome}>Home</SidebarLink>
          <SidebarLink to="education" onClick={toggle}>Education</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
          <SidebarLink to="others" onClick={toggle}>Others</SidebarLink>
          <SidebarLink to="footer" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
export default Sidebar;