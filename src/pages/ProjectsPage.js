import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import { projectOne, projectTwo } from '../components/Project/Data'
import Project from '../components/Project'

const ProjectsPage = () => {


  return (
    <>
      <Project {...projectOne}></Project>
      <Project {...projectTwo}></Project>
    </>
  )
}

export default ProjectsPage