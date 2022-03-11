import React from "react";
import Project from "./Project";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function ProjectList(props) {
  return (
    <Paper>
      <List>
        {props.projects.map((project, i) => (
          <>
            <Project 
              name={project.name} 
              id={project.id}
              key={project.id} 
              removeProject={props.removeProject}
            />
            {i < props.projects.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default ProjectList;