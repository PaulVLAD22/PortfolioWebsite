import React from "react";
import { projectOne, projectTwo, projectThree } from "../components/Project/Data";
import Project from "../components/Project";

const ProjectsPage = () => {
  return (
    <>
      <Project {...projectOne}></Project>
      <Project {...projectTwo}></Project>
      <Project {...projectThree}></Project>
    </>
  );
};

export default ProjectsPage;
