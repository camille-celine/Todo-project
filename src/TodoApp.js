import React from 'react';
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import useProjectState from "./hooks/useProjectState";
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

function TodoApp() {

  const initialProject = [{ id: 1, name: "My First Project"}];
  // Control the state of all the projects
  const {projects, addProject, removeProject} = useProjectState(initialProject);

  const drawerWidth = 240;
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              TodoApp
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem button >
                <ListItemIcon>
                  <KeyboardArrowDownIcon/>
                </ListItemIcon>
                Projects
              </ListItem>
              {projects.map((project, i) => (
                <ListItem>
                  <div dispay="block">{project.name}</div>
                  {i < projects.length - 1 && <Divider />}
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
          <ProjectForm addProject={addProject}/>
          <ProjectList 
            projects={projects} 
            removeProject={removeProject}
          />
        </Box>
      </Box> 
    </Paper>
  )
}

export default TodoApp;

