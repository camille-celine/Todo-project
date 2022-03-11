import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useProjectState = initialProject => {
  const [projects, setProjects] = useState(initialProject);
  return {
    projects, 
    addProject: newProjectName => {
      setProjects([...projects, {id: uuidv4(), name: newProjectName}]);
    },
    removeProject: projectId => {
      const updatedProjects = projects.filter(project => project.id !== projectId);
      setProjects(updatedProjects);
    }
  }
}

export default useProjectState;

