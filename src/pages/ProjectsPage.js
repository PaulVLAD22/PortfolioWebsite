import React from "react";
import {projectOne, projects} from "../components/Project/Data";
import Project from "../components/Project";

const ProjectsPage = () => {
  return (
    <>
      {projects.map((elem)=>{
        return <Project {...elem}></Project>
      })
      }
    </>
  );
};

export default ProjectsPage;
